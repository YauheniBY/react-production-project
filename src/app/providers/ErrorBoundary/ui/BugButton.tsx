import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { isError } from 'util';
import { useTranslation } from 'react-i18next';

export const BugButton = () => {
    const [isEerror, setIsError] = useState(false);
    const onThrow = () => {
        setIsError(true);
    };
    const { t } = useTranslation();

    useEffect(() => {
        if (isEerror) {
            throw new Error();
        }
    }, [isEerror]);
    return (
        <Button
            onClick={onThrow}
        >
            {t('throw error')}
        </Button>
    );
};
