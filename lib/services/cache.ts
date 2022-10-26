import { Cache, CacheStrategy } from "../interfaces/cache";
import { ParsedFragment } from "../interfaces/fragment";
import { Options } from "../interfaces/microfront";

let strategy: Cache;
const getCacheStrategy = async (options: Options): Promise<Cache> => {
  if (strategy) {
    return strategy;
  }

  switch (options.cache.strategy) {
    case CacheStrategy.REDIS:
      // TODO: implement Redis strategy
      break;

    default:
      const { default: memoryCache } = await import('../strategies/memory-cache');
      strategy = memoryCache;
  }

  return strategy;
}

const isCacheable = (fragment: ParsedFragment) => {
  return fragment.attributes.cache !== null;
}

export {
  getCacheStrategy,
  isCacheable,
};
