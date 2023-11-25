import { Meta } from "@angular/platform-browser";
import { Indicator } from "./Indicator.interface";

export interface Result {
  meta: Meta;
  timestamp: string[];
  indicators: Indicator;
}
