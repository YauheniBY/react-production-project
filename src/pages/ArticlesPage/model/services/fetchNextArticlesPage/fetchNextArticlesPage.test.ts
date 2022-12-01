import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import {
    fetchNextArticlesPage,
} from '../fetchNextArticlesPage/fetchNextArticlesPage';
import {
    fetchArticlesList,
} from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                entities: {},
                isLoading: false,
                ids: [],
                limit: 5,
                hasMore: true,
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalled();
    });
    test('fetchAritcleList not called dew hasMore false', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                entities: {},
                isLoading: false,
                ids: [],
                limit: 5,
                hasMore: false,
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toBeCalledWith();
    });
    test('fetchAritcleList not called dew isLoading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                entities: {},
                isLoading: true,
                ids: [],
                limit: 5,
                hasMore: true,
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toBeCalledWith();
    });
});
