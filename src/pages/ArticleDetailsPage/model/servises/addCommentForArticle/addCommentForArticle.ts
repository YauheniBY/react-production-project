import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article';
import { fetchCommentsByArticleId } from '../../servises/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
    >(
        'articles/addCommentForArticle',
        async (text, thunkAPI) => {
            const {
                dispatch, extra, rejectWithValue, getState,
            } = thunkAPI;
            const userData = getUserAuthData(getState());
            const article = getArticleDetailsData(getState());

            if (!userData || !text || !article) {
                rejectWithValue('no data');
            }
            try {
                const response = await extra.api.post<Comment>('/comments', {
                    articleId: article?.id,
                    text,
                    userId: userData?.id,
                });
                if (!response.data) {
                    throw new Error();
                }

                dispatch(fetchCommentsByArticleId(article?.id));
                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
