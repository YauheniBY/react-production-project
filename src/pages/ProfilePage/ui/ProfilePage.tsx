import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';
import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/editableProfileCard';
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice';
import { useParams } from 'react-router-dom';

interface ProfilePageProps {
    className?: string
}
const reducers: ReducerList = {
    profile: profileReducer,
};

export const ProfilePage = ({ className }:ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{id:string}>();

    if (!id) {
        return <Text text={t('Профиль не найден')} />;
    }

    return (
        <Page className={classNames('cls.ProfilePage', {}, [className])}>
            <VStack max gap="16">
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
