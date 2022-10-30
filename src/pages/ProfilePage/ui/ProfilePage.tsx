import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { ProfilePageHeader } from '../ui/ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
    className?: string
}
const reducers: ReducerList = {
    profile: profileReducer,
};

export const ProfilePage = ({ className }:ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector((getProfileValidateErrors));
    const validateErrorsTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка сохранения'),
        [ValidateProfileError.INCORRECT_USER_COUNTRY]: t('Не указана страна'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Не верно введены имя и фамилия '),
        [ValidateProfileError.INCORRECT_USER_AGE]: t('Не верно указан возраст'),
        [ValidateProfileError.NO_DATA]: t('Не укзаны данные для сохранения'),
    };
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const onChangeFirstname = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);
    const onChangeLastname = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);
    const onChangeCity = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);
    const onChangeAge = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);
    const onChangeUsername = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);
    const onChangeAvatar = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);
    const onChangeCurrency = useCallback((currency:Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);
    const onChangeCountry = useCallback((country:Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('cls.ProfilePage', {}, [className])}>
                <ProfilePageHeader />
                {validateErrors && validateErrors.map((err) => (
                    <Text
                        theme={TextTheme.ERROR}
                        text={validateErrorsTranslates[err]}
                        key={err}
                    />
                ))}
                <ProfileCard
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
