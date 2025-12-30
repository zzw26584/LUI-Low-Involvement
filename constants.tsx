
import { TrialTask } from './types';

export const TRIALS: TrialTask[] = [
  // ==========================================
  // 1. 对象数: 5, 维度数: 5 (2个)
  // ==========================================
  {
    id: 1, type: 'DAILY', objectCount: 5, dimensionCount: 5,
    instruction: "假设你最近家里的洗发水快用完了，你打算在网上买一袋补充装。你希望找一款价格不到50元、薄荷香味、2L超大容量、带有方便的泵头压取设计，并且快递能在3天内送达的洗发水。",
    reminder: "洗发水，<50元，薄荷味，2L，带泵头，3日达。",
    products: [
      { id: 'd1_0', name: '清爽洗发水 A', price: 59.9, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=200', summary: '超市热销款，全家适用。', attributes: [{ label: '香味', value: '柠檬' }, { label: '容量', value: '2L' }, { label: '设计', value: '翻盖' }, { label: '物流', value: '7天' }, { label: '价格', value: '59.9' }] },
      { id: 'd1_1', name: '清爽洗发水 B', price: 45.0, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=200', summary: '经典配方，柔顺亮泽。', attributes: [{ label: '香味', value: '薰衣草' }, { label: '容量', value: '1L' }, { label: '设计', value: '泵头' }, { label: '物流', value: '4天' }, { label: '价格', value: '45.0' }] },
      { id: 'd1_2', name: '清爽洗发水 C', price: 39.9, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=200', summary: '深层清洁，酷爽体验。', attributes: [{ label: '香味', value: '薄荷' }, { label: '容量', value: '2L' }, { label: '设计', value: '泵头' }, { label: '物流', value: '2天' }, { label: '价格', value: '39.9' }] },
      { id: 'd1_3', name: '清爽洗发水 D', price: 55.0, rating: 4.1, imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=200', summary: '草本精华，呵护头皮。', attributes: [{ label: '香味', value: '生姜' }, { label: '容量', value: '750ml' }, { label: '设计', value: '按压' }, { label: '物流', value: '3天' }, { label: '价格', value: '55.0' }] },
      { id: 'd1_4', name: '清爽洗发水 E', price: 49.9, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=200', summary: '沙龙级品质。', attributes: [{ label: '香味', value: '无香' }, { label: '容量', value: '2L' }, { label: '设计', value: '翻盖' }, { label: '物流', value: '6天' }, { label: '价格', value: '49.9' }] }
    ]
  },
  {
    id: 17, type: 'DAILY', objectCount: 5, dimensionCount: 5,
    instruction: "假设你正打算买一箱洗衣液放在家里备用。你希望能选购一款价格在60元以内、带有薰衣草清香、具备专业除菌功能、规格为4kg大瓶装，并能在5日内送达的产品。",
    reminder: "洗衣液，<60元，薰衣草，除菌，4kg，5日达。",
    products: [
      { id: 'd17_0', name: '洁净洗衣液 A', price: 65.0, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200', summary: '强力去渍，呵护衣物。', attributes: [{ label: '香味', value: '薰衣草' }, { label: '功能', value: '含除菌' }, { label: '规格', value: '4kg' }, { label: '时效', value: '2天' }, { label: '价格', value: '65.0' }] },
      { id: 'd17_1', name: '洁净洗衣液 B', price: 58.0, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200', summary: '清新花香，柔顺如新。', attributes: [{ label: '香味', value: '茉莉' }, { label: '功能', value: '普通' }, { label: '规格', value: '3kg' }, { label: '时效', value: '3天' }, { label: '价格', value: '58.0' }] },
      { id: 'd17_2', name: '洁净洗衣液 C', price: 49.9, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200', summary: '实惠之选，居家必备。', attributes: [{ label: '香味', value: '薰衣草' }, { label: '功能', value: '除螨' }, { label: '规格', value: '2kg' }, { label: '时效', value: '6天' }, { label: '价格', value: '49.9' }] },
      { id: 'd17_3', name: '洁净洗衣液 D', price: 72.0, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200', summary: '亮白护色配方。', attributes: [{ label: '香味', value: '无香' }, { label: '功能', value: '除菌' }, { label: '规格', value: '4kg' }, { label: '时效', value: '4天' }, { label: '价格', value: '72.0' }] },
      { id: 'd17_4', name: '洁净洗衣液 E', price: 48.0, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200', summary: '自然洁净，安心之选。', attributes: [{ label: '香味', value: '薰衣草' }, { label: '功能', value: '含除菌' }, { label: '规格', value: '4kg' }, { label: '时效', value: '3天' }, { label: '价格', value: '48.0' }] }
    ]
  },

  // ==========================================
  // 2. 对象数: 5, 维度数: 4 (2个)
  // ==========================================
  {
    id: 2, type: 'ACCESSORY', objectCount: 5, dimensionCount: 4,
    instruction: "假设你刚买新手机，想挑选一个耐用的手机壳。你希望这款壳子价格低于30元、材质必须是柔软的硅胶、用户评价里要明确提到无异味，且颜色必须是黑色。",
    reminder: "手机壳，<30元，硅胶，无异味，黑色。",
    products: [
      { id: 'd2_0', name: '磨砂手机壳 A', price: 15.0, rating: 4.1, imageUrl: 'https://images.pexels.com/photos/14833708/pexels-photo-14833708.jpeg', summary: '极致轻薄。', attributes: [{ label: '材质', value: '硬塑料' }, { label: '评价', value: '无异味' }, { label: '颜色', value: '黑色' }, { label: '单价', value: '15.0' }] },
      { id: 'd2_1', name: '磨砂手机壳 B', price: 19.9, rating: 4.4, imageUrl: 'https://images.pexels.com/photos/14833708/pexels-photo-14833708.jpeg', summary: '手感舒适，全包防摔。', attributes: [{ label: '材质', value: '硅胶' }, { label: '评价', value: '无异味' }, { label: '颜色', value: '黑色' }, { label: '单价', value: '19.9' }] },
      { id: 'd2_2', name: '磨砂手机壳 C', price: 35.0, rating: 4.5, imageUrl: 'https://images.pexels.com/photos/14833708/pexels-photo-14833708.jpeg', summary: '真皮质感。', attributes: [{ label: '材质', value: '皮革' }, { label: '评价', value: '手感极佳' }, { label: '颜色', value: '棕色' }, { label: '单价', value: '35.0' }] },
      { id: 'd2_3', name: '磨砂手机壳 D', price: 28.0, rating: 4.2, imageUrl: 'https://images.pexels.com/photos/14833708/pexels-photo-14833708.jpeg', summary: '透明防发黄。', attributes: [{ label: '材质', value: '硅胶' }, { label: '评价', value: '略有味道' }, { label: '颜色', value: '透明' }, { label: '单价', value: '28.0' }] },
      { id: 'd2_4', name: '磨砂手机壳 E', price: 12.0, rating: 3.9, imageUrl: 'https://images.pexels.com/photos/14833708/pexels-photo-14833708.jpeg', summary: '极简风格。', attributes: [{ label: '材质', value: 'TPU' }, { label: '评价', value: '无异味' }, { label: '颜色', value: '蓝色' }, { label: '单价', value: '12.0' }] }
    ]
  },
  {
    id: 18, type: 'FOOD', objectCount: 5, dimensionCount: 4,
    instruction: "假设你准备去超市买几罐午餐肉作为家里的常备存货。你希望选购一款淀粉含量较低、单价在30元以内、采用方便的易拉罐包装且单罐净含量为340g的产品。",
    reminder: "午餐肉，低淀粉，<30元，易拉，340g。",
    products: [
      { id: 'd18_0', name: '经典午餐肉 A', price: 35.0, rating: 4.6, imageUrl: 'https://images.pexels.com/photos/5491290/pexels-photo-5491290.jpeg', summary: '高肉含量，真材实料。', attributes: [{ label: '淀粉', value: '极低' }, { label: '开启', value: '易拉罐' }, { label: '重量', value: '340g' }, { label: '价格', value: '35.0' }] },
      { id: 'd18_1', name: '经典午餐肉 B', price: 22.0, rating: 4.0, imageUrl: 'https://images.pexels.com/photos/5491290/pexels-photo-5491290.jpeg', summary: '实惠家庭装。', attributes: [{ label: '淀粉', value: '中等' }, { label: '开启', value: '需开罐器' }, { label: '重量', value: '198g' }, { label: '价格', value: '22.0' }] },
      { id: 'd18_2', name: '经典午餐肉 C', price: 29.0, rating: 4.3, imageUrl: 'https://images.pexels.com/photos/5491290/pexels-photo-5491290.jpeg', summary: '火锅必备。', attributes: [{ label: '淀粉', value: '低' }, { label: '开启', value: '需开罐器' }, { label: '重量', value: '340g' }, { label: '价格', value: '29.0' }] },
      { id: 'd18_3', name: '经典午餐肉 D', price: 25.0, rating: 4.4, imageUrl: 'https://images.pexels.com/photos/5491290/pexels-photo-5491290.jpeg', summary: '肉质紧实，开盖即食。', attributes: [{ label: '淀粉', value: '极低' }, { label: '开启', value: '易拉罐' }, { label: '重量', value: '340g' }, { label: '价格', value: '25.0' }] },
      { id: 'd18_4', name: '经典午餐肉 E', price: 28.5, rating: 4.2, imageUrl: 'https://images.pexels.com/photos/5491290/pexels-photo-5491290.jpeg', summary: '风味独特。', attributes: [{ label: '淀粉', value: '普通' }, { label: '开启', value: '易拉罐' }, { label: '重量', value: '200g' }, { label: '价格', value: '28.5' }] }
    ]
  },

  // ==========================================
  // 3. 对象数: 5, 维度数: 3 (2个)
  // ==========================================
  {
    id: 3, type: 'FOOD', objectCount: 5, dimensionCount: 3,
    instruction: "假设你想买一箱矿泉水放在家里或车里喝。你希望每瓶的容量在500ml以上、整箱买下来的总价格不要超过20元，且必须是天然的矿物质水。",
    reminder: ">500ml/瓶，<20元，矿物质水。",
    products: [
      { id: 'd3_0', name: '天然饮用水 A', price: 18.8, rating: 4.8, imageUrl: 'https://images.pexels.com/photos/2479095/pexels-photo-2479095.jpeg', summary: '天然水源，甘甜解渴。', attributes: [{ label: '容量', value: '550ml' }, { label: '水源', value: '矿物质水' }, { label: '整箱价', value: '18.8' }] },
      { id: 'd3_1', name: '天然饮用水 B', price: 25.5, rating: 4.7, imageUrl: 'https://images.pexels.com/photos/2479095/pexels-photo-2479095.jpeg', summary: '深度净化。', attributes: [{ label: '容量', value: '550ml' }, { label: '水源', value: '纯净水' }, { label: '整箱价', value: '25.5' }] },
      { id: 'd3_2', name: '天然饮用水 C', price: 15.0, rating: 4.2, imageUrl: 'https://images.pexels.com/photos/2479095/pexels-photo-2479095.jpeg', summary: '便捷小瓶。', attributes: [{ label: '容量', value: '330ml' }, { label: '水源', value: '矿物质水' }, { label: '整箱价', value: '15.0' }] },
      { id: 'd3_3', name: '天然饮用水 D', price: 22.0, rating: 4.5, imageUrl: 'https://images.pexels.com/photos/2479095/pexels-photo-2479095.jpeg', summary: '大容量分享。', attributes: [{ label: '容量', value: '1.5L' }, { label: '水源', value: '山泉水' }, { label: '整箱价', value: '22.0' }] },
      { id: 'd3_4', name: '天然饮用水 E', price: 19.9, rating: 4.3, imageUrl: 'https://images.pexels.com/photos/2479095/pexels-photo-2479095.jpeg', summary: '弱碱性水。', attributes: [{ label: '容量', value: '500ml' }, { label: '水源', value: '地下水' }, { label: '整箱价', value: '19.9' }] }
    ]
  },
  {
    id: 19, type: 'DAILY', objectCount: 5, dimensionCount: 3,
    instruction: "假设你家里的垃圾袋用完了，你需要去便利店或网上买一包。你希望这款垃圾袋带有方便拎走的抽绳封口、颜色是低调的白色，且每包的数量要在50只以上。",
    reminder: "抽绳，白色，>50只。",
    products: [
      { id: 'd19_0', name: '加厚垃圾袋 A', price: 9.9, rating: 4.0, imageUrl: 'https://images.pexels.com/photos/3962260/pexels-photo-3962260.jpeg', summary: '常规平口型。', attributes: [{ label: '封口', value: '平口' }, { label: '颜色', value: '白色' }, { label: '数量', value: '50只' }] },
      { id: 'd19_1', name: '加厚垃圾袋 B', price: 15.0, rating: 4.4, imageUrl: 'https://images.pexels.com/photos/3962260/pexels-photo-3962260.jpeg', summary: '色彩斑斓。', attributes: [{ label: '封口', value: '抽绳' }, { label: '颜色', value: '白色' }, { label: '数量', value: '30只' }] },
      { id: 'd19_2', name: '加厚垃圾袋 C', price: 12.9, rating: 4.5, imageUrl: 'https://images.pexels.com/photos/3962260/pexels-photo-3962260.jpeg', summary: '承重力强，不脏手。', attributes: [{ label: '封口', value: '抽绳' }, { label: '颜色', value: '白色' }, { label: '数量', value: '100只' }] },
      { id: 'd19_3', name: '加厚垃圾袋 D', price: 18.0, rating: 4.2, imageUrl: 'https://images.pexels.com/photos/3962260/pexels-photo-3962260.jpeg', summary: '商用超大号。', attributes: [{ label: '封口', value: '背心式' }, { label: '颜色', value: '白色' }, { label: '数量', value: '60只' }] },
      { id: 'd19_4', name: '加厚垃圾袋 E', price: 11.5, rating: 4.1, imageUrl: 'https://images.pexels.com/photos/3962260/pexels-photo-3962260.jpeg', summary: '环保材质。', attributes: [{ label: '封口', value: '抽绳' }, { label: '颜色', value: '白色' }, { label: '数量', value: '20只' }] }
    ]
  },

  // ==========================================
  // 4. 对象数: 5, 维度数: 2 (2个)
  // ==========================================
  {
    id: 4, type: 'DAILY', objectCount: 5, dimensionCount: 2,
    instruction: "假设你现在需要选购一袋抽纸巾放在办公室桌上。你只需要保证这款纸巾是完全无香味的，且每包至少要有100抽。",
    reminder: "无香味，100抽/包。",
    products: [
      { id: 'd4_0', name: '原生木浆抽纸 A', price: 15.0, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1610021684483-b06bf8ed5a41?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '便携装。', attributes: [{ label: '香味', value: '清香' }, { label: '规格', value: '40抽' }] },
      { id: 'd4_1', name: '原生木浆抽纸 B', price: 18.0, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1610021684483-b06bf8ed5a41?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '薰衣草香。', attributes: [{ label: '香味', value: '花香' }, { label: '规格', value: '120抽' }] },
      { id: 'd4_2', name: '原生木浆抽纸 C', price: 12.0, rating: 4.1, imageUrl: 'https://images.unsplash.com/photo-1610021684483-b06bf8ed5a41?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '实惠之选。', attributes: [{ label: '香味', value: '无香味' }, { label: '规格', value: '80抽' }] },
      { id: 'd4_3', name: '原生木浆抽纸 D', price: 22.0, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1610021684483-b06bf8ed5a41?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '薄荷酷爽。', attributes: [{ label: '香味', value: '薄荷' }, { label: '规格', value: '100抽' }] },
      { id: 'd4_4', name: '原生木浆抽纸 E', price: 19.9, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1610021684483-b06bf8ed5a41?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '湿水不破，柔韧亲肤。', attributes: [{ label: '香味', value: '无香味' }, { label: '规格', value: '100抽' }] }
    ]
  },
  {
    id: 20, type: 'DAILY', objectCount: 5, dimensionCount: 2,
    instruction: "假设你需要买一盒酒精湿巾放在包里消毒。你只需要保证这款湿纸巾的酒精含量达到了有效的75%，且采用的是干净卫生的单片独立包装。",
    reminder: "75%酒精，独立包装。",
    products: [
      { id: 'd20_0', name: '消毒湿巾 A', price: 12.0, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1734599397715-f030c6d206a0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '温和不刺激。', attributes: [{ label: '酒精', value: '0%' }, { label: '包装', value: '独立包装' }] },
      { id: 'd20_1', name: '消毒湿巾 B', price: 15.8, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1734599397715-f030c6d206a0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '有效杀菌，便携出行。', attributes: [{ label: '酒精', value: '75%' }, { label: '包装', value: '独立包装' }] },
      { id: 'd20_2', name: '消毒湿巾 C', price: 18.0, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1734599397715-f030c6d206a0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '大桶分享。', attributes: [{ label: '酒精', value: '75%' }, { label: '包装', value: '抽取式' }] },
      { id: 'd20_3', name: '消毒湿巾 D', price: 10.0, rating: 4.0, imageUrl: 'https://images.unsplash.com/photo-1734599397715-f030c6d206a0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '日常清洁。', attributes: [{ label: '酒精', value: '10%' }, { label: '包装', value: '平铺装' }] },
      { id: 'd20_4', name: '消毒湿巾 E', price: 22.0, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1734599397715-f030c6d206a0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '强效工业。', attributes: [{ label: '酒精', value: '95%' }, { label: '包装', value: '抽取式' }] }
    ]
  },

  // ==========================================
  // 5. 对象数: 4, 维度数: 5 (2个)
  // ==========================================
  {
    id: 5, type: 'CLOTHING', objectCount: 4, dimensionCount: 5,
    instruction: "假设你正想在网上挑一件夏天穿的纯色白色T恤。你偏好最基础的休闲款式、价格区间在100-200元、面料必须是100%纯棉、领型为舒适的圆领，且希望快递能在3天内送到家。",
    reminder: "休闲，100-200元，白色，纯棉圆领，3日达。",
    products: [
      { id: 'd5_0', name: '纯棉基础T恤 A', price: 180.0, rating: 4.1, imageUrl: 'https://images.pexels.com/photos/11671964/pexels-photo-11671964.jpeg', summary: '超值特惠款。', attributes: [{ label: '面料', value: '涤纶' }, { label: '领型', value: '圆领' }, { label: '颜色', value: '白色' }, { label: '物流', value: '3天' }, { label: '款式', value: '运动' }] },
      { id: 'd5_1', name: '纯棉基础T恤 B', price: 160.0, rating: 4.5, imageUrl: 'https://images.pexels.com/photos/11671964/pexels-photo-11671964.jpeg', summary: '英伦风。', attributes: [{ label: '面料', value: '纯棉' }, { label: '领型', value: 'V领' }, { label: '颜色', value: '白色' }, { label: '物流', value: '2天' }, { label: '款式', value: '休闲' }] },
      { id: 'd5_2', name: '纯棉基础T恤 C', price: 120.0, rating: 4.2, imageUrl: 'https://images.pexels.com/photos/11671964/pexels-photo-11671964.jpeg', summary: '沉稳配色。', attributes: [{ label: '面料', value: '纯棉' }, { label: '领型', value: '圆领' }, { label: '颜色', value: '灰色' }, { label: '物流', value: '4天' }, { label: '款式', value: '商务' }] },
      { id: 'd5_3', name: '纯棉基础T恤 D', price: 150.0, rating: 4.3, imageUrl: 'https://images.pexels.com/photos/11671964/pexels-photo-11671964.jpeg', summary: '基础版型，舒适透气。', attributes: [{ label: '面料', value: '纯棉' }, { label: '领型', value: '圆领' }, { label: '颜色', value: '白色' }, { label: '物流', value: '2天' }, { label: '款式', value: '休闲' }] }
    ]
  },
  {
    id: 21, type: 'DAILY', objectCount: 4, dimensionCount: 5,
    instruction: "假设你现在的鼠标垫太小了，想买个大的改善办公心情。你希望它的尺寸要在30x60cm以上、底部必须有强力防滑设计、价格低于40元、颜色选定为耐脏的黑色，且希望发货速度越快越好。",
    reminder: "30x60cm以上，防滑，<40元，黑色，发货快。",
    products: [
      { id: 'd21_0', name: '专业办公垫 A', price: 32.0, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1631098983935-5363b8e50edb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '精密锁边，操控自如。', attributes: [{ label: '尺寸', value: '40x80cm' }, { label: '底部', value: '天然橡胶防滑' }, { label: '颜色', value: '黑色' }, { label: '发货', value: '24小时内' }, { label: '价格', value: '32.0' }] },
      { id: 'd21_1', name: '专业办公垫 B', price: 45.0, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1631098983935-5363b8e50edb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '幻彩灯效。', attributes: [{ label: '尺寸', value: '30x90cm' }, { label: '底部', value: '强力吸附' }, { label: '颜色', value: '幻彩' }, { label: '发货', value: '3天内' }, { label: '价格', value: '45.0' }] },
      { id: 'd21_2', name: '专业办公垫 C', price: 28.0, rating: 4.1, imageUrl: 'https://images.unsplash.com/photo-1631098983935-5363b8e50edb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '小巧便携。', attributes: [{ label: '尺寸', value: '20x20cm' }, { label: '底部', value: '防滑海绵' }, { label: '颜色', value: '黑色' }, { label: '发货', value: '即时' }, { label: '价格', value: '28.0' }] },
      { id: 'd21_3', name: '专业办公垫 D', price: 38.0, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1631098983935-5363b8e50edb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '卡通动漫。', attributes: [{ label: '尺寸', value: '40x60cm' }, { label: '底部', value: '无防滑' }, { label: '颜色', value: '粉色' }, { label: '发货', value: '5天内' }, { label: '价格', value: '38.0' }] }
    ]
  },

  // ==========================================
  // 6. 对象数: 4, 维度数: 4 (2个)
  // ==========================================
  {
    id: 6, type: 'ACCESSORY', objectCount: 4, dimensionCount: 4,
    instruction: "假设你打算购买一个日常通勤用的帆布包，不仅能装东西还要好看。你希望价格在50-100元之间、包口必须带有防盗拉链、销量在同类中处于领先位置，且颜色一定要是百搭的米色。",
    reminder: "50-100元，有拉链，高销量，米色。",
    products: [
      { id: 'd6_0', name: '简约帆布袋 A', price: 45.0, rating: 4.0, imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=200', summary: '超轻设计。', attributes: [{ label: '闭合', value: '拉链' }, { label: '销量', value: '100+' }, { label: '颜色', value: '米色' }, { label: '价格', value: '45.0' }] },
      { id: 'd6_1', name: '简约帆布袋 B', price: 120.0, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=200', summary: '名师联名。', attributes: [{ label: '闭合', value: '磁扣' }, { label: '销量', value: '5万+' }, { label: '颜色', value: '米色' }, { label: '价格', value: '120.0' }] },
      { id: 'd6_2', name: '简约帆布袋 C', price: 79.0, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=200', summary: '大容量装书，百搭随性。', attributes: [{ label: '闭合', value: '拉链' }, { label: '销量', value: '5万+' }, { label: '颜色', value: '米色' }, { label: '价格', value: '79.0' }] },
      { id: 'd6_3', name: '简约帆布袋 D', price: 65.0, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=200', summary: '深沉魅力。', attributes: [{ label: '闭合', value: '拉链' }, { label: '销量', value: '2万+' }, { label: '颜色', value: '黑色' }, { label: '价格', value: '65.0' }] }
    ]
  },
  {
    id: 22, type: 'DAILY', objectCount: 4, dimensionCount: 4,
    instruction: "假设你想买一个保温杯带去公司喝水用。你非常在乎材质安全，因此倾向于选择316不锈钢内胆、方便单手操作的直饮口设计、价格在80元以内，且外观选定为干净的白色。",
    reminder: "316钢，直饮口设计，<80元，白色。",
    products: [
      { id: 'd22_0', name: '便携保温杯 A', price: 55.0, rating: 4.3, imageUrl: 'https://plus.unsplash.com/premium_photo-1752846974618-e14290df59c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '入门款。', attributes: [{ label: '内胆', value: '304不锈钢' }, { label: '杯盖', value: '直饮口' }, { label: '颜色', value: '白色' }, { label: '价格', value: '55.0' }] },
      { id: 'd22_1', name: '便携保温杯 B', price: 69.0, rating: 4.7, imageUrl: 'hhttps://plus.unsplash.com/premium_photo-1752846974618-e14290df59c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '长效保温，一键开启。', attributes: [{ label: '内胆', value: '316不锈钢' }, { label: '杯盖', value: '直饮口' }, { label: '颜色', value: '白色' }, { label: '价格', value: '69.0' }] },
      { id: 'd22_2', name: '便携保温杯 C', price: 99.0, rating: 4.8, imageUrl: 'https://plus.unsplash.com/premium_photo-1752846974618-e14290df59c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '高端礼盒。', attributes: [{ label: '内胆', value: '316不锈钢' }, { label: '杯盖', value: '吸管口' }, { label: '颜色', value: '银色' }, { label: '价格', value: '99.0' }] },
      { id: 'd22_3', name: '便携保温杯 D', price: 75.0, rating: 4.4, imageUrl: 'https://plus.unsplash.com/premium_photo-1752846974618-e14290df59c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '少女心。', attributes: [{ label: '内胆', value: '316不锈钢' }, { label: '杯盖', value: '直饮口' }, { label: '颜色', value: '白色' }, { label: '价格', value: '75.0' }] }
    ]
  },

  // ==========================================
  // 7. 对象数: 4, 维度数: 3 (2个)
  // ==========================================
  {
    id: 7, type: 'DAILY', objectCount: 4, dimensionCount: 3,
    instruction: "假设你正想买一瓶好用的洗洁精。你特别希望它是食品级安全、不仅可以洗碗还能放心用来清洗果蔬，并且闻起来有清新的橙子味，还要是那种不伤手的温和配方。",
    reminder: "可洗果蔬，橙子味，不伤手。",
    products: [
      { id: 'd7_0', name: '强力洗洁精 A', price: 12.0, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200', summary: '去油王。', attributes: [{ label: '功能', value: '仅洗餐具' }, { label: '香味', value: '橙子味' }, { label: '配方', value: '中性不伤手' }] },
      { id: 'd7_1', name: '强力洗洁精 B', price: 18.0, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200', summary: '柠檬清香。', attributes: [{ label: '功能', value: '仅洗餐具' }, { label: '香味', value: '橙子味' }, { label: '配方', value: '普通' }] },
      { id: 'd7_2', name: '强力洗洁精 C', price: 22.0, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200', summary: '高端有机。', attributes: [{ label: '功能', value: '果蔬可用' }, { label: '香味', value: '无香' }, { label: '配方', value: '中性不伤手' }] },
      { id: 'd7_3', name: '强力洗洁精 D', price: 15.9, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200', summary: '快速去油，易冲洗。', attributes: [{ label: '功能', value: '果蔬可用' }, { label: '香味', value: '橙子味' }, { label: '配方', value: '中性不伤手' }] }
    ]
  },
  {
    id: 23, type: 'DAILY', objectCount: 4, dimensionCount: 3,
    instruction: "假设你打算买一个放在浴室里的肥皂盒。你希望它带有专门的镂空沥水设计防止肥皂变软、采用吸盘固定不需要打孔，且颜色必须选定为简约的白色。",
    reminder: "带沥水，吸盘，白色。",
    products: [
      { id: 'd23_0', name: '创意肥皂架 A', price: 8.8, rating: 4.2, imageUrl: 'https://images.pexels.com/photos/7303928/pexels-photo-7303928.jpeg', summary: '不积水，肥皂更耐用。', attributes: [{ label: '结构', value: '双层沥水' }, { label: '安装', value: '强力吸盘' }, { label: '颜色', value: '白色' }] },
      { id: 'd23_1', name: '创意肥皂架 B', price: 12.0, rating: 4.4, imageUrl: 'https://images.pexels.com/photos/7303928/pexels-photo-7303928.jpeg', summary: '壁挂大师。', attributes: [{ label: '结构', value: '无沥水' }, { label: '安装', value: '强力吸盘' }, { label: '颜色', value: '透明' }] },
      { id: 'd23_2', name: '创意肥皂架 C', price: 6.5, rating: 3.8, imageUrl: 'https://images.pexels.com/photos/7303928/pexels-photo-7303928.jpeg', summary: '简约放置。', attributes: [{ label: '结构', value: '单层沥水' }, { label: '安装', value: '放置式' }, { label: '颜色', value: '白色' }] },
      { id: 'd23_3', name: '创意肥皂架 D', price: 15.0, rating: 4.5, imageUrl: 'https://images.pexels.com/photos/7303928/pexels-photo-7303928.jpeg', summary: '不锈钢质感。', attributes: [{ label: '结构', value: '不锈钢镂空沥水' }, { label: '安装', value: '打孔式' }, { label: '颜色', value: '白色' }] }
    ]
  },

  // ==========================================
  // 8. 对象数: 4, 维度数: 2 (2个)
  // ==========================================
  {
    id: 8, type: 'DAILY', objectCount: 4, dimensionCount: 2,
    instruction: "假设你打算买一个新的订书机放在书桌上。你希望能选购到一款商家直接赠送一整盒配套订书钉，且本身具备轻松按压的省力设计的产品。",
    reminder: "送订书钉，省力设计。",
    products: [
      { id: 'd8_0', name: '得力订书机 A', price: 12.0, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '小巧迷你型。', attributes: [{ label: '赠品', value: '无' }, { label: '功能', value: '省力50%' }] },
      { id: 'd8_1', name: '得力订书机 B', price: 25.0, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '重型装订。', attributes: [{ label: '赠品', value: '送1000枚钉' }, { label: '功能', value: '常规' }] },
      { id: 'd8_2', name: '得力订书机 C', price: 18.0, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '办公好助手。', attributes: [{ label: '赠品', value: '送1000枚钉' }, { label: '功能', value: '省力50%' }] },
      { id: 'd8_3', name: '得力订书机 D', price: 15.0, rating: 4.1, imageUrl: 'https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '透明时尚款。', attributes: [{ label: '赠品', value: '无' }, { label: '功能', value: '常规' }] }
    ]
  },
  {
    id: 24, type: 'DAILY', objectCount: 4, dimensionCount: 2,
    instruction: "假设你需要买一盒电池给家里的遥控器用。你只需要保证它们是质量稳定的5号碱性电池，且每盒要是划算的10粒装。",
    reminder: "5号碱性，10粒。",
    products: [
      { id: 'd24_0', name: '南孚电池 A', price: 15.0, rating: 4.2, imageUrl: 'https://images.pexels.com/photos/1084213/pexels-photo-1084213.jpeg', summary: '7号专属。', attributes: [{ label: '类型', value: '7号碱性' }, { label: '规格', value: '10粒装' }] },
      { id: 'd24_1', name: '南孚电池 B', price: 29.9, rating: 4.9, imageUrl: 'https://images.pexels.com/photos/1084213/pexels-photo-1084213.jpeg', summary: '聚能环，电量持久。', attributes: [{ label: '类型', value: '5号碱性' }, { label: '规格', value: '10粒装' }] },
      { id: 'd24_2', name: '南孚电池 C', price: 12.0, rating: 4.0, imageUrl: 'https://images.pexels.com/photos/1084213/pexels-photo-1084213.jpeg', summary: '普通碳性。', attributes: [{ label: '类型', value: '5号碳性' }, { label: '规格', value: '4粒装' }] },
      { id: 'd24_3', name: '南孚电池 D', price: 35.0, rating: 4.7, imageUrl: 'https://images.pexels.com/photos/1084213/pexels-photo-1084213.jpeg', summary: '充电电池。', attributes: [{ label: '类型', value: '5号碱性' }, { label: '规格', value: '2粒装' }] }
    ]
  },

  // ==========================================
  // 9. 对象数: 3, 维度数: 5 (2个)
  // ==========================================
  {
    id: 9, type: 'FOOD', objectCount: 3, dimensionCount: 5,
    instruction: "假设你现在肚子有点饿了，想订一份汉堡外卖。你指定要最经典的香辣鸡腿堡套餐（必须包含可乐）、你会对比三个平台并选择券后价格最低的一家，要求配送距离在5公里内，且这家店的月售量要在1000份以上才放心。",
    reminder: "香辣堡，含可乐，最低价，5km内，月销1k+。",
    products: [
      { id: 'd9_0', name: '美团外卖商家 A', price: 15.5, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200', summary: '经典汉堡，限时优惠。', attributes: [{ label: '套餐', value: '鸡腿堡+可乐' }, { label: '距离', value: '1.2km' }, { label: '月售', value: '5000+' },  { label: '券后价', value: '15.5' }] },
      { id: 'd9_1', name: '饿了么商家 B', price: 18.0, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200', summary: '鸡腿堡单点。', attributes: [{ label: '套餐', value: '仅汉堡' }, { label: '距离', value: '3.5km' }, { label: '月售', value: '1200+' },  { label: '券后价', value: '18.0' }] },
      { id: 'd9_2', name: '京东到家商家 C', price: 22.0, rating: 4.0, imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200', summary: '超远配送。', attributes: [{ label: '套餐', value: '鸡腿堡+可乐' }, { label: '距离', value: '7.8km' }, { label: '月售', value: '800' }, { label: '券后价', value: '22.0' }] }
    ]
  },
  {
    id: 25, type: 'DAILY', objectCount: 3, dimensionCount: 5,
    instruction: "假设你想换一瓶新的沐浴露。你希望这款沐浴露洗完后带有非常清爽的薄荷感、包装属于耐用的1L大规格、必须带有方便压取的泵头、价格要低于40元，且香味最好要是清新的柠檬香。",
    reminder: "体感清爽感强，柠檬香味，1L，带泵头，<40元。",
    products: [
      { id: 'd25_0', name: '男士沐浴露 A', price: 38.0, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=200', summary: '海洋之心。', attributes: [{ label: '香味', value: '海洋香' }, { label: '容量', value: '1L' }, { label: '泵头', value: '有' }, { label: '清爽感', value: '中等' }, { label: '单价', value: '38.0' }] },
      { id: 'd25_1', name: '男士沐浴露 B', price: 32.0, rating: 4.1, imageUrl: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=200', summary: '小巧便携。', attributes: [{ label: '香味', value: '柠檬' }, { label: '容量', value: '500ml' }, { label: '泵头', value: '无' }, { label: '清爽感', value: '高' }, { label: '单价', value: '32.0' }] },
      { id: 'd25_2', name: '男士沐浴露 C', price: 35.0, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=200', summary: '一洗即净，清爽持久。', attributes: [{ label: '香味', value: '柠檬' }, { label: '容量', value: '1L' }, { label: '泵头', value: '有' }, { label: '清爽感', value: '极高' }, { label: '单价', value: '35.0' }] }
    ]
  },

  // ==========================================
  // 10. 对象数: 3, 维度数: 4 (2个)
  // ==========================================
  {
    id: 10, type: 'FOOD', objectCount: 3, dimensionCount: 4,
    instruction: "假设你正想买一包燕麦片当作日常早餐。你倾向于选购那种开水一冲即食的免煮款、必须是无添加糖的健康款、单价控制在40元以内，且规格最好是500g装的。",
    reminder: "即食，无糖，<40元，500g。",
    products: [
      { id: 'd10_0', name: '澳洲纯燕麦 A', price: 35.0, rating: 4.2, imageUrl: 'https://images.pexels.com/photos/34452003/pexels-photo-34452003.jpeg', summary: '经典免煮。', attributes: [{ label: '类型', value: '即食' }, { label: '糖分', value: '含糖' }, { label: '克重', value: '500g' }, { label: '单价', value: '35.0' }] },
      { id: 'd10_1', name: '澳洲纯燕麦 B', price: 28.0, rating: 4.8, imageUrl: 'https://images.pexels.com/photos/34452003/pexels-photo-34452003.jpeg', summary: '全谷物营养，早餐必备。', attributes: [{ label: '类型', value: '即食' }, { label: '糖分', value: '无添加' }, { label: '克重', value: '500g' }, { label: '单价', value: '28.0' }] },
      { id: 'd10_2', name: '澳洲纯燕麦 C', price: 45.0, rating: 4.9, imageUrl: 'https://images.pexels.com/photos/34452003/pexels-photo-34452003.jpeg', summary: '需煮更香。', attributes: [{ label: '类型', value: '需煮' }, { label: '糖分', value: '无添加' }, { label: '克重', value: '1000g' }, { label: '单价', value: '45.0' }] }
    ]
  },
  {
    id: 26, type: 'DAILY', objectCount: 3, dimensionCount: 4,
    instruction: "假设你需要买一把新的指甲刀来修剪指甲。你非常看重手感，希望它是坚固的优质不锈钢材质、一定要自带专门防飞溅的收纳套、颜色选定为黑色，且大家用完后的评价要非常棒。",
    reminder: "不锈钢，防飞溅，黑色，好评。",
    products: [
      { id: 'd26_0', name: '指甲刀套装 A', price: 12.9, rating: 4.5, imageUrl: 'https://images.pexels.com/photos/9518803/pexels-photo-9518803.jpeg', summary: '锋利耐用。', attributes: [{ label: '材质', value: '420不锈钢' }, { label: '外壳', value: '防飞溅收纳' }, { label: '颜色', value: '黑色' }, { label: '评分', value: '4.9分' }] },
      { id: 'd26_1', name: '指甲刀套装 B', price: 8.5, rating: 3.9, imageUrl: 'https://images.pexels.com/photos/9518803/pexels-photo-9518803.jpeg', summary: '原色纯钢。', attributes: [{ label: '材质', value: '碳钢' }, { label: '外壳', value: '无' }, { label: '颜色', value: '银色' }, { label: '评分', value: '4.2分' }] },
      { id: 'd26_2', name: '指甲刀套装 C', price: 15.0, rating: 4.4, imageUrl: 'https://images.pexels.com/photos/9518803/pexels-photo-9518803.jpeg', summary: '优雅蓝调。', attributes: [{ label: '材质', value: '不锈钢' }, { label: '外壳', value: '防飞溅收纳' }, { label: '颜色', value: '蓝色' }, { label: '评分', value: '4.6分' }] }
    ]
  },

  // ==========================================
  // 11. 对象数: 3, 维度数: 3 (2个)
  // ==========================================
  {
    id: 11, type: 'DAILY', objectCount: 3, dimensionCount: 3,
    instruction: "假设你需要买一包新的厨房清洁海绵。你希望每包至少要包含5片海绵、采用正反两面不同材质的实用设计，且必须具备极强的吸水能力。",
    reminder: "≥5片，双面，吸水强。",
    products: [
      { id: 'd11_0', name: '百洁布海绵 A', price: 8.0, rating: 4.1, imageUrl: 'https://images.pexels.com/photos/28576641/pexels-photo-28576641.jpeg', summary: '单面加厚。', attributes: [{ label: '数量', value: '10片' }, { label: '结构', value: '单面' }, { label: '功能', value: '高吸水' }] },
      { id: 'd11_1', name: '百洁布海绵 B', price: 5.5, rating: 4.2, imageUrl: 'https://images.pexels.com/photos/28576641/pexels-photo-28576641.jpeg', summary: '经典组合。', attributes: [{ label: '数量', value: '2片' }, { label: '结构', value: '双面' }, { label: '功能', value: '强力去油' }] },
      { id: 'd11_2', name: '百洁布海绵 C', price: 6.9, rating: 4.4, imageUrl: 'https://images.pexels.com/photos/28576641/pexels-photo-28576641.jpeg', summary: '去污快，不伤锅。', attributes: [{ label: '数量', value: '5片' }, { label: '结构', value: '双面' }, { label: '功能', value: '高吸水' }] }
    ]
  },
  {
    id: 27, type: 'DAILY', objectCount: 3, dimensionCount: 3,
    instruction: "假设你担心机洗会坏掉娇贵的衣服，想买几个洗衣袋。你指定要那种细网眼材质的、最好是一次性能买到不同规格的三件套，且一定要包含一个超大号尺寸的袋子。",
    reminder: "细网，三件套，一定要包含大号。",
    products: [
      { id: 'd27_0', name: '护衣洗护袋 A', price: 10.0, rating: 4.1, imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200', summary: '粗网耐用。', attributes: [{ label: '网孔', value: '粗网' }, { label: '数量', value: '3件套' }, { label: '包含', value: '含大号' }] },
      { id: 'd27_1', name: '护衣洗护袋 B', price: 15.0, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200', summary: '防止衣物缠绕。', attributes: [{ label: '网孔', value: '细网' }, { label: '数量', value: '3件套' }, { label: '包含', value: '含大号' }] },
      { id: 'd27_2', name: '护衣洗护袋 C', price: 8.0, rating: 3.9, imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200', summary: '单件大号。', attributes: [{ label: '网孔', value: '细网' }, { label: '数量', value: '1件' }, { label: '包含', value: '仅大号' }] }
    ]
  },

  // ==========================================
  // 12. 对象数: 3, 维度数: 2 (2个)
  // ==========================================
  {
    id: 12, type: 'DAILY', objectCount: 3, dimensionCount: 2,
    instruction: "假设你平时习惯贴便利贴做提醒。你这次指定要买亮眼的黄色，且每一叠的数量必须达到100张才够用。",
    reminder: "黄色，100张。",
    products: [
      { id: 'd12_0', name: '分类便利贴 A', price: 5.5, rating: 4.7, imageUrl: 'https://images.pexels.com/photos/317353/pexels-photo-317353.jpeg', summary: '粘性持久。', attributes: [{ label: '颜色', value: '黄色' }, { label: '数量', value: '100张' }] },
      { id: 'd12_1', name: '分类便利贴 B', price: 4.5, rating: 4.4, imageUrl: 'https://images.pexels.com/photos/317353/pexels-photo-317353.jpeg', summary: '温柔粉。', attributes: [{ label: '颜色', value: '粉色' }, { label: '数量', value: '100张' }] },
      { id: 'd12_2', name: '分类便利贴 C', price: 3.5, rating: 4.1, imageUrl: 'https://images.pexels.com/photos/317353/pexels-photo-317353.jpeg', summary: '迷你黄。', attributes: [{ label: '颜色', value: '黄色' }, { label: '数量', value: '50张' }] }
    ]
  },
  {
    id: 28, type: 'DAILY', objectCount: 3, dimensionCount: 2,
    instruction: "假设你手头的回形针快用完了，想买一盒。你只需要保证这款回形针外观是彩色的，且每一盒的数量能达到100枚装。",
    reminder: "彩色，100枚。",
    products: [
      { id: 'd28_0', name: '金属回形针 A', price: 3.5, rating: 4.0, imageUrl: 'https://images.pexels.com/photos/983828/pexels-photo-983828.jpeg', summary: '低调银。', attributes: [{ label: '颜色', value: '原色' }, { label: '数量', value: '100枚' }] },
      { id: 'd28_1', name: '金属回形针 B', price: 2.5, rating: 3.8, imageUrl: 'https://images.pexels.com/photos/983828/pexels-photo-983828.jpeg', summary: '彩色迷你。', attributes: [{ label: '颜色', value: '彩色' }, { label: '数量', value: '20枚' }] },
      { id: 'd28_2', name: '金属回形针 C', price: 4.8, rating: 4.3, imageUrl: 'https://images.pexels.com/photos/983828/pexels-photo-983828.jpeg', summary: '整理文档必备。', attributes: [{ label: '颜色', value: '彩色' }, { label: '数量', value: '100枚' }] }
    ]
  },

  // ==========================================
  // 13. 对象数: 2, 维度数: 5 (2个)
  // ==========================================
  {
    id: 13, type: 'DAILY', objectCount: 2, dimensionCount: 5,
    instruction: "假设你想为家里买一双轻便的凉拖鞋。你要求鞋底必须防滑、材质要是那种软软的EVA材质、整双价格控制在20元以内、颜色选粉色，且尺码必须是合适的40码。",
    reminder: "防滑，EVA材质，<20元，粉色，40码。",
    products: [
      { id: 'd13_0', name: '居家拖鞋 A', price: 19.5, rating: 4.2, imageUrl: 'https://plus.unsplash.com/premium_photo-1754738812208-4b21feea31f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '高端定制。', attributes: [{ label: '材质', value: 'PVC' }, { label: '底部', value: '常规纹路' }, { label: '颜色', value: '粉色' }, { label: '尺码', value: '38码' }, { label: '价格', value: '19.5' }] },
      { id: 'd13_1', name: '居家拖鞋 B', price: 18.9, rating: 4.5, imageUrl: 'https://plus.unsplash.com/premium_photo-1754738812208-4b21feea31f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '柔软Q弹。', attributes: [{ label: '材质', value: 'EVA' }, { label: '底部', value: '防滑纹路' }, { label: '颜色', value: '粉色' }, { label: '尺码', value: '40码' }, { label: '价格', value: '18.9' }] }
    ]
  },
  {
    id: 29, type: 'DAILY', objectCount: 2, dimensionCount: 5,
    instruction: "假设你为了装饰家里的餐桌，打算买几个餐垫。你希望这款餐垫能耐受100度以上的高温、具有防水抗油的特性、外观是高级的灰色、材质选定为易打理的PVC，且每套必须包含4片装。",
    reminder: "耐受100度以上，防水，灰色，PVC材质，4片。",
    products: [
      { id: 'd29_0', name: '北欧风餐垫 A', price: 32.0, rating: 4.6, imageUrl: 'hhttps://plus.unsplash.com/premium_photo-1664391790811-dd5a8c565430?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '保护桌面，美观大方。', attributes: [{ label: '耐温', value: '100度' }, { label: '防水', value: '防水抗油' }, { label: '颜色', value: '灰色' }, { label: '材质', value: 'PVC' }, { label: '数量', value: '4片装' }] },
      { id: 'd29_1', name: '北欧风餐垫 B', price: 15.0, rating: 4.1, imageUrl: 'https://plus.unsplash.com/premium_photo-1664391790811-dd5a8c565430?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '时尚布艺。', attributes: [{ label: '耐温', value: '60度' }, { label: '防水', value: '普通吸水' }, { label: '颜色', value: '灰色' }, { label: '材质', value: 'PVC' }, { label: '数量', value: '1片装' }] }
    ]
  },

  // ==========================================
  // 14. 对象数: 2, 维度数: 4 (2个)
  // ==========================================
  {
    id: 14, type: 'DAILY', objectCount: 2, dimensionCount: 4,
    instruction: "假设你现在需要去买一袋大米回家煮饭。你指定要买那种5kg装的正宗东北大米，特别要求必须是今年的新米，且为了保鲜必须采用真空包装。",
    reminder: "东北米，5kg，新米，真空。",
    products: [
      { id: 'd14_0', name: '五常大米 A', price: 45.0, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200', summary: '南方早稻。', attributes: [{ label: '产地', value: '东北' }, { label: '年份', value: '2023陈米' }, { label: '规格', value: '2.5kg' }, { label: '包装', value: '真空' }] },
      { id: 'd14_1', name: '五常大米 B', price: 58.0, rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200', summary: '饭粒透亮。', attributes: [{ label: '产地', value: '东北' }, { label: '年份', value: '2024新米' }, { label: '规格', value: '5kg' }, { label: '包装', value: '真空' }] }
    ]
  },
  {
    id: 30, type: 'DAILY', objectCount: 2, dimensionCount: 4,
    instruction: "假设你觉得家里的筷子该换新的了。你这次倾向于选择最天然的木质材质、商家必须承诺无漆无蜡、每盒要是实惠的10双装，且筷子头一定要有专门防滑夹菜不累的设计。",
    reminder: "木，无漆蜡，10双，防滑头。",
    products: [
      { id: 'd30_0', name: '木筷 A', price: 22.0, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1562967962-63e051ad41a2?w=200', summary: '健康木材。', attributes: [{ label: '材质', value: '木质' }, { label: '处理', value: '无漆无蜡' }, { label: '数量', value: '10双' }, { label: '设计', value: '含防滑纹' }] },
      { id: 'd30_1', name: '木筷 B', price: 18.0, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1562967962-63e051ad41a2?w=200', summary: '耐用合金。', attributes: [{ label: '材质', value: '木质' }, { label: '处理', value: '彩漆' }, { label: '数量', value: '10双' }, { label: '设计', value: '含防滑纹' }] }
    ]
  },

  // ==========================================
  // 15. 对象数: 2, 维度数: 3 (2个)
  // ==========================================
  {
    id: 15, type: 'DAILY', objectCount: 2, dimensionCount: 3,
    instruction: "假设你准备去买一盒日常写字用的签字笔。你只需要保证笔尖是常用的0.5mm、墨水颜色是稳重的黑色，且试用评价说书写感觉非常流畅即可。",
    reminder: "0.5mm，黑色，流畅。",
    products: [
      { id: 'd15_0', name: '办公签字笔 A', price: 4.5, rating: 4.1, imageUrl: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=200', summary: '极细绘图。', attributes: [{ label: '粗细', value: '0.5mm' }, { label: '颜色', value: '黑色' }, { label: '书写', value: '略有阻力' }] },
      { id: 'd15_1', name: '办公签字笔 B', price: 3.5, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=200', summary: '考试办公专用。', attributes: [{ label: '粗细', value: '0.5mm' }, { label: '颜色', value: '黑色' }, { label: '书写', value: '非常流畅' }] }
    ]
  },
  {
    id: 31, type: 'DAILY', objectCount: 2, dimensionCount: 3,
    instruction: "假设你正想买一个橡皮擦。你希望这款橡皮擦在使用时不会碎屑满天飞（无屑型）、材质要是那种软软的质感，且颜色必须是干净的白色。",
    reminder: "无屑，软，白色。",
    products: [
      { id: 'd31_0', name: '橡皮 A', price: 2.0, rating: 4.4, imageUrl: 'https://images.pexels.com/photos/5705986/pexels-photo-5705986.jpeg', summary: '不伤纸。', attributes: [{ label: '类型', value: '无屑型' }, { label: '质地', value: '软' }, { label: '颜色', value: '白色' }] },
      { id: 'd31_1', name: '橡皮 B', price: 1.5, rating: 3.8, imageUrl: 'https://images.pexels.com/photos/5705986/pexels-photo-5705986.jpeg', summary: '多彩趣味。', attributes: [{ label: '类型', value: '无屑型' }, { label: '质地', value: '硬' }, { label: '颜色', value: '白色' }] }
    ]
  },

  // ==========================================
  // 16. 对象数: 2, 维度数: 2 (2个)
  // ==========================================
  {
    id: 16, type: 'FOOD', objectCount: 2, dimensionCount: 2,
    instruction: "假设你做饭时发现盐快没了，需要买一袋。你只需要保证这款盐是含有碘成分的加碘盐，且每一袋的规格是标准的500g装。",
    reminder: "加碘， 500g。",
    products: [
      { id: 'd16_0', name: '深海盐 A', price: 3.5, rating: 4.1, imageUrl: 'https://images.pexels.com/photos/7717461/pexels-photo-7717461.jpeg', summary: '低钠健康。', attributes: [{ label: '成分', value: '加碘' }, { label: '规格', value: '300g' }] },
      { id: 'd16_1', name: '深海盐 B', price: 4.5, rating: 4.9, imageUrl: 'https://images.pexels.com/photos/7717461/pexels-photo-7717461.jpeg', summary: '天然纯净。', attributes: [{ label: '成分', value: '加碘' }, { label: '规格', value: '500g' }] }
    ]
  },
  {
    id: 32, type: 'FOOD', objectCount: 2, dimensionCount: 2,
    instruction: "假设你炒菜时发现酱油用完了，想去超市拎一瓶回来。你只需要保证这款酱油是健康的低盐生抽，且每一瓶的规格是500ml的。",
    reminder: "低盐， 500ml。",
    products: [
      { id: 'd32_0', name: '生抽 A', price: 15.0, rating: 4.8, imageUrl: 'https://images.pexels.com/photos/1385185/pexels-photo-1385185.jpeg', summary: '鲜香可口。', attributes: [{ label: '成分', value: '低盐' }, { label: '规格', value: '500ml' }] },
      { id: 'd32_1', name: '生抽 B', price: 12.0, rating: 4.4, imageUrl: 'https://images.pexels.com/photos/1385185/pexels-photo-1385185.jpeg', summary: '红烧上色。', attributes: [{ label: '成分', value: '低盐' }, { label: '规格', value: '200ml' }] }
    ]
  }
];