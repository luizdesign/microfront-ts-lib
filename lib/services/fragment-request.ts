import Debug from 'debug';
import { LoadFragment } from "../client/request";
import { FragmentResponse, ParsedFragment } from "../interfaces/fragment";
import { Options } from "../interfaces/microfront";
import { getCacheStrategy, isCacheable } from "./cache";

const DebugCache = Debug('Micro:Cache');

const loadFragment = async (fragment: ParsedFragment, options: Options): Promise<FragmentResponse> => {
  const canUseCache = isCacheable(fragment);

  if (canUseCache) {
    DebugCache(`The fragment ${fragment.fragment} is cacheable for "${fragment.attributes.cache}"`);

    const cachedData = await (await getCacheStrategy(options))
      .read(fragment.attributes.href);
    
    if (cachedData) {
      DebugCache(`The fragment ${fragment.fragment} was loaded by the memory cache`);
      
      return {
        id: fragment.fragment,
        content: cachedData,
      };
    }
  }

  const fragmentResponse: FragmentResponse = await LoadFragment(fragment);

  DebugCache(`The fragment ${fragment.fragment} was loaded without cache`);
  
  if (canUseCache) {
    await (await getCacheStrategy(options))
      .save(
        fragment,
        fragmentResponse,
      );

      DebugCache(`The fragment ${fragment.fragment} was cached`);
  }

  return fragmentResponse;
}

export {
  loadFragment,
};
