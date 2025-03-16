import { PipeI } from '@baseai/core';
import toolCalculator from '../tools/calculator';

const pipePipeWithTool = (): PipeI => ({
	// Replace with your API key https://langbase.com/docs/api-reference/api-keys
	apiKey: process.env.LANGBASE_API_KEY!,
	name: 'pipe-with-tool',
	description: 'An AI agent pipe that can call tools',
	status: 'private',
	model: 'openai:gpt-4o-mini',
	stream: true,
	json: false,
	store: true,
	moderate: true,
	top_p: 1,
	max_tokens: 1000,
	temperature: 0.7,
	presence_penalty: 1,
	frequency_penalty: 1,
	stop: [],
	tool_choice: 'auto',
	parallel_tool_calls: true,
	messages: [{ role: 'system', content: `You are a helpful AI assistant that will work as a calculator.`  }],
	variables: [],
	memory: [],
	tools: [ toolCalculator() ],
});

export default pipePipeWithTool;
