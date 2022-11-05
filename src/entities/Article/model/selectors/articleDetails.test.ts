import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsIsLoading, getArticleDetailsError } from './articleDetails';

describe('articleDetails.test', () => {
    const data = {
        id: '1',
        title: 'subtitle',
    };
    test('should return data', () => {
        const state:DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });
    test('with empty state', () => {
        const state:DeepPartial<StateSchema> = {};

        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
    test('should return Error', () => {
        const state:DeepPartial<StateSchema> = {
            articleDetails: {
                error: '123',
            },
        };

        expect(getArticleDetailsError(state as StateSchema)).toEqual('123');
    });
    test('with empty state', () => {
        const state:DeepPartial<StateSchema> = {};

        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
    test('should return true', () => {
        const state:DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('with empty state', () => {
        const state:DeepPartial<StateSchema> = {};

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
