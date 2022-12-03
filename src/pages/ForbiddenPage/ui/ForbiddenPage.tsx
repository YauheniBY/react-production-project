import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const ForbiddenPage = memo(() => {
    const { t } = useTranslation('forbidden');

    return (
        <Page>
            {t('У вас нет права доступа к странице по этому адресу')}
        </Page>
    );
});

export default ForbiddenPage;
