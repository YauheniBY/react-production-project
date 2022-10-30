import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateProfileData } from '../servises/updateProfileData/updateProfileData';
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
    reducers: {
        setReadonly: (state, action:PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
            state.validateError = undefined;
        },
        updateProfile: (state, action:PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
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
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })

            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileData.pending, (state, action) => {
                state.validateError = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (
                state,
                action: PayloadAction<Profile>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
                state.validateError = undefined;
            })

            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.validateError = action.payload;
            })
            .addDefaultCase((state, action) => {});
    },
});

export const { actions: profileActions } = profileSlice;

export const { reducer: profileReducer } = profileSlice;
