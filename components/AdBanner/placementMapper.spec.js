import placementMapper from './placementMapper';

describe('Ad placement mapper', () => {
  it.each([
    { position: 'middle', css: 'top-1/2' },
    { position: 'bottom', css: 'bottom-28' },
    { position: 'anyOther', css: 'top-20' },
  ])('should return correct banner class', ({ position, css }) => {
    const cssClass = placementMapper(position);

    expect(cssClass).toEqual(css);
  });
});
