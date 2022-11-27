import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = ({ className }:ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>

            <Text title={t('Профиль')} />
            {
                canEdit && (
                    <div>
                        {readonly
                            ? (
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onEdit}
                                >
                                    {t('Редактировать')}
                                </Button>
                            )

                            : (
                                <HStack gap="8">
                                    <Button
                                        onClick={onSave}
                                        theme={ButtonTheme.OUTLINE}
                                    >
                                        {t('Сохранить')}
                                    </Button>
                                    <Button
                                        onClick={onCancelEdit}
                                        theme={ButtonTheme.OUTLINE_RED}
                                    >
                                        {t('Отменить')}
                                    </Button>
                                </HStack>
                            )}
                    </div>
                )
            }

        </HStack>
    );
};
