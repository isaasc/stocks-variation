import { Result } from "./Result.interface";

export interface Chart {
  result: Result[];
  error?: {
    code: string;
    description: string;
  };
}
