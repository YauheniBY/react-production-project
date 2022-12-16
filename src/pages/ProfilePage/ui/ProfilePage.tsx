import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page/Page';
import { VStack } from '@/shared/ui/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';

interface ProfilePageProps {
    className?: string
}
const reducers: ReducerList = {
    profile: profileReducer,
};

export const ProfilePage = ({ className }:ProfilePageProps) => {
    const { id } = useParams<{id:string}>();

    return (
        <Page className={classNames('cls.ProfilePage', {}, [className])}>
            <VStack max gap="16">
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
