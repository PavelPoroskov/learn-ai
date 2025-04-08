import {MemoryI} from '@baseai/core';

const memoryEmailGeneratorMemory = (): MemoryI => ({
	name: 'email-generator-memory',
	description: "Contains my resume",
	git: {
		enabled: false,
		include: ['documents/**/*'],
		gitignore: false,
		deployedAt: '',
		embeddedAt: ''
	}
});

export default memoryEmailGeneratorMemory;