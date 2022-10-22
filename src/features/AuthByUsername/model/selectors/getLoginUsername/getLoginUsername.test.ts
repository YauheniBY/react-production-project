import { StateSchema } from 'app/providers/StoreProvider';
import {
    getLoginUsername,
} from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return Username - 123', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                username: 'someUsername',
            },
        };

        expect(getLoginUsername(state as StateSchema)).toEqual('someUsername');
    });
    test('with empty state', () => {
        const state:DeepPartial<StateSchema> = {};

        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
