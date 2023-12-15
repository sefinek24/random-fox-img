const https = require('https');
const { name, version, devDependencies } = require('./package.json');

const apiUrl = 'https://api.sefinek.net/api/v2/random/animal/fox';
const headers = {
	'User-Agent': `${name}/${version} (+https://github.com/sefinek24/random-fox-img)${process.env.JEST_WORKER_ID === undefined ? '' : ` jest/${devDependencies.jest.replace('^', '')}`}`,
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	'Cache-Control': 'no-cache',
	'CF-IPCountry': 'false',
	'CF-Visitor': '{"scheme":"https"}',
	'Connection': 'keep-alive',
	'DNT': '1',
	'Pragma': 'no-cache',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Content-Type-Options': 'nosniff',
	'X-Frame-Options': 'DENY',
	'X-XSS-Protection': '1; mode=block',
};

/**
 * Retrieves a random fox object from the specified API.
 *
 * @async
 * @returns {Promise<object>} A promise that resolves with a random fox object on success or rejects with an error on failure.
 * @throws {Error} If there's an error in making the request, parsing JSON data, or if the API responds with a non-200 status code.
 */
async function getRandomFox() {
	return new Promise((resolve, reject) => {
		const req = https.get(apiUrl, { headers }, (res) => {
			if (res.statusCode !== 200) {
				reject(new Error(`Request failed with status code ${res.statusCode}`));
				return;
			}

			let data = '';

			res.on('data', chunk => {
				data += chunk;
			});

			res.on('end', () => {
				try {
					const foxData = JSON.parse(data);
					resolve(foxData);
				} catch (err) {
					reject(new Error('Error parsing JSON data'));
				}
			});
		});

		req.on('error', err => {
			reject(new Error(`Error making the request: ${err.message}`));
		});

		req.end();
	});
}

module.exports = getRandomFox;