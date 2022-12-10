import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';

export default {
    title: 'shared/Drawer',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Open!</Button>,
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};

export const topLeft = Template.bind({});
topLeft.args = {
    trigger: <Button>Open!</Button>,
    direction: 'top left',
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};

export const topRight = Template.bind({});
topRight.args = {
    trigger: <Button>Open!</Button>,
    direction: 'top right',
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    trigger: <Button>Open!</Button>,
    direction: 'bottom right',
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    trigger: <Button>Open!</Button>,
    direction: 'bottom left',
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};

export const firstDisabledBottomLeft = Template.bind({});
firstDisabledBottomLeft.args = {
    trigger: <Button>Open!</Button>,
    direction: 'bottom left',
    items: [
        {
            content: 'first',
            disabled: true,
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};
