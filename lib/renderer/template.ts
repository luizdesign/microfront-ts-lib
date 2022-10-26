import { fragmentExtractor } from "../extractors/fragment";
import { ParsedFragment } from "../interfaces/fragment";
import { Options } from "../interfaces/microfront";
import { loadFragment } from "../services/fragment-request";
import { FragmentRenderer } from "./fragment";

const Renderer = async (template: string, options: Options): Promise<string> => {
  const fragments = fragmentExtractor(template);
  const fragmentsToLoad: Promise<any>[] = fragments.map(
    (fragment: ParsedFragment) => loadFragment(fragment, options), 
  );
  
  const fragmentsContent = await Promise.all(fragmentsToLoad);

  return FragmentRenderer(template, fragmentsContent);
}

export {
  Renderer,
};
