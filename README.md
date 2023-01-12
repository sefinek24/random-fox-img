<div align="center">
    <h1>🦊 » What is that? « 🦊</h1>
    This package for npm returns a random fox image from <a href="https://api.sefinek.net" target="_blank">API</a>.
    <p>Check better alternative <a href="https://www.npmjs.com/package/@sefinek/random-animals" target="_blank">@sefinek/random-animals</a>.</p>
    <img src="https://cdn.sefinek.net/images/animals/fox/red-fox-in-the-wild-2-1624831.jpg" alt="Random fox image" height="290px">
    <h1>» Star the repo if you liked it «</h1>
</div>

## 😼 » Installation
> **$** npm install random-fox-img

## 🐈 » Usage
### • Async/await example
```js
const randomFox = require('random-fox-img');

(async () => {
    const res = await randomFox();
    console.log(res.data.message);
})();
```

### • Promise example
```js
const randomFox = require('random-fox-img');

randomFox().then(res => console.log(res.data.message));
```

### • Returned object
```json
{
  "success": true,
  "status": 200,
  "category": "animals",
  "endpoint": "fox",
  "message": "https://cdn.sefinek.net/images/animals/fox/red-fox-in-the-wild-2-1624831.jpg"
}
```

## 🤝 » Help
Open new [Issue](https://github.com/sefinek24/random-fox-img/issues/new) on GitHub.

## ⭐ » Thank you
Give a star if you can on [GitHub](https://github.com/sefinek24/random-fox-img) page.