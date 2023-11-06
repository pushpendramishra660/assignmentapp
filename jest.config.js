module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: ['node_modules/(?!react-native|react-navigation)/'],
  testPathIgnorePatterns: ['/node_modules/'],
};
