const sum = require ('./sum');

test ('add 1+2 to equal 3' , ()=>{
    expect(sum(1,2)).toBe(3);
});


test('two plus four is four', () => {
    expect(2 + 4).toBe(6);
  });

  test('object assignment', () => {
    const data = {fav_pet: "dog"};
    data['fav_num'] = 3;
    expect(data).toEqual({fav_num: 3, fav_pet: "dog"});
  });


  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

//   Truthiness

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

//   Numbers
test('two plus two', () => {
    const value = 3 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(5);
    expect(value).toBeLessThan(6);
    expect(value).toBeLessThanOrEqual(5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(5);
    expect(value).toEqual(5);
  });

  test('adding floating point numbers', () => {
    const value = 0.2 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.4); // This works.
  });

  