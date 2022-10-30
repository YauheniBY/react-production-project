import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';

const MainPage = memo(() => {
    const { t } = useTranslation();
    const [val, setVal] = useState('');
    const onChange = (val:string) => {
        setVal(val);
    };

    return (
        <div style={{ color: 'blue' }}>
            {t('Главная страница')}
        </div>
    );
});

export default MainPage;
