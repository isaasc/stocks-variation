import { Indicator } from "./Indicator.interface";
import { Meta } from './Meta.interface';

export interface Result {
  meta: Meta;
  timestamp: string[];
  indicators: Indicator;
}
