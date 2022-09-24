import { classNames } from './classNames';

describe('classNames', () => {
    test('One params test', () => {
        expect(classNames('class')).toBe('class');
    }),
    test('Additional params test', () => {
        const expected = 'class class1 class2';
        expect(classNames('class', {}, ['class1', 'class2'])).toBe(expected);
    }),
    test('Additional mods to params test', () => {
        const expected = 'class class1 class2 hovered scrollable';
        expect(classNames('class', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(expected);
    }),
    test('Additional false mods to params test', () => {
        const expected = 'class class1 class2 hovered';
        expect(classNames('class', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(expected);
    }),
    test('Additional undefined mods to params test', () => {
        const expected = 'class class1 class2 scrollable';
        expect(classNames('class', { hovered: undefined, scrollable: true }, ['class1', 'class2'])).toBe(expected);
    });
});
