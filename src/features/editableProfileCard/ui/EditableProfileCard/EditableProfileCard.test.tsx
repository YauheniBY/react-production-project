import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Profile } from 'entities/Profile';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 465,
    currency: Currency.USD,
    country: Country.Kazakhstan,
    city: 'Moscow',
    username: 'admin213',
};

const options = {
    initialState: {
        profile: {
            data: profile,
            form: profile,
            readonly: true,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin213',
            },
        },
    },

    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard', () => {
    test('Режим рид онли должен переключиться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('При отмене значения должны обнуляться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));

        await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'user');

        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('admin');
    });

    test('Должна появиться ошибка валидации', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Если не ошибок валидации на сервер должен уйти PUT запрос', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        const mockPutReq = jest.spyOn($api, 'put');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
        await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
        expect(mockPutReq).toHaveBeenCalled();
    });
});
