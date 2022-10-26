import { CacheStrategy } from "./cache";

interface CacheOptions {
  strategy: CacheStrategy;
  data: Record<string, string>;
}

export interface Options {
  cache: CacheOptions;
}

export interface Parameters {
  cache?: CacheOptions;
}
