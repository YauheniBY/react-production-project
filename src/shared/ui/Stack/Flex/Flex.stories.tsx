import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>Tra-la-la 1</div>
            <div>Tra-la-la 2</div>
            <div>Tra-la-la 3</div>
            <div>Tra-la-la 4</div>
            <div>Tra-la-la 5</div>
        </>
    ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    gap: '4',
    children: (
        <>
            <div>Tra-la-la 1</div>
            <div>Tra-la-la 2</div>
            <div>Tra-la-la 3</div>
            <div>Tra-la-la 4</div>
            <div>Tra-la-la 5</div>
        </>
    ),
};
export const RowGap8 = Template.bind({});
RowGap8.args = {
    gap: '8',
    children: (
        <>
            <div>Tra-la-la 1</div>
            <div>Tra-la-la 2</div>
            <div>Tra-la-la 3</div>
            <div>Tra-la-la 4</div>
            <div>Tra-la-la 5</div>
        </>
    ),
}; export const RowGap16 = Template.bind({});
RowGap16.args = {
    gap: '16',
    children: (
        <>
            <div>Tra-la-la 1</div>
            <div>Tra-la-la 2</div>
            <div>Tra-la-la 3</div>
            <div>Tra-la-la 4</div>
            <div>Tra-la-la 5</div>
        </>
    ),
}; export const RowGap32 = Template.bind({});
RowGap32.args = {
    gap: '32',
    children: (
        <>
            <div>Tra-la-la 1</div>
            <div>Tra-la-la 2</div>
            <div>Tra-la-la 3</div>
            <div>Tra-la-la 4</div>
            <div>Tra-la-la 5</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>Tra-la-la 1</div>
            <div>Tra-la-la 2</div>
            <div>Tra-la-la 3</div>
            <div>Tra-la-la 4</div>
            <div>Tra-la-la 5</div>
        </>
    ),
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    gap: '16',
    direction: 'column',
    children: (
        <>
            <div>Tra-la-la 1</div>
            <div>Tra-la-la 2</div>
            <div>Tra-la-la 3</div>
            <div>Tra-la-la 4</div>
            <div>Tra-la-la 5</div>
        </>
    ),
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    align: 'end',
    direction: 'column',
    children: (
        <>
            <div>Tra-la-la 1</div>
            <div>Tra-la-la 2</div>
            <div>Tra-la-la 3</div>
            <div>Tra-la-la 4</div>
            <div>Tra-la-la 5</div>
        </>
    ),
};
