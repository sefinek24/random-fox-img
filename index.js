const { get } = require('axios');
const { version } = require('./package.json');

module.exports = async () => await get('https://api.skiffybot.xyz/api/v1/animals/fox', { headers: { 'User-Agent': `random-fox/${version} (https://github.com/sefinek24/random-fox)` } });