import { decode, encode } from "../formatters/base64";
import { getExpireDate, isBefore } from '../formatters/date';
import { Cache, CacheItem } from "../interfaces/cache";
import { FragmentResponse, ParsedFragment } from "../interfaces/fragment";

const storage: Record<string, string> = {};

const memoryCache: Cache = {
  save: async (fragment: ParsedFragment, fragmentResponse: FragmentResponse): Promise<void> => {
    const item: CacheItem = {
      content: fragmentResponse.content,
      expireAt: getExpireDate(fragment.attributes.cache || '')
    };

    storage[fragment.attributes.href] = encode(JSON.stringify(item));
  },
  read: async (key: string): Promise<string|null> => {
    const data = storage[key]
      ? JSON.parse(decode(storage[key]))
      : null;
    

    if (!data || !isBefore(data.expireAt)) {
      return null;
    }

    return data.content;
  }
};

export default memoryCache;
