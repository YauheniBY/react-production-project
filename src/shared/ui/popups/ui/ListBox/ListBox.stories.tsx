import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
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

export const TopLeft = Template.bind({});
TopLeft.args = {
    defaultValue: 'Choose a number',
    items: [
        { value: '1', content: '111' },
        { value: '2', content: '222', disabled: true },
        { value: '3', content: '333' },
        { value: '4', content: '444' },
        { value: '5', content: '555' },
    ],
    direction: 'top left',
};

export const TopRight = Template.bind({});
TopRight.args = {
    defaultValue: 'Choose a number',
    items: [
        { value: '1', content: '111' },
        { value: '2', content: '222', disabled: true },
        { value: '3', content: '333' },
        { value: '4', content: '444' },
        { value: '5', content: '555' },
    ],
    direction: 'top right',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    defaultValue: 'Choose a number',
    items: [
        { value: '1', content: '111' },
        { value: '2', content: '222', disabled: true },
        { value: '3', content: '333' },
        { value: '4', content: '444' },
        { value: '5', content: '555' },
    ],
    direction: 'bottom right',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    defaultValue: 'Choose a number',
    items: [
        { value: '1', content: '111' },
        { value: '2', content: '222', disabled: true },
        { value: '3', content: '333' },
        { value: '4', content: '444' },
        { value: '5', content: '555' },
    ],
    direction: 'bottom left',
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
    direction: 'top left',
    readonly: true,
};
