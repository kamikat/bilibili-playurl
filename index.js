var get_session_key = require('./module-67')
var qs = require('qs');
var c = require('./module-173')
  , I = c.cwrap("r", null, "string number number number string string number".split(" "))
  , g = c.cwrap("s", null, ["number"])
  , P = []
  , B = c.mD.addFunction(function (b, d) { P.shift().call(null, c.iD(b)) });
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

  if (options.useDash === true || options.buvid3) {
    var buvid3 = options.buvid3 || Math.floor(1E5 * Math.random()).toString(16)
    var key = get_session_key(buvid3 + +new Date)
    return Promise.resolve(`https://api.bilibili.com/pgc/player/web/playurl?avid=&cid=${cid}&qn=${quality}&type=&otype=json&ep_id=&fnver=0&fnval=16&session=${key}`)
  }

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
