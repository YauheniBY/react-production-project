import { ArticleDetailsSchema } from 'entities/Article';
import { articleDetailsReducer } from 'entities/Article/model/slices/articleDetailsSlice';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';

describe('articleDetailsSlice.test', () => {
    test('test  fetchArticleById fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = { isLoading: true };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled,
        )).toEqual({ isLoading: false });
    });
    test('test  fetchArticleById pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = { isLoading: false };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual({ isLoading: true });
    });
    test('test  fetchArticleById rejected', () => {
        const state: DeepPartial<ArticleDetailsSchema> = { error: undefined, isLoading: true };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.rejected,
        )).toEqual({ error: undefined, isLoading: false });
    });
});
