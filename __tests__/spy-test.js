const Spy = require('../spy');

describe('Spy', () => {
  test('should be a function', () => {
    expect(typeof Spy).toEqual('function');
  });
  test('should have a length of 2', () => {
    expect(Spy.length).toEqual(2);
  });
  describe(`the console object's error method, called 3 times`, () => {
    let s;
    beforeAll(() => {
      s = Spy(console, 'error');
      console.error('calling console.error');
      console.error('calling console.error');
      console.error('calling console.error');
    });
    test('should make the Spy call count 3', () => {
      expect(s.count).toEqual(3);
    });
  });
});
