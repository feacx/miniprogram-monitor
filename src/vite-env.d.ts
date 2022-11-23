declare class wx {
  static getNetworkType(params: {
    success: (cb?: {
      networkType: string;
      signalStrength: number;
      hasSystemProxy: boolean;
    }) => void;
    fail(e: unknown): void;
  }): void;

  static getSystemInfo(params: {
    success: (cb?: {
      networkType: string;
      signalStrength: number;
      hasSystemProxy: boolean;
    }) => void;
    fail(e: unknown): void;
  }): void;
}

declare const getApp: () => void;
