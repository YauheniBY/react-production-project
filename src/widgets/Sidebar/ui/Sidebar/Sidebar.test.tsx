import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { withTranslation } from 'react-i18next';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('Test sidebar render', () => {
        const SidebarWithTranslation = withTranslation('ns')(Sidebar);
        renderWithTranslation(

            <SidebarWithTranslation />,
        );
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    });

    test('Test sidebar toggle', () => {
        const SidebarWithTranslation = withTranslation('ns')(Sidebar);
        renderWithTranslation(

            <SidebarWithTranslation />,
        );
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        screen.debug();
    });
});
