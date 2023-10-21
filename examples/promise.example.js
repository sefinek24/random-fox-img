const getRandomFox = require('../index.js');

getRandomFox().then(data => console.log(data));
getRandomFox().then(console.log); // or shorter

// Use data.message to get the image URL