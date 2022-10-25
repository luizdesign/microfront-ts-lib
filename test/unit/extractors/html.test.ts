import { BodyExtractor } from '../../../lib/extractors/html';

describe('HTML Extractor', () => {
  describe('Body Extractor', () => {
    [
      { expectedMessage: 'the template', scenarioMessage: 'don\'t have a body tag', template: '<p>A unit test code</p>', expected: '<p>A unit test code</p>' },
      { expectedMessage: 'the body content', scenarioMessage: 'have a body tag', template: '<html><body><p>A unit test code with body</p></body></html>', expected: '<p>A unit test code with body</p>' },
      { expectedMessage: 'the body content', scenarioMessage: 'have a body tag with parameters', template: '<html><body bgcolor="#fff><p>A unit test code with body</p></body></html>', expected: '<p>A unit test code with body</p>' },
    ].forEach(({ expectedMessage, scenarioMessage, template, expected }) => {
      it(`should return "${expectedMessage}" when ${scenarioMessage}`, () => {
        expect(BodyExtractor(template)).toEqual(expected);
      });
    });
  });
});
