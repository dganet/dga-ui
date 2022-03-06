module.exports = {
    clearMocks: true,
    preset: 'ts-jest',
    projects: ['<rootDir>/packages/**/jest.config.js'],
    testMatch: ['*.spec.ts', '*.spec.tsx']
}