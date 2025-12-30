
import { GoogleGenAI, Type } from "@google/genai";
import { Product } from "../types";

// Always initialize with the direct process.env.API_KEY variable as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getHotelRecommendation = async (
  query: string,
  products: Product[],
  taskInstruction: string,
  objectCount: number
) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `当前任务背景: "${taskInstruction}"\n待比较商品总数: ${objectCount}\n用户最新需求: "${query}"\n\n可选商品列表:\n${JSON.stringify(products, null, 2)}`,
      config: {
        systemInstruction: `你是一个专业的决策辅助助手。你的任务是根据用户的需求和当前任务背景，在提供的备选商品列表中进行深度权衡分析（Trade-off Analysis）。

        分析与回复规则（极其重要）：
        1. 开场白限制：回复的 analysis 字段必须以“我在平台上比较了 ${objectCount} 款[商品类别]（例如：酒店/手机/电瓶车/西装/燕窝礼盒等）”作为第一句话。请根据上下文准确判断并填入具体的[商品类别]。
        2. 严禁引用 ID：在 analysis 字段的自然语言描述中，禁止出现任何内部商品 ID（如 p1, h2, p3, p4 等）。请统一使用商品的完整“名称（name）”。
        3. 逻辑说明：例如：“在这 4 款手机中，iPhone 13 因内存仅为 128GB 且电池容量较小，首先被排除；三星 S23 的价格为 5200 元，超出了您 3000-5000 元的预算。因此，重点对比华为 Mate 50E 和小米 13。”
        4. 推荐结论：最后在 recommendationId 中锁定最符合权衡结果的一个商品 ID（仅允许在此字段使用 ID）。

        输出格式必须是严格的 JSON。`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { 
              type: Type.STRING, 
              description: "详细的对比和权衡过程。必须以‘我在平台上比较了 n 款...’开头。严禁包含 ID，仅使用商品名称。" 
            },
            candidates: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "入选的 2-3 个商品 ID。"
            },
            recommendationId: {
              type: Type.STRING,
              description: "最终权衡后最推荐的一个商品 ID。"
            },
            recommendationSlogan: {
              type: Type.STRING,
              description: "一句简洁的推荐语，概括其核心优势。"
            }
          },
          required: ["analysis", "candidates", "recommendationId", "recommendationSlogan"]
        }
      }
    });

    // Access the .text property directly and trim it to get the string output
    const jsonStr = response.text?.trim();
    return jsonStr ? JSON.parse(jsonStr) : null;
  } catch (error) {
    console.error("Gemini Trade-off Analysis Error:", error);
    return null;
  }
};
