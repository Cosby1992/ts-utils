/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['node_modules'],
  reporters: ['default', ['jest-junit', {
    outputDirectory: 'test_reports',
    outputName: 'jest-junit.xml',
  }]],
  // globals: { 'ts-jest': { diagnostics: false } },
  transform: {"\\.[jt]sx?$": "ts-jest"},
};