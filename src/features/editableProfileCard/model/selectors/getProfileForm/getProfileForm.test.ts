import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return form', () => {
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
                form: data,
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('with empty state', () => {
        const state:DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
