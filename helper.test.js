import { arrayLength, pop, push } from './helper.js';

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
    describe('When receive [], 1', () => {
        test('they should be 1', () => {
            const param1 = [];
            const param2 = push([], 1);
            expect(param2).toBe(1);
        });
    });
    describe('When receive [], 1', () => {
        test('Then should return manana, 1', () => {
            const manzana = [];
            push(manzana, 1);
            expect(manzana).toContain(1);
        });
    });
});

describe('Given the function pop', () => {
    describe('When receive [1 , 6 , 9]', () => {
        test('they should be 3', () => {
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
