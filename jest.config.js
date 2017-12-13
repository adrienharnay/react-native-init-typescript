const path = require('path');

module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: path.join(__dirname, 'coverage'),
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  preset: 'react-native',
  rootDir: __dirname,
  roots: [__dirname],
  testRegex: '\\.test\\.tsx?$',
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
};
