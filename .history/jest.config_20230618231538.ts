import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  preset: "ts-jest",
  verbose: true,
  automock: false,
  roots: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', 'src'],
  testMatch: ['<rootDir>/src/**/*.test.(js|jsx|ts|tsx)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  //transform: {
//    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  //},
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.test.{js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary'],

  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    'node_modules/(?!aggregate-error|clean-stack|escape-string-regexp|indent-string|p-map)',
  ],
}
export default config;