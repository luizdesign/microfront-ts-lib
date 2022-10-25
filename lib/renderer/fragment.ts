import { BodyExtractor } from "../extractors/html";
import { FragmentResponse } from "../interfaces/fragment";

const FragmentRenderer = (template: string, fragmentsContent: FragmentResponse[]): string => {
  let renderedTemplate = template;
  
  fragmentsContent.forEach(
    (fragment: FragmentResponse) => {
      renderedTemplate = renderedTemplate
        .replace(
          fragment.id,
          BodyExtractor(fragment.content)
        );
    },
  );

  return renderedTemplate;
}

export {
  FragmentRenderer,
};
