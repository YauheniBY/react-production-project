import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ValidateProfileError } from '../consts/consts';
import {
    profileActions, profileReducer,
} from '../../model/slice/profileSlice';
import { updateProfileData } from '../servises/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';

const data = {
    first: 'admin',
    lastname: 'Лукьяненкоc',
    age: 12,
    currency: Currency.EUR,
    country: Country.Belarus,
    city: 'Gomelek',
    username: 'admin',
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });
    test('test set cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateError: undefined,
            data,
            form: data,
        });
    });
    test('test set updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: '1235',
            }),
        )).toEqual({
            form: { username: '1235' },
        });
    });
    test('update Profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [
                ValidateProfileError.SERVER_ERROR,
            ],

        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });
    test('update Profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateError: [
                ValidateProfileError.SERVER_ERROR,
            ],

        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });
});
