import { fragmentExtractor } from '../../../lib/extractors/fragment';

describe('Fragment Extractor', () => {
  describe('Fragment Attributes Extractor', () => {
    [
      {
        template: '<html><body><fragment href="https://unit.test/" primary /></body></html>',
        expected: [{
          fragment: '<fragment href="https://unit.test/" primary />',
          attributes: {
            href: 'https://unit.test/',
            cache: null,
            primary: true,
          }
        }],
      },
      {
        template: `
          <html>
            <body>
              <fragment href="https://unit.test/" primary />
              <p>Template code</p>
              <fragment href="https://unit.test.com/" />
            </body>
          </html>
        `,
        expected: [
          {
            fragment: '<fragment href="https://unit.test/" primary />',
            attributes: {
              href: 'https://unit.test/',
              cache: null,
              primary: true,
            }
          },
          {
            fragment: '<fragment href="https://unit.test.com/" />',
            attributes: {
              href: 'https://unit.test.com/',
              cache: null,
              primary: false,
            }
          }
        ],
      },
      {
        template: '<html><body><p>Template without fragments</p></body></html>',
        expected: [],
      },
    ].forEach(({ template, expected }) => {
      it(`should return the fragments list to the template "${template}"`, () => {
        expect(fragmentExtractor(template)).toEqual(expected);
      });
    });
  });
});
