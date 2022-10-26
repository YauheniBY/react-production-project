import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Custom label for select',
    options: [
        { value: 'value1 - 123', content: 'content 1st' },
        { value: 'value2 - 456', content: 'content 2nd' },
        { value: 'value3 - 11122233', content: 'content 3th' },
        { value: 'value4 - 44455566', content: 'content 4th' },
    ],
};
