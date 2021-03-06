import {
    arrayLength,
    pop,
    push,
    shift,
    someFunction,
    unShift,
    some,
    everyFunction,
    every,
    filter,
    find,
} from './helper.js';

describe('function arrayLength []', () => {
    test('When receive []', () => {
        const param1 = arrayLength([]);
        expect(param1).toBe(0);
    });
    describe('function arrayLength', () => {
        test('When receive [ 7, 2 ,3]', () => {
            const param1 = arrayLength([7, 2, 3]);

            expect(param1).toBe(3);
        });
    });
});
describe('Given the function push', () => {
    describe('When receive [1 , 6 , 9], 1', () => {
        test('they should be 4', () => {
            const param1 = [1, 6, 9];
            const param2 = push(param1, 1);
            expect(param2).toBe(4);
        });
    });
    describe('When receive [], 98', () => {
        test('Then should return manzana, 98', () => {
            const manzana = [];
            push(manzana, 98);
            expect(manzana).toContain(98);
        });
    });
});

describe('Given the function pop', () => {
    describe('When receive [1 , 6 , 9]', () => {
        test('they should be 9', () => {
            const param2 = pop([1, 6, 9]);
            expect(param2).toBe(9);
        });
    });
    describe('When receive [1 , 6, 9]', () => {
        test('Then should return manzana, 2', () => {
            let manzana = [1, 6, 9];
            pop(manzana);
            expect(manzana.length).toBe(2);
        });
    });
});
describe('Given the function shift', () => {
    describe('When receive [1 , 6 , 9]', () => {
        test('they should be 1', () => {
            const param2 = shift([1, 6, 9]);
            expect(param2).toBe(1);
        });
    });
    describe('When receive [1 , 6, 9]', () => {
        test('Then should return, 2', () => {
            let manzana = [1, 6, 9];
            shift(manzana);
            expect(manzana.length).toBe(2);
        });
    });
});
describe('Given the function unShift', () => {
    describe('When receive [1 , 6 , 9], 18', () => {
        test('they should be 4', () => {
            const param1 = [1, 6, 9];
            const param2 = unShift(param1, 18);
            expect(param2).toBe(4);
        });
    });
    describe('When receive [50, 60], 98', () => {
        test('Then should return manzana, 98', () => {
            const manzana = [50, 60];
            unShift(manzana, 98);
            expect(manzana[0]).toBe(98);
        });
    });
});

describe('Given the function some', () => {
    describe('When receive [15 , 7 , 9], someFunction', () => {
        test('they should be false', () => {
            const param1 = [15, 8, 9];
            const param2 = some(param1, someFunction);
            expect(param2).toBe(true);
        });
    });
});

describe('Given the function every', () => {
    describe('When receive [16 , 18 , 20]', () => {
        test('they should be a true', () => {
            const param1 = [56, 67, 41];
            const param2 = every(param1, everyFunction);
            expect(param2).toBe(true);
        });
    });
});

describe('Given the function find', () => {
    describe('When receive [18 , 16, 20 ,25] , func', () => {
        test('should first number > 19', () => {
            const param1 = [18, 16, 20, 25];
            const func = (item) => {
                return item > 19;
            };
            const result = find(param1, func);
            expect(result).toBe(20);
        });
    });
});

describe('Given the function filter', () => {
    describe('When receive [18 , 16, 20 ,25] , func', () => {
        test('should all number > 19', () => {
            const param1 = [18, 16, 20, 25];
            const func = (item) => {
                return item > 19;
            };
            const result = filter(param1, func);
            expect(result).toContain(20, 25);
        });
    });
});
