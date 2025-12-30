
export interface Attribute {
  label: string;
  value: string | number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  imageUrl: string; // 适配用户数据
  summary: string;
  attributes: Attribute[];
  reviews?: string[];
  rooms?: any[];
}

export interface TrialTask {
  id: number;
  type: string;
  objectCount: number;
  dimensionCount: number;
  instruction: string; // 适配用户数据
  reminder: string;
  products: Product[];
}

export interface ParticipantInfo {
  id: string;
  runCount: string;
  gender: '男' | '女' | '';
  age: string;
}

export interface SurveyResponse {
  importance: number;
  usualTime: number;
  satisfaction: number;
  efficiency: number;
  trust: number;
  ability: number;
}

export interface TrialResult {
  trialId: number;
  conditionN: number;
  conditionD: number;
  startTime: number;
  endTime: number;
  durationSeconds: number;
  interactionCount: number;
  selectedProductId: string;
  survey: SurveyResponse;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  suggestedProducts?: Product[];
  recommendationId?: string;
  analysis?: string;
}

export enum AppState {
  START = 'START',
  CHAT = 'CHAT',
  SURVEY = 'SURVEY',
  FINISHED = 'FINISHED'
}
