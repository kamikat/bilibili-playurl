(

function(n, t, e) {
        (function() {
            var h = {
              zN: function(e) {
                for (var g = [], h = 0; h < 32 * e.length; h += 8)
                g.push(e[h >>> 5] >>> 24 - h % 32 & 255);
                return g
              },
              nG: function(e) {
                for (var g = [], h = 0; h < e.length; h++)
                g.push((e[h] >>> 4).toString(16)),
                g.push((e[h] & 15).toString(16));
                return g.join("")
              },
              oG: function(e) {
                for (var g = [], h = 0, d = 0; h < e.length; h++,
                     d += 8)
                g[d >>> 5] |= e[h] << 24 - d % 32;
                return g
              },
              vA: function(e, g) {
                return e << g | e >>> 32 - g
              },
              Wx: function(e) {
                if (e.constructor == Number)
                  return t.vA(e, 8) & 16711935 | t.vA(e, 24) & 4278255360;
                for (var g = 0; g < e.length; g++)
                e[g] = t.Wx(e[g]);
                return e
              },
            };
            var t = h;
            var d = {
              Mo: function(e) {
                for (var g = [], h = 0; h < e.length; h++)
                g.push(e.charCodeAt(h) & 255);
                return g
              },
            };
            function g(f, e) {
                f = d.Mo(f);
                e = h.oG(f);
                var l = 8 * f.length;
                f = 1732584193;
                for (var m = -271733879, q = -1732584194, v = 271733878, y = 0; y < e.length; y++)
                    e[y] = (e[y] << 8 | e[y] >>> 24) & 16711935 | (e[y] << 24 | e[y] >>> 8) & 4278255360;
                e[l >>> 5] |= 128 << l % 32;
                e[(l + 64 >>> 9 << 4) + 14] = l;
                for (var l = g.OE, u = g.bF, B = g.cF, A = g.fF, y = 0; y < e.length; y += 16) {
                    var z = f
                      , C = m
                      , n = q
                      , t = v;
                    f = l(f, m, q, v, e[y + 0], 7, -680876936);
                    v = l(v, f, m, q, e[y + 1], 12, -389564586);
                    q = l(q, v, f, m, e[y + 2], 17, 606105819);
                    m = l(m, q, v, f, e[y + 3], 22, -1044525330);
                    f = l(f, m, q, v, e[y + 4], 7, -176418897);
                    v = l(v, f, m, q, e[y + 5], 12, 1200080426);
                    q = l(q, v, f, m, e[y + 6], 17, -1473231341);
                    m = l(m, q, v, f, e[y + 7], 22, -45705983);
                    f = l(f, m, q, v, e[y + 8], 7, 1770035416);
                    v = l(v, f, m, q, e[y + 9], 12, -1958414417);
                    q = l(q, v, f, m, e[y + 10], 17, -42063);
                    m = l(m, q, v, f, e[y + 11], 22, -1990404162);
                    f = l(f, m, q, v, e[y + 12], 7, 1804603682);
                    v = l(v, f, m, q, e[y + 13], 12, -40341101);
                    q = l(q, v, f, m, e[y + 14], 17, -1502002290);
                    m = l(m, q, v, f, e[y + 15], 22, 1236535329);
                    f = u(f, m, q, v, e[y + 1], 5, -165796510);
                    v = u(v, f, m, q, e[y + 6], 9, -1069501632);
                    q = u(q, v, f, m, e[y + 11], 14, 643717713);
                    m = u(m, q, v, f, e[y + 0], 20, -373897302);
                    f = u(f, m, q, v, e[y + 5], 5, -701558691);
                    v = u(v, f, m, q, e[y + 10], 9, 38016083);
                    q = u(q, v, f, m, e[y + 15], 14, -660478335);
                    m = u(m, q, v, f, e[y + 4], 20, -405537848);
                    f = u(f, m, q, v, e[y + 9], 5, 568446438);
                    v = u(v, f, m, q, e[y + 14], 9, -1019803690);
                    q = u(q, v, f, m, e[y + 3], 14, -187363961);
                    m = u(m, q, v, f, e[y + 8], 20, 1163531501);
                    f = u(f, m, q, v, e[y + 13], 5, -1444681467);
                    v = u(v, f, m, q, e[y + 2], 9, -51403784);
                    q = u(q, v, f, m, e[y + 7], 14, 1735328473);
                    m = u(m, q, v, f, e[y + 12], 20, -1926607734);
                    f = B(f, m, q, v, e[y + 5], 4, -378558);
                    v = B(v, f, m, q, e[y + 8], 11, -2022574463);
                    q = B(q, v, f, m, e[y + 11], 16, 1839030562);
                    m = B(m, q, v, f, e[y + 14], 23, -35309556);
                    f = B(f, m, q, v, e[y + 1], 4, -1530992060);
                    v = B(v, f, m, q, e[y + 4], 11, 1272893353);
                    q = B(q, v, f, m, e[y + 7], 16, -155497632);
                    m = B(m, q, v, f, e[y + 10], 23, -1094730640);
                    f = B(f, m, q, v, e[y + 13], 4, 681279174);
                    v = B(v, f, m, q, e[y + 0], 11, -358537222);
                    q = B(q, v, f, m, e[y + 3], 16, -722521979);
                    m = B(m, q, v, f, e[y + 6], 23, 76029189);
                    f = B(f, m, q, v, e[y + 9], 4, -640364487);
                    v = B(v, f, m, q, e[y + 12], 11, -421815835);
                    q = B(q, v, f, m, e[y + 15], 16, 530742520);
                    m = B(m, q, v, f, e[y + 2], 23, -995338651);
                    f = A(f, m, q, v, e[y + 0], 6, -198630844);
                    v = A(v, f, m, q, e[y + 7], 10, 1126891415);
                    q = A(q, v, f, m, e[y + 14], 15, -1416354905);
                    m = A(m, q, v, f, e[y + 5], 21, -57434055);
                    f = A(f, m, q, v, e[y + 12], 6, 1700485571);
                    v = A(v, f, m, q, e[y + 3], 10, -1894986606);
                    q = A(q, v, f, m, e[y + 10], 15, -1051523);
                    m = A(m, q, v, f, e[y + 1], 21, -2054922799);
                    f = A(f, m, q, v, e[y + 8], 6, 1873313359);
                    v = A(v, f, m, q, e[y + 15], 10, -30611744);
                    q = A(q, v, f, m, e[y + 6], 15, -1560198380);
                    m = A(m, q, v, f, e[y + 13], 21, 1309151649);
                    f = A(f, m, q, v, e[y + 4], 6, -145523070);
                    v = A(v, f, m, q, e[y + 11], 10, -1120210379);
                    q = A(q, v, f, m, e[y + 2], 15, 718787259);
                    m = A(m, q, v, f, e[y + 9], 21, -343485551);
                    f = f + z >>> 0;
                    m = m + C >>> 0;
                    q = q + n >>> 0;
                    v = v + t >>> 0
                }
                return h.Wx([f, m, q, v])
            }
            g.OE = function(b, c, d, e, q, h, g) {
                b = b + (c & d | ~c & e) + (q >>> 0) + g;
                return (b << h | b >>> 32 - h) + c
            }
            ;
            g.bF = function(b, c, d, e, q, h, g) {
                b = b + (c & e | d & ~e) + (q >>> 0) + g;
                return (b << h | b >>> 32 - h) + c
            }
            ;
            g.cF = function(b, c, d, e, q, h, g) {
                b = b + (c ^ d ^ e) + (q >>> 0) + g;
                return (b << h | b >>> 32 - h) + c
            }
            ;
            g.fF = function(b, c, d, e, q, h, g) {
                b = b + (d ^ (c | ~e)) + (q >>> 0) + g;
                return (b << h | b >>> 32 - h) + c
            }
            ;
            g.PO = 16;
            g.QO = 16;
            n.exports = function(c, d) {
                if (void 0 === c || null === c)
                    throw Error("Illegal argument " + c);
                c = h.zN(g(c, d));
                return h.nG(c)
            }
        }
        )()
    }
)(module, module.exports, require)
