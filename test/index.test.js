const getRandomFox = require('../index.js');

describe('getRandomFox API Response', () => {
	it('should return a response with success set to true', async () => {
		const data = await getRandomFox();
		expect(data.success).toBe(true);
	});

	it('should return a response with status code 200', async () => {
		const data = await getRandomFox();
		expect(data.status).toBe(200);
	});

	it('should return a response with info category "animals"', async () => {
		const data = await getRandomFox();
		expect(data.info.category).toBe('animals');
	});

	it('should return a response with info endpoint "fox"', async () => {
		const data = await getRandomFox();
		expect(data.info.endpoint).toBe('fox');
	});

	it('should return a message with a valid URL', async () => {
		const data = await getRandomFox();
		expect(data.message.startsWith('https://')).toBe(true);
	});
});
