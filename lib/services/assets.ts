import * as cheerio from 'cheerio';

/**
 * Get src or href attribute depending on tag
 * @param {String} Tag name
 * @return {String} src or href
 */
const attrName = (tag) => {
  const attributeName = tag === 'script' ? 'src' : 'href';
  return attributeName;
};

/**
 * Get elements endpoints from src or href attribute
 * @param {Object} element object
 * @return {Array} array of endpoints
 */
const endpoints = $elements =>
  $elements
    .toArray()
    .map($item => $item.attribs[attrName($item.name)])
    .filter((item, index, list) => list.indexOf(item) === index);

/**
 * Remove duplicated script or link tags from DOM
 * @param {Object} a DOM element
 * @return void
 */
const removeDuplicates = ($elements: cheerio.Cheerio) => {
  if (!$elements[0]) return;

  const tag = $elements[0].name;
  const attr = attrName(tag);

  endpoints($elements).forEach((endpoint) => {
    $elements
      .filter(`${tag}[${attr}="${endpoint}"]`)
      .each((index, element) => {
        if (index === 0) return;
        $(element).remove();
      });
  });
};

const clearDuplicatedAssets = (template: string): string => {
  const templateString = (template && typeof template === 'string') ? template : '';
  const $template = cheerio.load(templateString);

  removeDuplicates($template);
  // removeDuplicates($template('script'));

  return $template.html();
};

export {
  clearDuplicatedAssets,
};
