import { md2html } from './markdown';

describe('adapters', () => {
  it('should work', () => {
    expect(md2html('## Hello, *world*!')).toEqual(
      '<h2>Hello, <em>world</em>!</h2>'
    );
  });
});
