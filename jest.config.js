module.exports = () => {
  return {
    verbose: true,
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['./lib/**/*.ts'],
    coveragePathIgnorePatterns: ['node_modules', 'dist'],
    transform: {
      '\\.ts?$': 'babel-jest',
    },
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        statements: 80,
      },
    },
  };
};
