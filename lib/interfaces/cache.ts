import { FragmentResponse, ParsedFragment } from "./fragment";

export enum CacheStrategy {
  MEMORY = 'memory',
  REDIS = 'redis',
}

export interface InMemory {
  TTL: number;
  content: string;
}

export interface CacheItem {
  content: string;
  expireAt: number;
}

export interface Cache {
  save: (fragment: ParsedFragment, fragmentResponse: FragmentResponse) => Promise<void>;
  read: (key: string) => Promise<string|null>
}
