var je=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var ut=je((ft,H)=>{(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function a(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(l){if(l.ep)return;l.ep=!0;const s=a(l);fetch(l.href,s)}})();function G(){}function Te(e){return e()}function _e(){return Object.create(null)}function j(e){e.forEach(Te)}function Se(e){return typeof e=="function"}function ze(e,n){return e!=e?n==n:e!==n||e&&typeof e=="object"||typeof e=="function"}function Ue(e){return Object.keys(e).length===0}function Q(e){return e??""}function F(e,n){e.appendChild(n)}function se(e,n,a){e.insertBefore(n,a||null)}function ee(e){e.parentNode&&e.parentNode.removeChild(e)}function pe(e,n){for(let a=0;a<e.length;a+=1)e[a]&&e[a].d(n)}function A(e){return document.createElement(e)}function ce(e){return document.createTextNode(e)}function X(){return ce(" ")}function q(e,n,a,o){return e.addEventListener(n,a,o),()=>e.removeEventListener(n,a,o)}function P(e,n,a){a==null?e.removeAttribute(n):e.getAttribute(n)!==a&&e.setAttribute(n,a)}function Ve(e){return Array.from(e.childNodes)}function Ze(e,n){n=""+n,e.data!==n&&(e.data=n)}let ue;function Y(e){ue=e}const V=[],ye=[];let Z=[];const be=[],qe=Promise.resolve();let oe=!1;function Xe(){oe||(oe=!0,qe.then(Fe))}function ie(e){Z.push(e)}const le=new Set;let U=0;function Fe(){if(U!==0)return;const e=ue;do{try{for(;U<V.length;){const n=V[U];U++,Y(n),Ye(n.$$)}}catch(n){throw V.length=0,U=0,n}for(Y(null),V.length=0,U=0;ye.length;)ye.pop()();for(let n=0;n<Z.length;n+=1){const a=Z[n];le.has(a)||(le.add(a),a())}Z.length=0}while(V.length);for(;be.length;)be.pop()();oe=!1,le.clear(),Y(e)}function Ye(e){if(e.fragment!==null){e.update(),j(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(ie)}}function Ge(e){const n=[],a=[];Z.forEach(o=>e.indexOf(o)===-1?n.push(o):a.push(o)),a.forEach(o=>o()),Z=n}const He=new Set;function Ke(e,n){e&&e.i&&(He.delete(e),e.i(n))}function Je(e,n,a,o){const{fragment:l,after_update:s}=e.$$;l&&l.m(n,a),o||ie(()=>{const u=e.$$.on_mount.map(Te).filter(Se);e.$$.on_destroy?e.$$.on_destroy.push(...u):j(u),e.$$.on_mount=[]}),s.forEach(ie)}function Qe(e,n){const a=e.$$;a.fragment!==null&&(Ge(a.after_update),j(a.on_destroy),a.fragment&&a.fragment.d(n),a.on_destroy=a.fragment=null,a.ctx=[])}function et(e,n){e.$$.dirty[0]===-1&&(V.push(e),Xe(),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function tt(e,n,a,o,l,s,u,I=[-1]){const p=ue;Y(e);const i=e.$$={fragment:null,ctx:[],props:s,update:G,not_equal:l,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(p?p.$$.context:[])),callbacks:_e(),dirty:I,skip_bound:!1,root:n.target||p.$$.root};u&&u(i.root);let C=!1;if(i.ctx=a?a(e,n.props||{},(T,L,...v)=>{const W=v.length?v[0]:L;return i.ctx&&l(i.ctx[T],i.ctx[T]=W)&&(!i.skip_bound&&i.bound[T]&&i.bound[T](W),C&&et(e,T)),L}):[],i.update(),C=!0,j(i.before_update),i.fragment=o?o(i.ctx):!1,n.target){if(n.hydrate){const T=Ve(n.target);i.fragment&&i.fragment.l(T),T.forEach(ee)}else i.fragment&&i.fragment.c();n.intro&&Ke(e.$$.fragment),Je(e,n.target,n.anchor,n.customElement),Fe()}Y(p)}class nt{$destroy(){Qe(this,1),this.$destroy=G}$on(n,a){if(!Se(a))return G;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(a),()=>{const l=o.indexOf(a);l!==-1&&o.splice(l,1)}}$set(n){this.$$set&&!Ue(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}var H={};(function e(n,a,o,l){var s=!!(n.Worker&&n.Blob&&n.Promise&&n.OffscreenCanvas&&n.OffscreenCanvasRenderingContext2D&&n.HTMLCanvasElement&&n.HTMLCanvasElement.prototype.transferControlToOffscreen&&n.URL&&n.URL.createObjectURL);function u(){}function I(r){var t=a.exports.Promise,g=t!==void 0?t:n.Promise;return typeof g=="function"?new g(r):(r(u,u),null)}var p=function(){var r=Math.floor(16.666666666666668),t,g,f={},b=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(t=function(_){var h=Math.random();return f[h]=requestAnimationFrame(function m(k){b===k||b+r-1<k?(b=k,delete f[h],_()):f[h]=requestAnimationFrame(m)}),h},g=function(_){f[_]&&cancelAnimationFrame(f[_])}):(t=function(_){return setTimeout(_,r)},g=function(_){return clearTimeout(_)}),{frame:t,cancel:g}}(),i=function(){var r,t,g={};function f(b){function _(h,m){b.postMessage({options:h||{},callback:m})}b.init=function(m){var k=m.transferControlToOffscreen();b.postMessage({canvas:k},[k])},b.fire=function(m,k,$){if(t)return _(m,null),t;var w=Math.random().toString(36).slice(2);return t=I(function(N){function O(M){M.data.callback===w&&(delete g[w],b.removeEventListener("message",O),t=null,$(),N())}b.addEventListener("message",O),_(m,w),g[w]=O.bind(null,{data:{callback:w}})}),t},b.reset=function(){b.postMessage({reset:!0});for(var m in g)g[m](),delete g[m]}}return function(){if(r)return r;if(!o&&s){var b=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([b])))}catch(_){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",_),null}f(r)}return r}}(),C={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function T(r,t){return t?t(r):r}function L(r){return r!=null}function v(r,t,g){return T(r&&L(r[t])?r[t]:C[t],g)}function W(r){return r<0?0:Math.floor(r)}function R(r,t){return Math.floor(Math.random()*(t-r))+r}function E(r){return parseInt(r,16)}function y(r){return r.map(S)}function S(r){var t=String(r).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:E(t.substring(0,2)),g:E(t.substring(2,4)),b:E(t.substring(4,6))}}function d(r){var t=v(r,"origin",Object);return t.x=v(t,"x",Number),t.y=v(t,"y",Number),t}function x(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function c(r){var t=r.getBoundingClientRect();r.width=t.width,r.height=t.height}function B(r){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=r,t}function Oe(r,t,g,f,b,_,h,m,k){r.save(),r.translate(t,g),r.rotate(_),r.scale(f,b),r.arc(0,0,1,h,m,k),r.restore()}function Ne(r){var t=r.angle*(Math.PI/180),g=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-t+(.5*g-Math.random()*g),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar}}function Pe(r,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var g=t.tick++/t.totalTicks,f=t.x+t.random*t.tiltCos,b=t.y+t.random*t.tiltSin,_=t.wobbleX+t.random*t.tiltCos,h=t.wobbleY+t.random*t.tiltSin;if(r.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-g)+")",r.beginPath(),t.shape==="circle")r.ellipse?r.ellipse(t.x,t.y,Math.abs(_-f)*t.ovalScalar,Math.abs(h-b)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):Oe(r,t.x,t.y,Math.abs(_-f)*t.ovalScalar,Math.abs(h-b)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape==="star")for(var m=Math.PI/2*3,k=4*t.scalar,$=8*t.scalar,w=t.x,N=t.y,O=5,M=Math.PI/O;O--;)w=t.x+Math.cos(m)*$,N=t.y+Math.sin(m)*$,r.lineTo(w,N),m+=M,w=t.x+Math.cos(m)*k,N=t.y+Math.sin(m)*k,r.lineTo(w,N),m+=M;else r.moveTo(Math.floor(t.x),Math.floor(t.y)),r.lineTo(Math.floor(t.wobbleX),Math.floor(b)),r.lineTo(Math.floor(_),Math.floor(h)),r.lineTo(Math.floor(f),Math.floor(t.wobbleY));return r.closePath(),r.fill(),t.tick<t.totalTicks}function Le(r,t,g,f,b){var _=t.slice(),h=r.getContext("2d"),m,k,$=I(function(w){function N(){m=k=null,h.clearRect(0,0,f.width,f.height),b(),w()}function O(){o&&!(f.width===l.width&&f.height===l.height)&&(f.width=r.width=l.width,f.height=r.height=l.height),!f.width&&!f.height&&(g(r),f.width=r.width,f.height=r.height),h.clearRect(0,0,f.width,f.height),_=_.filter(function(M){return Pe(h,M)}),_.length?m=p.frame(O):N()}m=p.frame(O),k=N});return{addFettis:function(w){return _=_.concat(w),$},canvas:r,promise:$,reset:function(){m&&p.cancel(m),k&&k()}}}function de(r,t){var g=!r,f=!!v(t||{},"resize"),b=v(t,"disableForReducedMotion",Boolean),_=s&&!!v(t||{},"useWorker"),h=_?i():null,m=g?x:c,k=r&&h?!!r.__confetti_initialized:!1,$=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,w;function N(M,ne,re){for(var z=v(M,"particleCount",W),K=v(M,"angle",Number),J=v(M,"spread",Number),D=v(M,"startVelocity",Number),Re=v(M,"decay",Number),xe=v(M,"gravity",Number),$e=v(M,"drift",Number),he=v(M,"colors",y),Ae=v(M,"ticks",Number),me=v(M,"shapes"),We=v(M,"scalar"),ge=d(M),ve=z,ae=[],Be=r.width*ge.x,De=r.height*ge.y;ve--;)ae.push(Ne({x:Be,y:De,angle:K,spread:J,startVelocity:D,color:he[ve%he.length],shape:me[R(0,me.length)],ticks:Ae,decay:Re,gravity:xe,drift:$e,scalar:We}));return w?w.addFettis(ae):(w=Le(r,ae,m,ne,re),w.promise)}function O(M){var ne=b||v(M,"disableForReducedMotion",Boolean),re=v(M,"zIndex",Number);if(ne&&$)return I(function(D){D()});g&&w?r=w.canvas:g&&!r&&(r=B(re),document.body.appendChild(r)),f&&!k&&m(r);var z={width:r.width,height:r.height};h&&!k&&h.init(r),k=!0,h&&(r.__confetti_initialized=!0);function K(){if(h){var D={getBoundingClientRect:function(){if(!g)return r.getBoundingClientRect()}};m(D),h.postMessage({resize:{width:D.width,height:D.height}});return}z.width=z.height=null}function J(){w=null,f&&n.removeEventListener("resize",K),g&&r&&(document.body.removeChild(r),r=null,k=!1)}return f&&n.addEventListener("resize",K,!1),h?h.fire(M,z,J):N(M,z,J)}return O.reset=function(){h&&h.reset(),w&&w.reset()},O}var te;function fe(){return te||(te=de(null,{useWorker:!0,resize:!0})),te}a.exports=function(){return fe().apply(this,arguments)},a.exports.reset=function(){fe().reset()},a.exports.create=de})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),H,!1);const rt=H.exports;H.exports.create;const at=["😉","😬","😍","🙃","😂","🤗"],lt=["🍎","🍐","🍊","🍓","🍌","🍇"],ot=["🐶","🐱","🐹","🦁","🐷","🐯"],we=[[...at],[...lt],[...ot]],Me=e=>[...we[e],...we[e]].sort(()=>Math.random()-.5);function ke(e,n,a){const o=e.slice();return o[14]=n[a],o[16]=a,o}function Ce(e,n,a){const o=e.slice();return o[17]=n[a],o[16]=a,o}function Ee(e){let n,a=e[17]+"",o,l,s,u;function I(){return e[8](e[16])}function p(){return e[9](e[16])}return{c(){n=A("span"),o=ce(a),P(n,"class",l=Q(e[0]===e[16]?"is-active":"")+" svelte-3rxdr")},m(i,C){se(i,n,C),F(n,o),s||(u=[q(n,"click",I),q(n,"keydown",p)],s=!0)},p(i,C){e=i,C&1&&l!==(l=Q(e[0]===e[16]?"is-active":"")+" svelte-3rxdr")&&P(n,"class",l)},d(i){i&&ee(n),s=!1,j(u)}}}function Ie(e){let n,a=(e[2].includes(e[16])||e[3].includes(e[14])?e[14]:"?")+"",o,l,s,u;function I(){return e[10](e[16])}function p(){return e[11](e[16])}return{c(){n=A("div"),o=ce(a),l=X(),P(n,"class","carta svelte-3rxdr")},m(i,C){se(i,n,C),F(n,o),F(n,l),s||(u=[q(n,"click",I),q(n,"keydown",p)],s=!0)},p(i,C){e=i,C&14&&a!==(a=(e[2].includes(e[16])||e[3].includes(e[14])?e[14]:"?")+"")&&Ze(o,a)},d(i){i&&ee(n),s=!1,j(u)}}}function it(e){let n,a,o,l,s,u,I,p,i,C,T,L,v,W,R=e[5],E=[];for(let d=0;d<R.length;d+=1)E[d]=Ee(Ce(e,R,d));let y=e[1],S=[];for(let d=0;d<y.length;d+=1)S[d]=Ie(ke(e,y,d));return{c(){n=A("main"),a=A("h1"),a.textContent="Memo",o=X(),l=A("div");for(let d=0;d<E.length;d+=1)E[d].c();s=X(),u=A("div");for(let d=0;d<S.length;d+=1)S[d].c();I=X(),p=A("div"),i=A("h1"),i.textContent="Congratulation 🎉",C=X(),T=A("p"),T.textContent="New game",P(a,"class","svelte-3rxdr"),P(l,"class","tema svelte-3rxdr"),P(u,"class","memo svelte-3rxdr"),P(i,"class","svelte-3rxdr"),P(T,"class","svelte-3rxdr"),P(p,"class",L=Q(e[4]?"newGame":"hidden")+" svelte-3rxdr"),P(n,"class","container svelte-3rxdr")},m(d,x){se(d,n,x),F(n,a),F(n,o),F(n,l);for(let c=0;c<E.length;c+=1)E[c]&&E[c].m(l,null);F(n,s),F(n,u);for(let c=0;c<S.length;c+=1)S[c]&&S[c].m(u,null);F(n,I),F(n,p),F(p,i),F(p,C),F(p,T),v||(W=[q(T,"click",e[12]),q(T,"keydown",e[13])],v=!0)},p(d,[x]){if(x&161){R=d[5];let c;for(c=0;c<R.length;c+=1){const B=Ce(d,R,c);E[c]?E[c].p(B,x):(E[c]=Ee(B),E[c].c(),E[c].m(l,null))}for(;c<E.length;c+=1)E[c].d(1);E.length=R.length}if(x&78){y=d[1];let c;for(c=0;c<y.length;c+=1){const B=ke(d,y,c);S[c]?S[c].p(B,x):(S[c]=Ie(B),S[c].c(),S[c].m(u,null))}for(;c<S.length;c+=1)S[c].d(1);S.length=y.length}x&16&&L!==(L=Q(d[4]?"newGame":"hidden")+" svelte-3rxdr")&&P(p,"class",L)},i:G,o:G,d(d){d&&ee(n),pe(E,d),pe(S,d),v=!1,j(W)}}}function st(e,n,a){const o=["😊","🍎","🦁"];let l=0,s=Me(l),u=[],I=[],p=!1;const i=y=>{u.length>1||I.includes(s[y])||u.includes(y)||(a(2,u=[...u,y]),u.length==2&&(s[u[0]]===s[u[1]]&&a(3,I=[...I,s[y]]),setTimeout(()=>a(2,u=[]),500)),I.length===s.length/2&&(a(4,p=!0),rt()))},C=y=>{a(2,u=[]),a(3,I=[]),a(4,p=!1),a(1,s=Me(y)),a(0,l=y)};return[l,s,u,I,p,o,i,C,y=>C(y),y=>C(y),y=>i(y),y=>i(y),()=>C(l),()=>C(l)]}class ct extends nt{constructor(n){super(),tt(this,n,st,it,ze,{})}}new ct({target:document.getElementById("app")})});export default ut();
