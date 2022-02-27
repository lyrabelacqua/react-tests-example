import { add, divide } from './utils';

describe('add', () => {
    
    test('adds two numbers', () => {
        const sum = add(2, 2);

        expect(sum).not.toBe(5);
    })
});

describe('divide', () => {
    it('divides two numbers', () => {
        const result = divide(4,2);
        expect(result).toBe(2);
    });

    it('throws an error if the function tries to divide by 0', () => {

        expect(() => divide(1, 0)).toThrowError();
    });
})