import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';

const MainPage = memo(() => {
    const { t } = useTranslation();
    const [val, setVal] = useState('');
    const onChange = (val:string) => {
        setVal(val);
    };

    return (
        <Page>
            {t('Главная страница')}
            <Counter />
        </Page>
    );
});

export default MainPage;
