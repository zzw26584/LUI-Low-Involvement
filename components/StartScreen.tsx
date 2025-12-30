
import React, { useState } from 'react';
import { ParticipantInfo } from '../types';

interface StartScreenProps {
  onStart: (info: ParticipantInfo) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [info, setInfo] = useState<ParticipantInfo>({
    id: '',
    runCount: '',
    gender: '',
    age: ''
  });

  // 通用的纯数字输入处理函数，防止数值偏移 (如 1 变 0)
  const handleNumericChange = (field: keyof ParticipantInfo, value: string) => {
    // 1. 仅保留数字字符
    const sanitized = value.replace(/[^\d]/g, '');
    
    // 2. 移除前导零（例如 "05" 变为 "5"），但保留空的输入状态
    const finalValue = sanitized === '' ? '' : parseInt(sanitized, 10).toString();
    
    setInfo(prev => ({
      ...prev,
      [field]: finalValue
    }));
  };

  const isInvalid = !info.id || !info.runCount || !info.gender || !info.age;

  return (
    <div className="max-w-md w-full p-10 bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/50 animate-in fade-in zoom-in duration-500">
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </div>
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">实验信息登记</h1>
        <p className="text-gray-400 text-sm mt-1 font-medium">请务必填写准确的个人身份信息</p>
      </div>
      
      <div className="space-y-6">
        {/* 被试 ID */}
        <div>
          <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 ml-1">被试 ID (Participant ID)</label>
          <input 
            type="text" 
            placeholder="例如: P01"
            className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-gray-700"
            value={info.id}
            onChange={e => setInfo({...info, id: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Run 次数 - 已修复偏移问题 */}
          <div>
            <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 ml-1">Run 次数</label>
            <input 
              type="text" 
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="1"
              className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-gray-700"
              value={info.runCount}
              onChange={e => handleNumericChange('runCount', e.target.value)}
            />
          </div>

          {/* 年龄 - 已修复偏移问题 */}
          <div>
            <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 ml-1">年龄</label>
            <input 
              type="text" 
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="25"
              className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-gray-700"
              value={info.age}
              onChange={e => handleNumericChange('age', e.target.value)}
            />
          </div>
        </div>

        {/* 性别 */}
        <div>
          <label className="block text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2 ml-1">性别</label>
          <div className="grid grid-cols-2 gap-3">
            {['男', '女'].map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setInfo({...info, gender: g as any})}
                className={`p-4 rounded-2xl font-bold border-2 transition-all ${
                  info.gender === g 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-100' 
                    : 'bg-gray-50 border-transparent text-gray-500 hover:bg-gray-100'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={() => onStart(info)}
          disabled={isInvalid}
          className={`w-full py-5 rounded-2xl font-black text-lg transition-all shadow-xl group ${
            isInvalid 
              ? 'bg-gray-100 text-gray-300 cursor-not-allowed shadow-none' 
              : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98] shadow-blue-200'
          }`}
        >
          {isInvalid ? '请完善所有信息' : (
            <span className="flex items-center justify-center gap-2">
              开始实验
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          )}
        </button>
      </div>

      <div className="mt-8 text-center">
        <span className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.3em]">
          Hotel Decision Study v2.5
        </span>
      </div>
    </div>
  );
};

export default StartScreen;
