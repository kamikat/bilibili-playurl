# bilibili-playurl

Generate urls like <https://interface.bilibili.com/v2/playurl?cid=...&quality=...> to request video `durl`s from.

## Usage

```javascript
var resolveCid = require('bilibili-playurl');

resolveCid(32515942).then(function (url) {
  console.log(url);
});

resolveCid(32135110, { season_type: 1, quality: 80 }).then(function (url) {
  console.log(url);
});
```

## License

(The MIT License)
