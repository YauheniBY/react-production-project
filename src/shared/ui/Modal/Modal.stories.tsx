import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/constants/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus eius qui? Aperiam consequuntur eius minima omnis quisquam vel voluptate voluptatibus! Architecto doloribus eligendi labore optio pariatur  repudiandae unde ut.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus eius qui? Aperiam consequuntur eius minima omnis quisquam vel voluptate voluptatibus! Architecto doloribus eligendi labore optio pariatur  repudiandae unde ut.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
