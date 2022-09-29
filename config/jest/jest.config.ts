/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>config/jest/jest-setup.ts'],
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent'),
    },
};
