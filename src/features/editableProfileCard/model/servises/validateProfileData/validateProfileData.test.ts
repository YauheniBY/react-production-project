import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData.test', () => {
    const data = {
        first: 'admin',
        lastname: 'Лукьяненкоc',
        age: 12,
        currency: Currency.EUR,
        country: Country.Belarus,
        city: 'Gomelek',
        username: 'admin',
    };
    test('success', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });
    test('with wrong first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
    test('with wrong age', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_AGE,
        ]);
    });
    test('with wrong country', async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_COUNTRY,
        ]);
    });
    test('with empty data', async () => {
        const result = validateProfileData({ });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_USER_AGE,
            ValidateProfileError.INCORRECT_USER_COUNTRY,
        ]);
    });
});
