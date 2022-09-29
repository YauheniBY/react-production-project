import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('Test render', () => {
        render(
            // eslint-disable-next-line no-undef
            <Button theme={ThemeButton.CLEAR}>
                TEST
            </Button>,
        );
        expect(screen.getByText('TEST')).toBeInTheDocument();
        screen.debug();
    });
    test('Class clear', () => {
        render(
            // eslint-disable-next-line no-undef
            <Button theme={ThemeButton.CLEAR}>
                TEST
            </Button>,
        );
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
