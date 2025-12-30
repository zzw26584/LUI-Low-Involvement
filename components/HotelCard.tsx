
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  isSelected?: boolean;
  isRecommended?: boolean;
  onSelect?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isSelected, isRecommended, onSelect }) => {
  return (
    <div 
      onClick={onSelect}
      className={`relative border rounded-2xl overflow-hidden transition-all cursor-pointer bg-white flex flex-col ${
        isSelected ? 'ring-2 ring-blue-500 border-blue-500 bg-blue-50 shadow-lg' : 
        isRecommended ? 'ring-2 ring-orange-400 border-orange-400 bg-orange-50 shadow-md' : 'hover:shadow-md'
      }`}
    >
      {isRecommended && (
        <div className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] px-2 py-1 rounded-lg font-bold z-10 shadow-sm">
          最佳推荐
        </div>
      )}
      <img src={product.imageUrl} alt={product.name} className="h-28 w-full object-cover" />
      <div className="p-3 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-sm text-gray-800 line-clamp-2 leading-tight flex-grow pr-2">{product.name}</h3>
          <div className="text-right shrink-0">
            <p className="text-orange-600 font-bold text-sm">¥{product.price}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">{product.rating}</span>
          <span className="text-gray-400 text-[10px] line-clamp-1">{product.summary}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {product.attributes.slice(0, 4).map((attr, idx) => (
            <span key={idx} className="text-[9px] bg-gray-50 text-gray-500 px-1.5 py-0.5 rounded border border-gray-100">
              {attr.label}: {attr.value}
            </span>
          ))}
        </div>

        <button className={`mt-auto w-full py-2 rounded-xl text-xs font-bold transition-all ${
          isSelected ? 'bg-blue-600 text-white shadow-inner' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}>
          {isSelected ? '已选择' : '点击选择'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
