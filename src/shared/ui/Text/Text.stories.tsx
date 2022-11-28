import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Header-title',
    text: 'simple text',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Header-title',
};
export const onlyText = Template.bind({});
onlyText.args = {
    text: 'simple text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Header-title',
    text: 'simple text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Header-title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'simple text',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Header-title',
    text: 'simple text',
    theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Header-title',
    text: 'simple text',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Header-title',
    text: 'simple text',
    size: TextSize.S,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Header-title',
    text: 'simple text',
    size: TextSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Header-title',
    text: 'simple text',
    size: TextSize.L,
};
