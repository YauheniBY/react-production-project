import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            firstParam: 'firstValue',
        });
        expect(params).toEqual('?firstParam=firstValue');
    });
    test('test with several params', () => {
        const params = getQueryParams({
            firstParam: 'firstValue',
            secondParam: 'secondValue',
        });
        expect(params).toEqual('?firstParam=firstValue&secondParam=secondValue');
    });
    test('test with one param and second undefined one', () => {
        const params = getQueryParams({
            firstParam: 'firstValue',
            second: undefined,
        });
        expect(params).toEqual('?firstParam=firstValue');
    });
});
