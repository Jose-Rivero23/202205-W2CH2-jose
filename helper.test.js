import { arrayLength, pop, push, shift, unShift } from './helper.js';

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
            const param1 = [];
            const param2 = push([1, 6, 9], 1);
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
describe('Given the function push', () => {
    describe('When receive [1 , 6 , 9], 18', () => {
        test('they should be 4', () => {
            const param1 = [];
            const param2 = unShift([1, 6, 9], 18);
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
