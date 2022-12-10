import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/popups/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value:Currency) => void;
    readonly?:boolean;
}

const optionsCurrency = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props:CurrencySelectProps) => {
    const { t } = useTranslation();
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;
    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            defaultValue={t('Укажите валюту')}
            label={t('Укажите валюту')}
            value={value}
            onChange={onChangeHandler}
            items={optionsCurrency}
            readonly={readonly}
            direction="top right"
        />
    );
});
