(
function(n){function t(){throw Error("setTimeout has not been defined");}function e(){throw Error("clearTimeout has not been defined");}function g(b){if(l===setTimeout)return setTimeout(b,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(b,0);try{return l(b,0)}catch(B){try{return l.call(null,
b,0)}catch(A){return l.call(this,b,0)}}}function h(b){if(k===clearTimeout)clearTimeout(b);else if(k!==e&&k||!clearTimeout)try{k(b)}catch(B){try{k.call(null,b)}catch(A){k.call(this,b)}}else k=clearTimeout,clearTimeout(b)}function d(){q&&v&&(q=!1,v.length?m=v.concat(m):y=-1,m.length&&c())}function c(){if(!q){var b=g(d);q=!0;for(var c=m.length;c;){v=m;for(m=[];++y<c;)v&&v[y].kt();y=-1;c=m.length}v=null;q=!1;h(b)}}function b(b,c){this.cI=b;this.Aw=c}function f(){}n=n.exports={};try{var l="function"===
typeof setTimeout?setTimeout:t}catch(u){l=t}try{var k="function"===typeof clearTimeout?clearTimeout:e}catch(u){k=e}var m=[],q=!1,v,y=-1;n.jK=function(f){var d=Array(arguments.length-1);if(1<arguments.length)for(var e=1;e<arguments.length;e++)d[e-1]=arguments[e];m.push(new b(f,d));1!==m.length||q||g(c)};b.prototype.kt=function(){this.cI.apply(null,this.Aw)};n.title="browser";n.browser=!0;n.GP={};n.gP=[];n.version="";n.eR={};n.on=f;n.addListener=f;n.once=f;n.off=f;n.removeListener=f;n.et=f;n.Hd=f;n.xQ=
f;n.yQ=f;n.LJ=function(){return[]};n.nP=function(){throw Error("process.binding is not supported");};n.wP=function(){return"/"};n.sP=function(){throw Error("process.chdir is not supported");};n.cR=function(){return 0}}
)(module, module.exports, require)