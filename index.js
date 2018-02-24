var qs = require('qs');
var c = require('./vm-159')
  , I = c.cwrap("r", null, "string number number number string string number".split(" "))
  , g = c.cwrap("s", null, ["number"]);
module.exports = function (cid, options) {
  var domains = ["interface.bilibili.com/v2/playurl?", "bangumi.bilibili.com/player/web_api/v2/playurl?", "bangumi.bilibili.com/player/web_api/playurl?"];
  var quality = 0, season_type;
  if ('number' == typeof options) {
    quality = parseInt(options);
    options = {};
  }
  if (options) {
    quality = options.quality || quality;
    delete options.quality;
    season_type = options.season_type || 0;
    delete options.season_type;
  }
  return new Promise(function (resolve, reject) {
    g(c.XB.addFunction(function (b, e) {
      b = c.TB(b);
      resolve(b);
    }));
    I(domains[+!!season_type], true, cid, quality, "", qs.stringify(Object.assign(options, {
      qn: quality
    }, season_type > 0 && {
      module: ['bangumi', 'movie'][season_type - 1],
      season_type: season_type
    })), 0)
  });
};
