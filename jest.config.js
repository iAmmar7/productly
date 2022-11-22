const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: '.' });

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
};

module.exports = createJestConfig(customJestConfig);
