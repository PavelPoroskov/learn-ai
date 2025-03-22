import {MemoryI} from '@baseai/core';

const memoryChatWithDocsAgent = (): MemoryI => ({
	name: 'chat-with-docs-agent',
	description: "FAQs docs",
	git: {
		enabled: false,
		include: ['documents/**/*'],
		gitignore: false,
		deployedAt: '',
		embeddedAt: ''
	}
});

export default memoryChatWithDocsAgent;