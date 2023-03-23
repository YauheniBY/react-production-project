import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/servises/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
    const { className } = props;
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
                                    data-testid="EditableProfileCardHeader.EditButton"
                                >
                                    {t('Редактировать')}
                                </Button>
                            )

                            : (
                                <HStack gap="8">
                                    <Button
                                        onClick={onSave}
                                        theme={ButtonTheme.OUTLINE}
                                        data-testid="EditableProfileCardHeader.SaveButton"
                                    >
                                        {t('Сохранить')}
                                    </Button>
                                    <Button
                                        onClick={onCancelEdit}
                                        theme={ButtonTheme.OUTLINE_RED}
                                        data-testid="EditableProfileCardHeader.CancelButton"
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
});
