import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUserName } from './loginByUserName';

// const userData = { username: 'someName', id: '123' };

describe('loginByUsername.test', () => {
    // let dispatch: Dispatch;
    // let getState: ()=> StateSchema;
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    //
    // test('success login', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
    //     const action = loginByUserName({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //
    //     expect(result.payload).toEqual(userData);
    // });
    //
    // test('error login', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUserName({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(result.payload).toBe('error');
    // });

    test('success login', async () => {
        const userData = { username: 'someName', id: '123' };
        const thunk = new TestAsyncThunk(loginByUserName);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));
        const result = await thunk.callThunk({ username: 'someName', password: '3323' });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');

        expect(result.payload).toEqual(userData);
    });
    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUserName);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username: 'someName', password: '3323' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
