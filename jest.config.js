module.exports = () => {
  return {
    verbose: true,
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['./lib/**/*.ts'],
    coveragePathIgnorePatterns: ['node_modules', 'dist'],
    transform: {
      '\\.ts?$': 'babel-jest',
    },
  };
};
