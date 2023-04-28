const searchCandies = require('./searchCandies');

describe ('search candies', () => {
  it('returns Mars and Maltesers', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });

  it('returns Mars', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  });

  it('returns Skitties, Skittles and Starburst', () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
  });

  it('returns Skitties and Skittles', () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
  });

  it('returns Mars and Maltesers, when given lowercase query', () => {
    expect(searchCandies('ma', 4)).toEqual(['Mars', 'Maltesers']);
  });

});
