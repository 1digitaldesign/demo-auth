// jest.config.js
// Direct Jest configuration without using next/jest

// Custom Jest configuration
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};

// Export the Jest configuration
module.exports = config;
