var qs = require('qs');
var c = require('./vm-159')
  , I = c.cwrap("r", null, "string number number number string string number".split(" "))
  , g = c.cwrap("s", null, ["number"])
  , P = []
  , B = c.XB.addFunction(function (b, e) { P.shift().call(null, c.TB(b)) });
g(B);
module.exports = function (cid, options) {
  if ('number' == typeof options) {
    options = {
      quality: parseInt(options)
    };
  } else {
    options = options || {};
  }
  var quality = options.quality || 0
    , season_type = options.season_type || 0
    , domains = [ "interface.bilibili.com/v2/playurl?", "bangumi.bilibili.com/player/web_api/v2/playurl?", "bangumi.bilibili.com/player/web_api/playurl?" ];
  delete options.season_type;
  delete options.quality;
  return new Promise(function (resolve, reject) {
    P.push(resolve);
    I(domains[+!!season_type], true, cid, quality, "", qs.stringify(Object.assign(options, {
      qn: quality
    }, season_type > 0 && {
      module: ['bangumi', 'movie'][season_type - 1],
      season_type: season_type
    })), 0)
  });
};
