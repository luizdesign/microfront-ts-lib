import { LoadFragment } from "../client/request";
import { fragmentExtractor } from "../extractors/fragment";
import { ParsedFragment } from "../interfaces/fragment";
import { FragmentRenderer } from "./fragment";

const Renderer = async (template: string): Promise<string> => {
  const fragments = fragmentExtractor(template);
  const fragmentsToLoad: Promise<any>[] = fragments.map(
    (fragment: ParsedFragment) => LoadFragment(fragment), 
  );
  
  const fragmentsContent = await Promise.all(fragmentsToLoad);

  return FragmentRenderer(template, fragmentsContent);
}

export {
  Renderer,
};
