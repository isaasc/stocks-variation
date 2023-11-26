export interface Indicator {
  quote: Quote[];
}

export interface Quote {
  close: string[];
  high: string[];
  low: string[];
  open: string[];
}
