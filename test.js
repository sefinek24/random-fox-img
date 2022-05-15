const randomFox = require('./index.js');

(async () => {
	const res = await randomFox();
	console.log(res.data);
})();