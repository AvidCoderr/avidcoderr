// Model file

// Server Types
export type ServerType = 'fast' | 'slow';

// Shape of data received from api
export interface CryptoInfo {
  timestamp: number;
  symbol: string;
  price: string;
}

// Crypto State
export interface CryptoState extends CryptoInfo {
  inProgress: boolean;
}
