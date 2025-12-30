
import React, { useState, useEffect } from 'react';
import { SurveyResponse, Product } from '../types';

interface LikertScaleProps {
  label: string;
  value: number | null;
  minLabel: string;
  maxLabel: string;
  onChange: (val: number) => void;
}

// 定义在外部以防止在 SurveyInterface 重新渲染时被销毁并重新创建
// 解决组件跳动和焦点丢失的问题
const LikertScaleItem: React.FC<LikertScaleProps> = ({ label, value, minLabel, maxLabel, onChange }) => {
  return (
    <div className="space-y-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
      <label className="block text-lg font-bold text-gray-800 leading-tight">
        {label}
      </label>
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-5 gap-2 sm:gap-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => onChange(num)}
              className={`h-16 rounded-xl border-2 font-bold transition-all duration-200 flex flex-col items-center justify-center gap-1 ${
                value === num
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-50 border-gray-100 text-gray-400 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-500'
              }`}
            >
              <span className="text-xl">{num}</span>
            </button>
          ))}
        </div>
        <div className="flex justify-between px-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>
      </div>
    </div>
  );
};

interface SurveyInterfaceProps {
  product: Product;
  onComplete: (survey: SurveyResponse) => void;
}

const SurveyInterface: React.FC<SurveyInterfaceProps> = ({ product, onComplete }) => {
  // 核心状态：所有评分初始为 null，确保“未选”状态明确
  const [importance, setImportance] = useState<number | null>(null);
  const [usualTime, setUsualTime] = useState<string>(''); // 使用 string 存储原始输入，避免 1 变 0 的偏移问题
  const [satisfaction, setSatisfaction] = useState<number | null>(null);
  const [efficiency, setEfficiency] = useState<number | null>(null);
  const [trust, setTrust] = useState<number | null>(null);
  const [ability, setAbility] = useState<number | null>(null);

  // 验证是否所有项都已填写
  const isComplete = 
    importance !== null && 
    usualTime.trim() !== '' && 
    satisfaction !== null && 
    efficiency !== null && 
    trust !== null && 
    ability !== null;

  const handleSubmit = () => {
    if (!isComplete) return;

    onComplete({
      importance: importance!,
      usualTime: parseInt(usualTime, 10),
      satisfaction: satisfaction!,
      efficiency: efficiency!,
      trust: trust!,
      ability: ability!
    });
  };

  // 处理耗时输入的逻辑，确保纯数字且无偏移
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^\d]/g, ''); // 仅保留数字
    // 移除前导零（除非只是 '0'）
    const sanitized = val === '' ? '' : parseInt(val, 10).toString();
    setUsualTime(val === '' ? '' : sanitized);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-black text-gray-900">主观评价问卷</h2>
        <p className="text-gray-500 font-medium">针对刚才选择的 <span className="text-blue-600 font-bold">"{product.name}"</span> 请完成以下评价</p>
      </div>

      <div className="space-y-6">
        {/* 1. 重要性 */}
        <LikertScaleItem 
          label="1. 刚才的任务目标对您来说重要吗？"
          value={importance}
          minLabel="非常不重要"
          maxLabel="非常重要"
          onChange={setImportance}
        />

        {/* 2. 耗时输入 - 修正逻辑 */}
        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <label className="block text-lg font-bold text-gray-800 leading-tight">
            2. 在日常生活中，做这类决定您通常耗时多少分钟？
          </label>
          <div className="relative">
            <input 
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={usualTime}
              onChange={handleTimeChange}
              placeholder="请输入分钟数"
              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-lg font-bold text-blue-600 pr-16"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">分钟</span>
          </div>
          {usualTime === '' && <p className="text-[10px] text-orange-500 font-bold">* 请输入耗时</p>}
        </div>

        {/* 3. 满意度 */}
        <LikertScaleItem 
          label="3. 您对刚才挑选出的商品满意吗？"
          value={satisfaction}
          minLabel="非常不满意"
          maxLabel="非常满意"
          onChange={setSatisfaction}
        />

        {/* 4. 高效性 */}
        <LikertScaleItem 
          label="4. 您认为刚才的决策过程高效吗？"
          value={efficiency}
          minLabel="非常低效"
          maxLabel="非常高效"
          onChange={setEfficiency}
        />

        {/* 5. 可信赖度 */}
        <LikertScaleItem 
          label="5. 您认为 AI 助手提供的信息可信吗？"
          value={trust}
          minLabel="非常不可信"
          maxLabel="非常可信"
          onChange={setTrust}
        />

        {/* 6. 擅长程度 */}
        <LikertScaleItem 
          label="6. 您觉得自己擅长做这类决策吗？"
          value={ability}
          minLabel="非常不擅长"
          maxLabel="非常擅长"
          onChange={setAbility}
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={!isComplete}
        className={`w-full py-5 rounded-2xl font-black text-xl transition-all shadow-xl ${
          isComplete 
            ? 'bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98] shadow-blue-200' 
            : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
        }`}
      >
        {isComplete ? '提交评价并进入下一场' : '请完成所有评分'}
      </button>

      <div className="text-center">
        <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">
          Experiment Protocol Version 2.1
        </p>
      </div>
    </div>
  );
};

export default SurveyInterface;
