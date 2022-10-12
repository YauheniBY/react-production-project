import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();
    const [val, setVal] = useState('');
    const onChange = (val:string) => {
        setVal(val);
    };

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
