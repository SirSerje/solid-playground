const config = {
  verbose: true,
  preset: 'solid-jest/preset/browser',
  setupFilesAfterEnv: [ '<rootDir>/jest-setup.ts' ],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest'
  }
};

// eslint-disable-next-line no-undef
module.exports = config;
