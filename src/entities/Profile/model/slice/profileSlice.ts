import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';

export interface ProfileState {
    value: number
}

const initialState: ProfileSchema = {
    error: undefined,
    readonly: true,
    isLoading: false,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const { actions: profileActions } = profileSlice;

export const { reducer: profileReducer } = profileSlice;
