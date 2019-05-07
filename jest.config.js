module.exports = {
  transform: {
    '.(ts|tsx)': '/Users/v/Code/ts-model/node_modules/ts-jest/dist/index.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  testMatch: ['<rootDir>/test/**/*.(spec|test).{ts,tsx}'],
  testURL: 'http://localhost',
  rootDir: '/Users/v/Code/ts-model',
  watchPlugins: [
    '/Users/v/Code/ts-model/node_modules/jest-watch-typeahead/filename.js',
    '/Users/v/Code/ts-model/node_modules/jest-watch-typeahead/testname.js',
  ],
};
