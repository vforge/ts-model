module.exports = {
  transform: {
    '.(ts|tsx)': './node_modules/ts-jest/dist/index.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  testMatch: ['<rootDir>/test/**/*.(spec|test).{ts,tsx}'],
  testURL: 'http://localhost',
  rootDir: '.',
  watchPlugins: [
    './node_modules/jest-watch-typeahead/filename.js',
    './node_modules/jest-watch-typeahead/testname.js',
  ],
  globals: {
    'ts-jest': {
      diagnostics: {
        // 6133 - X is declared but its value is never read.
        ignoreCodes: ['TS6133'],
      },
    },
  },
};
