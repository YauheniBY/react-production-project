import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

describe('getProfileValidateErrors.test', () => {
    test('should return data', () => {
        const data = {
            first: 'admin',
            lastname: 'Лукьяненкоc',
            age: 12,
            currency: Currency.EUR,
            country: Country.Belarus,
            city: 'Gomelek',
            username: 'admin',
        };
        const state:DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.INCORRECT_USER_AGE,
                    ValidateProfileError.INCORRECT_USER_COUNTRY,
                ],
            },
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_USER_AGE,
            ValidateProfileError.INCORRECT_USER_COUNTRY,
        ]);
    });
    test('with empty state', () => {
        const state:DeepPartial<StateSchema> = {};

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
