import gridMapper from './gridMapper';

describe('Product grid mapper', () => {
  it.each([
    { count: 1, css: 'lg:grid-cols-1' },
    { count: 2, css: 'lg:grid-cols-2' },
    { count: 3, css: 'lg:grid-cols-3' },
    { count: 4, css: 'lg:grid-cols-4' },
    { count: 5, css: 'lg:grid-cols-5' },
    { count: 'anyOther', css: 'lg:grid-cols-4' },
  ])('should return correct grid class', ({ count, css }) => {
    const cssClass = gridMapper(count);

    expect(cssClass).toEqual(css);
  });
});
