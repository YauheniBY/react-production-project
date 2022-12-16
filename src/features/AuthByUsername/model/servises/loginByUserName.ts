import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginByUserNameProps {
    username: string,
    password: string,
}

export const loginByUserName = createAsyncThunk<
    User,
    LoginByUserNameProps,
    ThunkConfig<string>
    >(
        'login/loginByUserName',
        async (authData, thunkAPI) => {
            const { dispatch, extra, rejectWithValue } = thunkAPI;
            try {
                const response = await extra.api.post<User>('/login', authData);
                if (!response.data) {
                    throw new Error();
                }
                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                dispatch(userActions.setAuthData(response.data));
                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
