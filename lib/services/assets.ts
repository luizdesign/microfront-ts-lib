import * as cheerio from 'cheerio';

const attributeName = (tag: cheerio.Element) => 
  tag.type === 'script' ? 'src' : 'href';

const endpoints = ($elements: cheerio.Cheerio) =>
  $elements
    .toArray()
    .map(
      ($item) => ($item as cheerio.TagElement).attribs[attributeName($item)])
    .filter((item, index, list) => list.indexOf(item) === index);

const removeDuplicates = ($elements: cheerio.Cheerio) => {
  if ($elements.length > 0) {
    const tag = $elements[0];
    const attr = attributeName(tag);
  
    endpoints($elements).forEach((endpoint) => {
      $elements
        .filter(`${tag}[${attr}="${endpoint}"]`)
        .each((index, element) => {
          if (index === 0) return;
          (element as cheerio.TagElement).remove();
        });
    });
  }
};

const clearDuplicatedAssets = (template: string): string => {
  const templateString = (template && typeof template === 'string') ? template : '';
  const $template = cheerio.load(templateString);

  removeDuplicates($template('link'));
  removeDuplicates($template('script'));

  return $template.html();
};

export {
  clearDuplicatedAssets,
};
