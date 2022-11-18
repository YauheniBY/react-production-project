import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleSortField } from 'entities/Article';
import { initArticlesPage } from '../initArticlesPage/initArticlesPage';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                entities: {},
                isLoading: false,
                ids: [],
                limit: 5,
                hasMore: true,
                _inited: false,
                search: '',
                order: 'asc',
                sort: ArticleSortField.TITLE,
            },
        });
        const urlParam: URLSearchParams = new URLSearchParams('?sort=createdAt&order=asc&search=abs');

        await thunk.callThunk(urlParam);
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toBeCalledWith({
            search: 'abs',
            order: 'asc',
            sort: ArticleSortField.CREATED,
            page: 1,
        });
    });
    test('not init because inited already', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                entities: {},
                isLoading: false,
                ids: [],
                limit: 5,
                hasMore: true,
                _inited: true,
                search: '',
                order: 'asc',
                sort: ArticleSortField.TITLE,
            },
        });
        const urlParam: URLSearchParams = new URLSearchParams('');
        await thunk.callThunk(urlParam);
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
