import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
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
                data,
            },
        };

        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('with empty state', () => {
        const state:DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
