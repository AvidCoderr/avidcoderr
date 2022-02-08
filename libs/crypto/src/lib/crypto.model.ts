// Crypto Model File

// Server Type
export type ServerType = 'fast' | 'slow';

// Crypto Data Transfer Object (DTO)
export interface CryptoInfo {
  timestamp: number;
  symbol: string;
  price: string;
}

// Crypto State
export interface CryptoState extends CryptoInfo {
  isLoading: boolean;
}
