
import React, { useState, useEffect } from 'react';
import { TRIALS } from './constants';
import { Product, AppState, SurveyResponse, ParticipantInfo, TrialResult, TrialTask } from './types';
import ChatInterface from './components/ChatInterface';
import SurveyInterface from './components/SurveyInterface';
import StartScreen from './components/StartScreen';

// Fisher-Yates 洗牌算法
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.START);
  const [participant, setParticipant] = useState<ParticipantInfo | null>(null);
  const [shuffledTrials, setShuffledTrials] = useState<TrialTask[]>([]);
  const [currentTrialIndex, setCurrentTrialIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // 计时与追踪
  const [trialStartTime, setTrialStartTime] = useState<number>(0);
  const [trialEndTime, setTrialEndTime] = useState<number>(0);
  const [interactionCount, setInteractionCount] = useState<number>(0);
  
  const [results, setResults] = useState<TrialResult[]>([]);

  // 获取当前随机序列中的任务
  const currentTask = shuffledTrials[currentTrialIndex];

  const handleStartExperiment = (info: ParticipantInfo) => {
    // 在开始时进行随机洗牌
    const randomized = shuffleArray(TRIALS);
    setShuffledTrials(randomized);
    setParticipant(info);
    setAppState(AppState.CHAT);
  };

  const captureFirstMessageTime = () => {
    setTrialStartTime(Date.now());
  };

  const handleProductSelect = (product: Product, count: number) => {
    setTrialEndTime(Date.now());
    setInteractionCount(count);
    setSelectedProduct(product);
    setAppState(AppState.SURVEY);
  };

  const handleSurveyComplete = (survey: SurveyResponse) => {
    const duration = (trialEndTime - trialStartTime) / 1000;
    
    const result: TrialResult = {
      trialId: currentTask.id, // 记录原始任务ID
      conditionN: currentTask.objectCount,
      conditionD: currentTask.dimensionCount,
      startTime: trialStartTime,
      endTime: trialEndTime,
      durationSeconds: duration,
      interactionCount: interactionCount,
      selectedProductId: selectedProduct!.id,
      survey
    };

    const newResults = [...results, result];
    setResults(newResults);

    if (currentTrialIndex < shuffledTrials.length - 1) {
      setCurrentTrialIndex(prev => prev + 1);
      setAppState(AppState.CHAT);
      setSelectedProduct(null);
      setTrialStartTime(0);
      setTrialEndTime(0);
    } else {
      setAppState(AppState.FINISHED);
      exportResults(newResults);
    }
  };

  const exportResults = (finalResults: TrialResult[]) => {
    // 定义 CSV 表头
    const headers = [
      '被试ID', 'Run次数', '性别', '年龄', 
      '试次顺序(1-32)', '原始任务ID', '商品数量(N)', '属性维度(D)', 
      '用时(秒)', '交互次数', '所选商品ID',
      '问卷-重要性', '问卷-日常花费时间', '问卷-满意度', '问卷-高效性', '问卷-可信赖度', '问卷-擅长程度'
    ];

    // 将数据打平为行
    const rows = finalResults.map((res, index) => [
      participant?.id,
      participant?.runCount,
      participant?.gender,
      participant?.age,
      index + 1,
      res.trialId,
      res.conditionN,
      res.conditionD,
      res.durationSeconds.toFixed(2),
      res.interactionCount,
      res.selectedProductId,
      res.survey.importance,
      res.survey.usualTime,
      res.survey.satisfaction,
      res.survey.efficiency,
      res.survey.trust,
      res.survey.ability
    ]);

    // 构建 CSV 内容
    // 使用 \uFEFF 前缀解决 Excel 打开中文乱码问题
    const csvContent = "\uFEFF" + [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Experiment_Data_${participant?.id}_Run${participant?.runCount}_${new Date().getTime()}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const progress = shuffledTrials.length > 0 ? ((currentTrialIndex) / shuffledTrials.length) * 100 : 0;

  if (appState === AppState.START) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100">
        <StartScreen onStart={handleStartExperiment} />
      </div>
    );
  }

  if (appState === AppState.FINISHED) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-xl border border-gray-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">实验已完成！</h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            数据已自动导出为 Excel 兼容的 CSV 格式。感谢您的参与。
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg"
          >
            返回起始页
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7fa]">
      <div className="w-full h-1.5 bg-gray-200">
        <div 
          className="h-full bg-blue-600 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="w-full h-[85vh] max-w-5xl">
          {appState === AppState.CHAT && currentTask ? (
            <ChatInterface 
              task={currentTask} 
              trialNumber={currentTrialIndex + 1}
              totalTrials={shuffledTrials.length}
              onFirstMessage={captureFirstMessageTime}
              onFinalSelection={handleProductSelect} 
            />
          ) : (
            selectedProduct && (
              <div className="h-full overflow-y-auto custom-scrollbar">
                <SurveyInterface 
                  product={selectedProduct} 
                  onComplete={handleSurveyComplete} 
                />
              </div>
            )
          )}
        </div>
      </main>

      <footer className="py-4 px-8 flex justify-between items-center bg-white border-t border-gray-100 shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Live Experiment</span>
          </div>
          {participant && (
            <div className="text-[10px] text-gray-500 font-medium">
              ID: {participant.id} | AGE: {participant.age} | GENDER: {participant.gender} | RUN: {participant.runCount}
            </div>
          )}
        </div>
        <div className="text-xs text-gray-400 font-medium">
          Trial <span className="text-blue-600 font-bold">{currentTrialIndex + 1}</span> / {shuffledTrials.length}
          <span className="ml-2 text-[10px] opacity-30">(Orig. ID: {currentTask?.id})</span>
        </div>
      </footer>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #888; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #555; }
      `}</style>
    </div>
  );
};

export default App;
