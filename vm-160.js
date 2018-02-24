var k = module;
function p() {
    throw Error("setTimeout has not been defined");
}
function g() {
    throw Error("clearTimeout has not been defined");
}
function f(b) {
    if (l === setTimeout)
        return setTimeout(b, 0);
    if ((l === p || !l) && setTimeout)
        return l = setTimeout,
        setTimeout(b, 0);
    try {
        return l(b, 0)
    } catch (I) {
        try {
            return l.call(null, b, 0)
        } catch (D) {
            return l.call(this, b, 0)
        }
    }
}
function h(b) {
    if (n === clearTimeout)
        clearTimeout(b);
    else if (n !== g && n || !clearTimeout)
        try {
            n(b)
        } catch (I) {
            try {
                n.call(null, b)
            } catch (D) {
                n.call(this, b)
            }
        }
    else
        n = clearTimeout,
        clearTimeout(b)
}
function d() {
    u && x && (u = !1,
    x.length ? t = x.concat(t) : z = -1,
    t.length && c())
}
function c() {
    if (!u) {
        var b = f(d);
        u = !0;
        for (var c = t.length; c; ) {
            x = t;
            for (t = []; ++z < c; )
                x && x[z].$r();
            z = -1;
            c = t.length
        }
        x = null;
        u = !1;
        h(b)
    }
}
function b(b, c) {
    this.vG = b;
    this.Rv = c
}
function e() {}
k = k.exports = {};
try {
    var l = "function" === typeof setTimeout ? setTimeout : p
} catch (w) {
    l = p
}
try {
    var n = "function" === typeof clearTimeout ? clearTimeout : g
} catch (w) {
    n = g
}
var t = [], u = !1, x, z = -1;
k.YN = function(d) {
    var e = Array(arguments.length - 1);
    if (1 < arguments.length)
        for (var g = 1; g < arguments.length; g++)
            e[g - 1] = arguments[g];
    t.push(new b(d,e));
    1 !== t.length || u || f(c)
}
;
b.prototype.$r = function() {
    this.vG.apply(null, this.Rv)
}
;
k.title = "browser";
k.browser = !0;
k.iN = {};
k.OM = [];
k.version = "";
k.PO = {};
k.on = e;
k.addListener = e;
k.once = e;
k.off = e;
k.removeListener = e;
k.Vr = e;
k.rd = e;
k.lO = e;
k.mO = e;
k.RH = function() {
    return []
}
;
k.TM = function() {
    throw Error("process.binding is not supported");
}
;
k.bN = function() {
    return "/"
}
;
k.XM = function() {
    throw Error("process.chdir is not supported");
}
;
k.OO = function() {
    return 0
}
