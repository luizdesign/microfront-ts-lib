import FragmentException from "../exceptions/fragment-exception";
import { FragmentAttributes, ParsedFragment } from "../interfaces/fragment";

const fragmentPattern = new RegExp(/<fragment [^>]+>/, 'gm');
const hrefAttributePattern = new RegExp(/href="([^"]+)"/, 'm');
const cacheAttributePattern = new RegExp(/cache="([^"]+)"/, 'm');
const primaryAttributePattern = new RegExp(/primary/, 'm');

const getFragmentAttributeValueByName = (fragmentTag: string, identifier: RegExp) => {
  const match = fragmentTag.match(identifier);

  return match ? match[1] : match;
};

const fragmentExtractor = (template: string): ParsedFragment[] => {
  const fragmentTags = template.match(fragmentPattern) || [];

  return fragmentTags.map(
    (fragmentTag: string): ParsedFragment => ({
      fragment: fragmentTag,
      attributes: fragmentAttributes(fragmentTag),
    }),
  );
};

const fragmentAttributes = (fragmentTag: string): FragmentAttributes => {
  const href = getFragmentAttributeValueByName(fragmentTag, hrefAttributePattern);
  const cache = getFragmentAttributeValueByName(fragmentTag, cacheAttributePattern);
  const primary = primaryAttributePattern.test(fragmentTag);

  if (href === null) {
    throw new FragmentException('The fragment must have an href attribute');
  }

  return {
    href,
    cache,
    primary,
  };
}

export {
  fragmentExtractor,
}
