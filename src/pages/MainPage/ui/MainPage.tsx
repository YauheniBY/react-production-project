import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';
import { Page } from 'widgets/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation();
    const [val, setVal] = useState('');
    const onChange = (val:string) => {
        setVal(val);
    };

    return (
        <Page>
            {t('Главная страница')}
        </Page>
    );
});

export default MainPage;
