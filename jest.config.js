module.exports = {
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
	},
	moduleNameMapper: {
		'^~/helpers(.*)$': '<rootDir>/helpers$1',
		'^@components(.*)$': '<rootDir>/components$1',
		'^@pages(.*)$': '<rootDir>/pages$1',
		'^@queries(.*)$': '<rootDir>/queries$1',
		'^@lib(.*)$': '<rootDir>/lib$1',
		'@styles(.*)$': '<rootDir>/styles$1',
		'^@hooks(.*)$': '<rootDir>/hooks$1',
	},
};
