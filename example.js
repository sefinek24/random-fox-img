const randomFox = require('./');

(async () => {
	const res = await randomFox();
	console.log(res.data);
})();