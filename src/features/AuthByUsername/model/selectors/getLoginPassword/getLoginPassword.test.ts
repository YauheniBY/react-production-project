import { StateSchema } from 'app/providers/StoreProvider';
import {
    getLoginPassword,
} from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return password - 123', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                password: '123',
            },
        };

        expect(getLoginPassword(state as StateSchema)).toEqual('123');
    });
    test('with empty state', () => {
        const state:DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
