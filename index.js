var c = require('./vm-159')
  , I = c.cwrap("r", null, "string number number number string string number".split(" "))
  , g = c.cwrap("s", null, ["number"]);
module.exports = function (cid, quality = 0) {
  return new Promise(function (resolve, reject) {
    g(c.XB.addFunction(function (b, e) {
      b = c.TB(b);
      resolve(b);
    }));
    I("interface.bilibili.com/v2/playurl?", true, cid, quality, "", "qn=" + quality, 0)
  });
};
