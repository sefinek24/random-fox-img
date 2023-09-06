const getRandomFox = require('../index.js');

(async () => {
	console.time('getRandomFox');

	const data = await getRandomFox();
	console.log(data); // Use data.message to get the image URL

	console.timeEnd('getRandomFox');
})();