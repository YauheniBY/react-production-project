import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileFirstname } from './getProfileFirstname';

describe('getProfileFirstname.test', () => {
    test('should return Name', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                data: {
                    first: 'NameMy1',
                },
            },
        };

        expect(getProfileFirstname(state as StateSchema)).toEqual('NameMy1');
    });
    test('with empty state', () => {
        const state:DeepPartial<StateSchema> = {};

        expect(getProfileFirstname(state as StateSchema)).toEqual('');
    });
});
