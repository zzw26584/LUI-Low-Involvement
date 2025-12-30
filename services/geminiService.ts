
import { GoogleGenAI, Type } from "@google/genai";
import { Product } from "../types";

// @ts-ignore
const apiKey = process.env.API_KEY;

export const getHotelRecommendation = async (
  query: string,
  products: Product[],
  taskInstruction: string,
  objectCount: number
) => {
  try {
    // 调试日志：如果此处输出为空，说明 Vercel 的环境变量没有成功注入到构建流程中
    if (!apiKey) {
      console.error("【关键报错】程序无法读取到 API_KEY。请检查：1. Vercel 变量名是否完全匹配 API_KEY 2. 修改变量后是否点击了 Redeploy。");
      return null;
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `当前任务背景: "${taskInstruction}"\n待比较商品总数: ${objectCount}\n用户最新需求: "${query}"\n\n可选商品列表:\n${JSON.stringify(products, null, 2)}`,
      config: {
        systemInstruction: `你是一个专业的决策辅助助手。你的任务是根据用户的需求和当前任务背景，在提供的备选商品列表中进行深度权衡分析（Trade-off Analysis）。

        分析与回复规则（极其重要）：
        1. 开场白限制：回复的 analysis 字段必须以“我在平台上比较了 ${objectCount} 款[商品类别]”作为第一句话。
        2. 严禁引用 ID：在 analysis 字段的自然语言描述中，禁止出现任何内部商品 ID。请统一使用商品的完整名称。
        3. 推荐结论：最后在 recommendationId 中锁定最符合权衡结果的一个商品 ID。
        4. 输出限制：只输出纯 JSON 字符串，不要包含任何 Markdown 格式。`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { 
              type: Type.STRING, 
              description: "权衡过程，必须以‘我在平台上比较了 n 款...’开头。" 
            },
            candidates: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "入选的 2-3 个商品 ID。"
            },
            recommendationId: {
              type: Type.STRING,
              description: "最推荐的一个商品 ID。"
            },
            recommendationSlogan: {
              type: Type.STRING,
              description: "一句简洁的推荐语。"
            }
          },
          required: ["analysis", "candidates", "recommendationId", "recommendationSlogan"]
        }
      }
    });

    let text = response.text || "";
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      text = jsonMatch[0];
    }

    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini API 调用异常:", error);
    return null;
  }
};
