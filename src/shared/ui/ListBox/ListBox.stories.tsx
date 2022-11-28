import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    defaultValue: 'Choose a number',
    items: [
        { value: '1', content: '111' },
        { value: '2', content: '222' },
        { value: '3', content: '333' },
        { value: '4', content: '444' },
        { value: '5', content: '555' },
    ],
};

export const NormalSecondDisabled = Template.bind({});
NormalSecondDisabled.args = {
    defaultValue: 'Choose a number',
    items: [
        { value: '1', content: '111' },
        { value: '2', content: '222', disabled: true },
        { value: '3', content: '333' },
        { value: '4', content: '444' },
        { value: '5', content: '555' },
    ],
};

export const NormalTop = Template.bind({});
NormalTop.args = {
    defaultValue: 'Choose a number',
    items: [
        { value: '1', content: '111' },
        { value: '2', content: '222', disabled: true },
        { value: '3', content: '333' },
        { value: '4', content: '444' },
        { value: '5', content: '555' },
    ],
    direction: 'top',
};

export const NormalReadonly = Template.bind({});
NormalReadonly.args = {
    defaultValue: 'Choose a number',
    items: [
        { value: '1', content: '111' },
        { value: '2', content: '222' },
        { value: '3', content: '333' },
        { value: '4', content: '444' },
        { value: '5', content: '555' },
    ],
    direction: 'top',
    readonly: true,
};
