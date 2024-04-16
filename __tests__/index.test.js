import square from '../index.js';

test('test square', () => {
    expect(square(4)).toEqual(16);
    expect(square(-2)).toEqual(4);
    })

//* */ touch__tests__/index.test.js
//* node __tests__/index.test.js
//* npx jest

//* NODE_OPTIONS=--experimental-vm-modules npx jest