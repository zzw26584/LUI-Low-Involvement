
import React, { useState, useRef, useEffect } from 'react';
import { Message, Product, TrialTask } from '../types';
import { getHotelRecommendation } from '../services/geminiService';
import ProductCard from './HotelCard';

interface ChatInterfaceProps {
  task: TrialTask;
  trialNumber: number; // 新增：当前试次序号
  totalTrials: number; // 新增：总试次数
  onFirstMessage: () => void;
  onFinalSelection: (product: Product, interactionCount: number) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  task, 
  trialNumber, 
  totalTrials, 
  onFirstMessage, 
  onFinalSelection 
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim() || isTyping) return;

    if (interactionCount === 0) {
      onFirstMessage();
    }

    setInteractionCount(prev => prev + 1);

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    const recommendation = await getHotelRecommendation(inputValue, task.products, task.instruction, task.objectCount);
    
    if (recommendation) {
      const candidates = task.products.filter(p => recommendation.candidates.includes(p.id));
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: recommendation.analysis,
        suggestedProducts: candidates,
        recommendationId: recommendation.recommendationId,
        analysis: recommendation.recommendationSlogan
      };
      setMessages(prev => [...prev, aiMessage]);
    } else {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "抱歉，我无法根据您的需求提供具体的推荐，请尝试调整描述。"
      }]);
    }
    
    setIsTyping(false);
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-5 text-white flex justify-between items-center shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold">AI 决策助手</h1>
            <p className="text-xs opacity-75">正在为您进行深度权衡对比</p>
          </div>
        </div>
        {/* 修改处：将任务 ID 替换为 X/Y 进度显示 */}
        <div className="px-4 py-1.5 bg-white/20 rounded-full text-sm font-black backdrop-blur-md border border-white/10">
          {trialNumber} / {totalTrials}
        </div>
      </div>

      <div className="bg-blue-50 px-6 py-3 border-b border-blue-100">
        <p className="text-[11px] font-bold text-blue-400 uppercase tracking-widest mb-1">当前任务目标</p>
        <p className="text-sm text-blue-900 font-medium">{task.instruction}</p>
      </div>

      <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-8 bg-gray-50/30">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-60">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <p className="text-sm max-w-xs">请告诉助手您的筛选标准，它将为您提供最优的权衡方案。</p>
          </div>
        )}

        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[90%] ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none' : 'bg-white border border-gray-100 rounded-2xl rounded-tl-none'} p-5 shadow-sm`}>
              <div className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</div>
              
              {msg.suggestedProducts && msg.suggestedProducts.length > 0 && (
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-px bg-gray-200 flex-grow"></div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">备选方案</span>
                    <div className="h-px bg-gray-200 flex-grow"></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {msg.suggestedProducts.map(product => (
                      <ProductCard 
                        key={product.id} 
                        product={product} 
                        isRecommended={product.id === msg.recommendationId}
                        onSelect={() => onFinalSelection(product, interactionCount)}
                      />
                    ))}
                  </div>
                  {msg.analysis && (
                    <div className="bg-orange-50 border border-orange-100 p-3 rounded-xl text-orange-800 text-xs font-medium italic">
                      “ {msg.analysis} ”
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none p-4 shadow-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-gray-100 shrink-0">
        <div className="flex gap-3 items-center">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="描述您的需求，助手将为您权衡利弊..."
            className="flex-grow p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all shadow-inner"
          />
          <button 
            onClick={handleSend}
            disabled={!inputValue.trim() || isTyping}
            className={`p-4 rounded-2xl transition-all ${
              !inputValue.trim() || isTyping ? 'bg-gray-100 text-gray-300' : 'bg-blue-600 text-white shadow-xl hover:bg-blue-700 active:scale-95'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
