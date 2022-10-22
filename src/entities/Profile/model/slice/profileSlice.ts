import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../servises/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from '../types/profile';

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
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (
                state,
                action: PayloadAction<Profile>,
            ) => {
                state.error = undefined;
                state.isLoading = false;
                state.data = action.payload;
            })

            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addDefaultCase((state, action) => {});
    },
});

export const { actions: profileActions } = profileSlice;

export const { reducer: profileReducer } = profileSlice;
