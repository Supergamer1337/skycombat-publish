var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,r=(t,n,s)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,o=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&r(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&r(e,n,t[n]);return e},c=(e,s)=>t(e,n(s));import{S as i,i as u,s as f,e as p,t as m,c as $,a as h,b as d,d as y,f as v,g,h as b,n as w,j as E,k,l as D,m as x,o as I,p as P,q as V,r as T,u as A,v as N,w as B,x as M,y as j,z as O,A as R,B as z,C,D as U,E as S,F as L,G as K,H as q,I as F,J as W,K as G,L as H,M as J,N as Q,O as X,P as Y,Q as Z,R as _,T as ee,U as te,V as ne,W as se,X as ae}from"./vendor.d4213d13.js";function le(e){let t,n,s;return{c(){t=p("div"),n=p("p"),s=m("B"),this.h()},l(e){t=$(e,"DIV",{class:!0});var a=h(t);n=$(a,"P",{class:!0});var l=h(n);s=d(l,"B"),l.forEach(y),a.forEach(y),this.h()},h(){v(n,"class","letter svelte-13vvzvi"),v(t,"class","boost svelte-13vvzvi")},m(e,a){g(e,t,a),b(t,n),b(n,s)},p:w,i:w,o:w,d(e){e&&y(t)}}}class re extends i{constructor(e){super(),u(this,e,null,le,f,{})}}function oe(e){let t,n,s;return{c(){t=p("div"),n=p("p"),s=m("S"),this.h()},l(e){t=$(e,"DIV",{class:!0});var a=h(t);n=$(a,"P",{class:!0});var l=h(n);s=d(l,"S"),l.forEach(y),a.forEach(y),this.h()},h(){v(n,"class","letter svelte-2608bq"),v(t,"class","setback svelte-2608bq")},m(e,a){g(e,t,a),b(t,n),b(n,s)},p:w,i:w,o:w,d(e){e&&y(t)}}}class ce extends i{constructor(e){super(),u(this,e,null,oe,f,{})}}function ie(e){let t,n,s,a,l,r,o,c=e[0]?"Player":"Enemy",i=e[3]&&fe(e),u=e[2]&&pe(e);return{c(){t=p("div"),n=p("p"),s=m(c),a=B(),l=p("div"),i&&i.c(),r=B(),u&&u.c(),this.h()},l(e){t=$(e,"DIV",{class:!0});var o=h(t);n=$(o,"P",{class:!0});var f=h(n);s=d(f,c),f.forEach(y),a=M(o),l=$(o,"DIV",{class:!0});var p=h(l);i&&i.l(p),r=M(p),u&&u.l(p),p.forEach(y),o.forEach(y),this.h()},h(){v(n,"class","name svelte-1ng5n4z"),v(l,"class","extra-dice svelte-1ng5n4z"),v(t,"class","card svelte-1ng5n4z"),j(t,"player",e[0]),j(t,"enemy",e[1])},m(e,c){g(e,t,c),b(t,n),b(n,s),b(t,a),b(t,l),i&&i.m(l,null),b(l,r),u&&u.m(l,null),o=!0},p(e,n){(!o||1&n)&&c!==(c=e[0]?"Player":"Enemy")&&A(s,c),e[3]?i?(i.p(e,n),8&n&&I(i,1)):(i=fe(e),i.c(),I(i,1),i.m(l,r)):i&&(k(),D(i,1,1,(()=>{i=null})),x()),e[2]?u?(u.p(e,n),4&n&&I(u,1)):(u=pe(e),u.c(),I(u,1),u.m(l,null)):u&&(k(),D(u,1,1,(()=>{u=null})),x()),1&n&&j(t,"player",e[0]),2&n&&j(t,"enemy",e[1])},i(e){o||(I(i),I(u),o=!0)},o(e){D(i),D(u),o=!1},d(e){e&&y(t),i&&i.d(),u&&u.d()}}}function ue(e){let t,n,s;return{c(){t=p("div"),n=p("p"),s=m("Next Round"),this.h()},l(e){t=$(e,"DIV",{class:!0});var a=h(t);n=$(a,"P",{});var l=h(n);s=d(l,"Next Round"),l.forEach(y),a.forEach(y),this.h()},h(){v(t,"class","card next-round svelte-1ng5n4z")},m(e,a){g(e,t,a),b(t,n),b(n,s)},p:w,i:w,o:w,d(e){e&&y(t)}}}function fe(e){let t,n,s,a,l;return a=new re({}),{c(){t=p("p"),n=m(e[3]),s=m("x"),P(a.$$.fragment),this.h()},l(l){t=$(l,"P",{class:!0});var r=h(t);n=d(r,e[3]),s=d(r,"x"),V(a.$$.fragment,r),r.forEach(y),this.h()},h(){v(t,"class","dice-container svelte-1ng5n4z")},m(e,r){g(e,t,r),b(t,n),b(t,s),T(a,t,null),l=!0},p(e,t){(!l||8&t)&&A(n,e[3])},i(e){l||(I(a.$$.fragment,e),l=!0)},o(e){D(a.$$.fragment,e),l=!1},d(e){e&&y(t),N(a)}}}function pe(e){let t,n,s,a,l;return a=new ce({}),{c(){t=p("p"),n=m(e[2]),s=m("x"),P(a.$$.fragment),this.h()},l(l){t=$(l,"P",{class:!0});var r=h(t);n=d(r,e[2]),s=d(r,"x"),V(a.$$.fragment,r),r.forEach(y),this.h()},h(){v(t,"class","dice-container svelte-1ng5n4z")},m(e,r){g(e,t,r),b(t,n),b(t,s),T(a,t,null),l=!0},p(e,t){(!l||4&t)&&A(n,e[2])},i(e){l||(I(a.$$.fragment,e),l=!0)},o(e){D(a.$$.fragment,e),l=!1},d(e){e&&y(t),N(a)}}}function me(e){let t,n,s,a;const l=[ue,ie],r=[];function o(e,t){return e[4]?0:1}return t=o(e),n=r[t]=l[t](e),{c(){n.c(),s=E()},l(e){n.l(e),s=E()},m(e,n){r[t].m(e,n),g(e,s,n),a=!0},p(e,[a]){let c=t;t=o(e),t===c?r[t].p(e,a):(k(),D(r[c],1,1,(()=>{r[c]=null})),x(),n=r[t],n?n.p(e,a):(n=r[t]=l[t](e),n.c()),I(n,1),n.m(s.parentNode,s))},i(e){a||(I(n),a=!0)},o(e){D(n),a=!1},d(e){r[t].d(e),e&&y(s)}}}function $e(e,t,n){let{player:s=!1}=t,{enemy:a=!1}=t,{setback:l=0}=t,{boost:r=0}=t,{nextRound:o=!1}=t;return e.$$set=e=>{"player"in e&&n(0,s=e.player),"enemy"in e&&n(1,a=e.enemy),"setback"in e&&n(2,l=e.setback),"boost"in e&&n(3,r=e.boost),"nextRound"in e&&n(4,o=e.nextRound)},[s,a,l,r,o]}class he extends i{constructor(e){super(),u(this,e,$e,me,f,{player:0,enemy:1,setback:2,boost:3,nextRound:4})}}const de=O([]),ye=O([]),ve=O(0),ge=O(0),be=O(0),we=O(0),Ee=O(0),ke=O(0),De=O(0),xe=O(0),Ie=O({boosts:0,setbacks:0,id:void 0}),Pe=R([de,ye],(([e,t],n)=>{let s=[];e.forEach((e=>s.push(c(o({},e.initiative),{type:"player"})))),t.forEach((e=>s.push(c(o({},e.initiative),{type:"enemy"})))),s.sort(je),s=s.map((e=>({type:e.type,boosts:0,setbacks:0}))),n(s)})),Ve=O(1),Te=R([Pe,Ve],(([e,t],n)=>{let s=[...e];s=s.splice(t-1),n(s)})),Ae=R(Te,((e,t)=>{t(e[0])})),Ne=R([Te,be,we,Ee,ke],(([e,t,n,s,a],l)=>{var r,i;let u=[...e];u.shift();let f=u.findIndex((e=>"player"===e.type));"player"===(null==(r=u[f])?void 0:r.type)&&(u[f]=c(o({},u[f]),{boosts:t,setbacks:s}));let p=u.findIndex((e=>"enemy"===e.type));"enemy"===(null==(i=u[p])?void 0:i.type)&&(u[p]=c(o({},u[p]),{boosts:n,setbacks:a})),l(u)})),Be=R([xe,De,Ie],(([e,t,n],s)=>{s({boosts:e+n.boosts,setbacks:t+n.setbacks})})),Me=O(1);function je(e,t){let n=t.success-e.success||t.triumph-e.triumph||t.advantage-e.advantage;return 0===n?"player"===e.type?-1:0:n}function Oe(e,t,n){const s=e.slice();return s[3]=t[n],s[5]=n,s}function Re(e){let t,n;return t=new he({props:{player:"player"===e[0].type,enemy:"enemy"===e[0].type,boost:e[1].boosts,setback:e[1].setbacks}}),{c(){P(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.player="player"===e[0].type),1&n&&(s.enemy="enemy"===e[0].type),2&n&&(s.boost=e[1].boosts),2&n&&(s.setback=e[1].setbacks),t.$set(s)},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function ze(e,t){let n,s,a;return s=new he({props:{player:"player"===t[3].type,enemy:"enemy"===t[3].type,boost:t[3].boosts,setback:t[3].setbacks}}),{key:e,first:null,c(){n=E(),P(s.$$.fragment),this.h()},l(e){n=E(),V(s.$$.fragment,e),this.h()},h(){this.first=n},m(e,t){g(e,n,t),T(s,e,t),a=!0},p(e,n){t=e;const a={};4&n&&(a.player="player"===t[3].type),4&n&&(a.enemy="enemy"===t[3].type),4&n&&(a.boost=t[3].boosts),4&n&&(a.setback=t[3].setbacks),s.$set(a)},i(e){a||(I(s.$$.fragment,e),a=!0)},o(e){D(s.$$.fragment,e),a=!1},d(e){e&&y(n),N(s,e)}}}function Ce(e){let t,n,s,a,l,r,o,c,i,u,f=[],w=new Map,E=e[0]&&Re(e),A=e[2];const j=e=>e[5];for(let p=0;p<A.length;p+=1){let t=Oe(e,A,p),n=j(t);w.set(n,f[p]=ze(n,t))}return i=new he({props:{nextRound:!0}}),{c(){t=p("p"),n=m("Current Turn"),s=B(),E&&E.c(),a=B(),l=p("p"),r=m("Upcoming Turns"),o=B();for(let e=0;e<f.length;e+=1)f[e].c();c=B(),P(i.$$.fragment),this.h()},l(e){t=$(e,"P",{class:!0});var u=h(t);n=d(u,"Current Turn"),u.forEach(y),s=M(e),E&&E.l(e),a=M(e),l=$(e,"P",{class:!0});var p=h(l);r=d(p,"Upcoming Turns"),p.forEach(y),o=M(e);for(let t=0;t<f.length;t+=1)f[t].l(e);c=M(e),V(i.$$.fragment,e),this.h()},h(){v(t,"class","section-header svelte-gjhpsf"),v(l,"class","section-header svelte-gjhpsf")},m(e,p){g(e,t,p),b(t,n),g(e,s,p),E&&E.m(e,p),g(e,a,p),g(e,l,p),b(l,r),g(e,o,p);for(let t=0;t<f.length;t+=1)f[t].m(e,p);g(e,c,p),T(i,e,p),u=!0},p(e,[t]){e[0]?E?(E.p(e,t),1&t&&I(E,1)):(E=Re(e),E.c(),I(E,1),E.m(a.parentNode,a)):E&&(k(),D(E,1,1,(()=>{E=null})),x()),4&t&&(A=e[2],k(),f=z(f,t,j,1,e,A,w,c.parentNode,C,ze,c,Oe),x())},i(e){if(!u){I(E);for(let e=0;e<A.length;e+=1)I(f[e]);I(i.$$.fragment,e),u=!0}},o(e){D(E);for(let t=0;t<f.length;t+=1)D(f[t]);D(i.$$.fragment,e),u=!1},d(e){e&&y(t),e&&y(s),E&&E.d(e),e&&y(a),e&&y(l),e&&y(o);for(let t=0;t<f.length;t+=1)f[t].d(e);e&&y(c),N(i,e)}}}function Ue(e,t,n){let s,a,l;return U(e,Ae,(e=>n(0,s=e))),U(e,Be,(e=>n(1,a=e))),U(e,Ne,(e=>n(2,l=e))),[s,a,l]}class Se extends i{constructor(e){super(),u(this,e,Ue,Ce,f,{})}}function Le(e){let t,n,s,a;return{c(){t=p("button"),n=m(e[2]),this.h()},l(s){t=$(s,"BUTTON",{type:!0,style:!0,class:!0});var a=h(t);n=d(a,e[2]),a.forEach(y),this.h()},h(){v(t,"type",e[4]),S(t,"background-color",e[3]),v(t,"class","svelte-1dbjtig"),j(t,"activeDisable",e[5]),j(t,"small",e[1]),j(t,"big",e[0])},m(l,r){g(l,t,r),b(t,n),s||(a=L(t,"click",e[6]),s=!0)},p(e,[s]){4&s&&A(n,e[2]),16&s&&v(t,"type",e[4]),8&s&&S(t,"background-color",e[3]),32&s&&j(t,"activeDisable",e[5]),2&s&&j(t,"small",e[1]),1&s&&j(t,"big",e[0])},i:w,o:w,d(e){e&&y(t),s=!1,a()}}}function Ke(e,t,n){let{big:s=!1}=t,{small:a=!1}=t,{label:l=""}=t,{color:r=""}=t,{type:o="button"}=t,{activeDisable:c=!1}=t;return e.$$set=e=>{"big"in e&&n(0,s=e.big),"small"in e&&n(1,a=e.small),"label"in e&&n(2,l=e.label),"color"in e&&n(3,r=e.color),"type"in e&&n(4,o=e.type),"activeDisable"in e&&n(5,c=e.activeDisable)},[s,a,l,r,o,c,function(t){K(e,t)}]}class qe extends i{constructor(e){super(),u(this,e,Ke,Le,f,{big:0,small:1,label:2,color:3,type:4,activeDisable:5})}}function Fe(e){let t,n,s,a,l,r,o,c,i,u,f;return r=new Se({}),u=new qe({props:{big:!0,label:"End Turn",color:"var(--other-action-color)"}}),u.$on("click",e[1]),{c(){t=p("div"),n=p("p"),s=m("Current Round: "),a=m(e[0]),l=B(),P(r.$$.fragment),o=B(),c=p("div"),i=B(),P(u.$$.fragment),this.h()},l(f){t=$(f,"DIV",{class:!0});var p=h(t);n=$(p,"P",{class:!0});var m=h(n);s=d(m,"Current Round: "),a=d(m,e[0]),m.forEach(y),l=M(p),V(r.$$.fragment,p),o=M(p),c=$(p,"DIV",{class:!0}),h(c).forEach(y),i=M(p),V(u.$$.fragment,p),p.forEach(y),this.h()},h(){v(n,"class","card-header svelte-332kyh"),v(c,"class","divider svelte-332kyh"),v(t,"class","card c svelte-332kyh")},m(e,p){g(e,t,p),b(t,n),b(n,s),b(n,a),b(t,l),T(r,t,null),b(t,o),b(t,c),b(t,i),T(u,t,null),f=!0},p(e,[t]){(!f||1&t)&&A(a,e[0])},i(e){f||(I(r.$$.fragment,e),I(u.$$.fragment,e),f=!0)},o(e){D(r.$$.fragment,e),D(u.$$.fragment,e),f=!1},d(e){e&&y(t),N(r),N(u)}}}function We(e,t,n){let s,a,l,r,i,u,f,p,m;return U(e,Ae,(e=>n(2,s=e))),U(e,Ie,(e=>n(3,a=e))),U(e,Ve,(e=>n(4,l=e))),U(e,Pe,(e=>n(5,r=e))),U(e,be,(e=>n(6,i=e))),U(e,Ee,(e=>n(7,u=e))),U(e,we,(e=>n(8,f=e))),U(e,ke,(e=>n(9,p=e))),U(e,Me,(e=>n(0,m=e))),[m,function(){"player"===s.type&&de.update((e=>e.map(((e,t)=>t===a.id?c(o({},e),{boost:0,setback:0}):e)))),"enemy"===s.type&&ye.update((e=>e.map(((e,t)=>t===a.id?c(o({},e),{boost:0,setback:0}):e)))),Ie.set({boosts:0,setbacks:0,id:void 0}),l>=r.length?(Ve.set(1),Me.update((e=>e+1))):Ve.update((e=>e+1)),"player"===s.type&&(xe.set(i),De.set(u),be.set(0),Ee.set(0)),"enemy"===s.type&&(xe.set(f),De.set(p),we.set(0),ke.set(0))}]}class Ge extends i{constructor(e){super(),u(this,e,We,Fe,f,{})}}function He(e,t,n){const s=e.slice();return s[2]=t[n],s}function Je(e,t,n){const s=e.slice();return s[2]=t[n],s}function Qe(e){let t,n;return t=new re({}),{c(){P(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function Xe(e){let t,n;return t=new re({}),{c(){P(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function Ye(e){let t,n,s,a,l,r,o,c,i,u,f,w=Array(e[0]),E=[];for(let p=0;p<w.length;p+=1)E[p]=Qe(Je(e,w,p));const P=e=>D(E[e],1,1,(()=>{E[e]=null}));let V=Array(e[1]),T=[];for(let p=0;p<V.length;p+=1)T[p]=Xe(He(e,V,p));const A=e=>D(T[e],1,1,(()=>{T[e]=null}));return{c(){t=p("div"),n=p("p"),s=m("Available Player Boosts:"),a=B(),l=p("div");for(let e=0;e<E.length;e+=1)E[e].c();r=B(),o=p("p"),c=m("Available Enemy Boosts:"),i=B(),u=p("div");for(let e=0;e<T.length;e+=1)T[e].c();this.h()},l(e){t=$(e,"DIV",{class:!0});var f=h(t);n=$(f,"P",{class:!0});var p=h(n);s=d(p,"Available Player Boosts:"),p.forEach(y),a=M(f),l=$(f,"DIV",{class:!0});var m=h(l);for(let t=0;t<E.length;t+=1)E[t].l(m);m.forEach(y),r=M(f),o=$(f,"P",{style:!0,class:!0});var v=h(o);c=d(v,"Available Enemy Boosts:"),v.forEach(y),i=M(f),u=$(f,"DIV",{class:!0});var g=h(u);for(let t=0;t<T.length;t+=1)T[t].l(g);g.forEach(y),f.forEach(y),this.h()},h(){v(n,"class","title svelte-oektas"),v(l,"class","boost-container svelte-oektas"),S(o,"margin-top","1em"),v(o,"class","title svelte-oektas"),v(u,"class","boost-container svelte-oektas"),v(t,"class","card d svelte-oektas")},m(e,p){g(e,t,p),b(t,n),b(n,s),b(t,a),b(t,l);for(let t=0;t<E.length;t+=1)E[t].m(l,null);b(t,r),b(t,o),b(o,c),b(t,i),b(t,u);for(let t=0;t<T.length;t+=1)T[t].m(u,null);f=!0},p(e,[t]){if(1&t){const t=w.length;let n;for(w=Array(e[0]),n=t;n<w.length;n+=1)Je(e,w,n),E[n]?I(E[n],1):(E[n]=Qe(),E[n].c(),I(E[n],1),E[n].m(l,null));for(k(),n=w.length;n<E.length;n+=1)P(n);x()}if(2&t){const t=V.length;let n;for(V=Array(e[1]),n=t;n<V.length;n+=1)He(e,V,n),T[n]?I(T[n],1):(T[n]=Xe(),T[n].c(),I(T[n],1),T[n].m(u,null));for(k(),n=V.length;n<T.length;n+=1)A(n);x()}},i(e){if(!f){for(let e=0;e<w.length;e+=1)I(E[e]);for(let e=0;e<V.length;e+=1)I(T[e]);f=!0}},o(e){E=E.filter(Boolean);for(let t=0;t<E.length;t+=1)D(E[t]);T=T.filter(Boolean);for(let t=0;t<T.length;t+=1)D(T[t]);f=!1},d(e){e&&y(t),q(E,e),q(T,e)}}}function Ze(e,t,n){let s,a;return U(e,ve,(e=>n(0,s=e))),U(e,ge,(e=>n(1,a=e))),[s,a]}class _e extends i{constructor(e){super(),u(this,e,Ze,Ye,f,{})}}function et(e){let t,n,s,a,l,r,o,c,i,u,f,E,k,x,A;return r=new qe({props:{color:"var(--boost-color)",label:"Boost"}}),r.$on("click",e[1]),c=new qe({props:{color:"var(--setback-color)",label:"Setback"}}),c.$on("click",e[2]),x=new qe({props:{color:"var(--boost-color)",label:"Boost"}}),x.$on("click",e[0]),{c(){t=p("div"),n=p("p"),s=m("Next Ally"),a=B(),l=p("div"),P(r.$$.fragment),o=B(),P(c.$$.fragment),i=B(),u=p("p"),f=m("Anyone's Turn"),E=B(),k=p("div"),P(x.$$.fragment),this.h()},l(e){t=$(e,"DIV",{class:!0});var p=h(t);n=$(p,"P",{class:!0});var m=h(n);s=d(m,"Next Ally"),m.forEach(y),a=M(p),l=$(p,"DIV",{class:!0});var v=h(l);V(r.$$.fragment,v),o=M(v),V(c.$$.fragment,v),v.forEach(y),i=M(p),u=$(p,"P",{class:!0,style:!0});var g=h(u);f=d(g,"Anyone's Turn"),g.forEach(y),E=M(p),k=$(p,"DIV",{class:!0});var b=h(k);V(x.$$.fragment,b),b.forEach(y),p.forEach(y),this.h()},h(){v(n,"class","title svelte-39g8gf"),v(l,"class","button-container svelte-39g8gf"),v(u,"class","title svelte-39g8gf"),S(u,"margin-top","1em"),v(k,"class","button-container svelte-39g8gf"),v(t,"class","card b svelte-39g8gf")},m(e,p){g(e,t,p),b(t,n),b(n,s),b(t,a),b(t,l),T(r,l,null),b(l,o),T(c,l,null),b(t,i),b(t,u),b(u,f),b(t,E),b(t,k),T(x,k,null),A=!0},p:w,i(e){A||(I(r.$$.fragment,e),I(c.$$.fragment,e),I(x.$$.fragment,e),A=!0)},o(e){D(r.$$.fragment,e),D(c.$$.fragment,e),D(x.$$.fragment,e),A=!1},d(e){e&&y(t),N(r),N(c),N(x)}}}function tt(e,t,n){let s;return U(e,Ae,(e=>n(3,s=e))),[function(e){if(e.ctrlKey)return"player"===s.type&&ve.update((e=>e-1)),void("enemy"===s.type&&ge.update((e=>e-1)));"player"===s.type&&ve.update((e=>e+1)),"enemy"===s.type&&ge.update((e=>e+1))},function(e){if(e.ctrlKey)return"player"===s.type&&be.update((e=>e-1)),void("enemy"===s.type&&we.update((e=>e-1)));"player"===s.type&&be.update((e=>e+1)),"enemy"===s.type&&we.update((e=>e+1))},function(e){if(e.ctrlKey)return"player"===s.type&&Ee.update((e=>e-1)),void("enemy"===s.type&&ke.update((e=>e-1)));"player"===s.type&&Ee.update((e=>e+1)),"enemy"===s.type&&ke.update((e=>e+1))}]}class nt extends i{constructor(e){super(),u(this,e,tt,et,f,{})}}function st(e){let t,n;return{c(){t=p("p"),n=m("None")},l(e){t=$(e,"P",{});var s=h(t);n=d(s,"None"),s.forEach(y)},m(e,s){g(e,t,s),b(t,n)},d(e){e&&y(t)}}}function at(e){let t,n,s,a,l;return a=new re({}),{c(){t=p("div"),n=m(e[4]),s=m("x"),P(a.$$.fragment),this.h()},l(l){t=$(l,"DIV",{style:!0});var r=h(t);n=d(r,e[4]),s=d(r,"x"),V(a.$$.fragment,r),r.forEach(y),this.h()},h(){S(t,"display","flex"),S(t,"align-items","center")},m(e,r){g(e,t,r),b(t,n),b(t,s),T(a,t,null),l=!0},p(e,t){(!l||16&t)&&A(n,e[4])},i(e){l||(I(a.$$.fragment,e),l=!0)},o(e){D(a.$$.fragment,e),l=!1},d(e){e&&y(t),N(a)}}}function lt(e){let t,n,s,a,l;return a=new ce({}),{c(){t=p("div"),n=m(e[5]),s=m("x"),P(a.$$.fragment),this.h()},l(l){t=$(l,"DIV",{style:!0});var r=h(t);n=d(r,e[5]),s=d(r,"x"),V(a.$$.fragment,r),r.forEach(y),this.h()},h(){S(t,"display","flex"),S(t,"align-items","center")},m(e,r){g(e,t,r),b(t,n),b(t,s),T(a,t,null),l=!0},p(e,t){(!l||32&t)&&A(n,e[5])},i(e){l||(I(a.$$.fragment,e),l=!0)},o(e){D(a.$$.fragment,e),l=!1},d(e){e&&y(t),N(a)}}}function rt(e){let t,n,s,a,l,r,o,c,i,u,f,w,E,O,R,z,C,U,K,q,J,Q,X,Y,Z,_,ee,te,ne,se,ae,le,re,oe,ce;i=new F({props:{icon:W.faMinus}}),w=new F({props:{icon:G.faPlus}}),q=new qe({props:{activeDisable:e[9],small:!0,color:"var(--other-action-color)",label:(e[6]&&"player"===e[8].type||e[7]&&"enemy"===e[8].type)&&e[10].id===e[0]?"Active":"Activate"}}),q.$on("click",e[15]),Q=new qe({props:{small:!0,color:"var(--setback-color)",label:"+Setback"}}),Q.$on("click",e[12]),Y=new qe({props:{small:!0,color:"var(--boost-color)",label:"+Boost"}}),Y.$on("click",e[11]);let ie=!e[4]&&!e[5]&&st(),ue=e[4]>0&&at(e),fe=e[5]>0&&lt(e);return{c(){t=p("div"),n=p("div"),s=p("p"),a=m(e[1]),l=B(),r=p("div"),o=p("div"),c=p("div"),P(i.$$.fragment),u=B(),f=p("div"),P(w.$$.fragment),E=B(),O=p("p"),R=m(e[3]),z=m("/"),C=m(e[2]),U=B(),K=p("div"),P(q.$$.fragment),J=B(),P(Q.$$.fragment),X=B(),P(Y.$$.fragment),Z=B(),_=p("div"),ee=p("p"),te=m("Current Dice:"),ne=B(),se=p("div"),ie&&ie.c(),ae=B(),ue&&ue.c(),le=B(),fe&&fe.c(),this.h()},l(p){t=$(p,"DIV",{class:!0});var m=h(t);n=$(m,"DIV",{style:!0,class:!0});var v=h(n);s=$(v,"P",{class:!0});var g=h(s);a=d(g,e[1]),g.forEach(y),l=M(v),r=$(v,"DIV",{class:!0});var b=h(r);o=$(b,"DIV",{class:!0});var k=h(o);c=$(k,"DIV",{class:!0});var D=h(c);V(i.$$.fragment,D),D.forEach(y),u=M(k),f=$(k,"DIV",{class:!0});var x=h(f);V(w.$$.fragment,x),x.forEach(y),k.forEach(y),E=M(b),O=$(b,"P",{class:!0});var I=h(O);R=d(I,e[3]),z=d(I,"/"),C=d(I,e[2]),I.forEach(y),b.forEach(y),v.forEach(y),U=M(m),K=$(m,"DIV",{class:!0});var P=h(K);V(q.$$.fragment,P),J=M(P),V(Q.$$.fragment,P),X=M(P),V(Y.$$.fragment,P),P.forEach(y),Z=M(m),_=$(m,"DIV",{class:!0});var T=h(_);ee=$(T,"P",{class:!0});var A=h(ee);te=d(A,"Current Dice:"),A.forEach(y),ne=M(T),se=$(T,"DIV",{class:!0});var N=h(se);ie&&ie.l(N),ae=M(N),ue&&ue.l(N),le=M(N),fe&&fe.l(N),N.forEach(y),T.forEach(y),m.forEach(y),this.h()},h(){v(s,"class","main-text svelte-2y8iey"),v(c,"class","svelte-2y8iey"),v(f,"class","svelte-2y8iey"),v(o,"class","icon-container svelte-2y8iey"),v(O,"class","main-text svelte-2y8iey"),v(r,"class","wounds-container svelte-2y8iey"),S(n,"margin-top","0"),v(n,"class","row-container svelte-2y8iey"),v(K,"class","row-container svelte-2y8iey"),v(ee,"class","secondary-text svelte-2y8iey"),v(se,"class","dice-container svelte-2y8iey"),v(_,"class","row-container svelte-2y8iey"),v(t,"class","card svelte-2y8iey"),j(t,"player",e[6]),j(t,"enemy",e[7])},m(p,m){g(p,t,m),b(t,n),b(n,s),b(s,a),b(n,l),b(n,r),b(r,o),b(o,c),T(i,c,null),b(o,u),b(o,f),T(w,f,null),b(r,E),b(r,O),b(O,R),b(O,z),b(O,C),b(t,U),b(t,K),T(q,K,null),b(K,J),T(Q,K,null),b(K,X),T(Y,K,null),b(t,Z),b(t,_),b(_,ee),b(ee,te),b(_,ne),b(_,se),ie&&ie.m(se,null),b(se,ae),ue&&ue.m(se,null),b(se,le),fe&&fe.m(se,null),re=!0,oe||(ce=[L(c,"click",e[14]),L(f,"click",e[13])],oe=!0)},p(e,[n]){(!re||2&n)&&A(a,e[1]),(!re||8&n)&&A(R,e[3]),(!re||4&n)&&A(C,e[2]);const s={};512&n&&(s.activeDisable=e[9]),1473&n&&(s.label=(e[6]&&"player"===e[8].type||e[7]&&"enemy"===e[8].type)&&e[10].id===e[0]?"Active":"Activate"),q.$set(s),e[4]||e[5]?ie&&(ie.d(1),ie=null):ie||(ie=st(),ie.c(),ie.m(se,ae)),e[4]>0?ue?(ue.p(e,n),16&n&&I(ue,1)):(ue=at(e),ue.c(),I(ue,1),ue.m(se,le)):ue&&(k(),D(ue,1,1,(()=>{ue=null})),x()),e[5]>0?fe?(fe.p(e,n),32&n&&I(fe,1)):(fe=lt(e),fe.c(),I(fe,1),fe.m(se,null)):fe&&(k(),D(fe,1,1,(()=>{fe=null})),x()),64&n&&j(t,"player",e[6]),128&n&&j(t,"enemy",e[7])},i(e){re||(I(i.$$.fragment,e),I(w.$$.fragment,e),I(q.$$.fragment,e),I(Q.$$.fragment,e),I(Y.$$.fragment,e),I(ue),I(fe),re=!0)},o(e){D(i.$$.fragment,e),D(w.$$.fragment,e),D(q.$$.fragment,e),D(Q.$$.fragment,e),D(Y.$$.fragment,e),D(ue),D(fe),re=!1},d(e){e&&y(t),N(i),N(w),N(q),N(Q),N(Y),ie&&ie.d(),ue&&ue.d(),fe&&fe.d(),oe=!1,H(ce)}}}function ot(e,t,n){let s,a;U(e,Ae,(e=>n(8,s=e))),U(e,Ie,(e=>n(10,a=e)));let{id:l}=t,{name:r=""}=t,{woundThreshold:o=10}=t,{wounds:c=0}=t,{boostDice:i=0}=t,{setbackDice:u=0}=t,{player:f=!1}=t,{enemy:p=!1}=t,m=!1;return e.$$set=e=>{"id"in e&&n(0,l=e.id),"name"in e&&n(1,r=e.name),"woundThreshold"in e&&n(2,o=e.woundThreshold),"wounds"in e&&n(3,c=e.wounds),"boostDice"in e&&n(4,i=e.boostDice),"setbackDice"in e&&n(5,u=e.setbackDice),"player"in e&&n(6,f=e.player),"enemy"in e&&n(7,p=e.enemy)},e.$$.update=()=>{var t;256&e.$$.dirty&&("player"===(t=s).type&&p&&n(9,m=!0),"player"===t.type&&f&&n(9,m=!1),"enemy"===t.type&&f&&n(9,m=!0),"enemy"===t.type&&p&&n(9,m=!1))},[l,r,o,c,i,u,f,p,s,m,a,function(e){if(e.ctrlKey)return f&&de.update((e=>{let t=e;return t[l].boost-=1,[...t]})),void(p&&ye.update((e=>{let t=e;return t[l].boost-=1,[...t]})));f&&de.update((e=>{let t=e;return t[l].boost+=1,[...t]})),p&&ye.update((e=>{let t=e;return t[l].boost+=1,[...t]}))},function(e){if(e.ctrlKey)return f&&de.update((e=>{let t=e;return t[l].setback-=1,[...t]})),void(p&&ye.update((e=>{let t=e;return t[l].setback-=1,[...t]})));f&&de.update((e=>{let t=e;return t[l].setback+=1,[...t]})),p&&ye.update((e=>{let t=e;return t[l].setback+=1,[...t]}))},function(){f&&de.update((e=>{let t=e;return t[l].wound+=1,[...t]})),p&&ye.update((e=>{let t=e;return t[l].wound+=1,[...t]}))},function(){f&&de.update((e=>{let t=e;return t[l].wound-=1,t[l].wound<0&&t.splice(l,1),[...t]})),p&&ye.update((e=>{let t=e;return t[l].wound-=1,t[l].wound<0&&t.splice(l,1),[...t]}))},function(){if(f&&"player"===s.type||p&&"enemy"===s.type){if(a.id===l)return void Ie.set({boosts:0,setbacks:0,id:void 0});Ie.set({boosts:i,setbacks:u,id:l})}}]}class ct extends i{constructor(e){super(),u(this,e,ot,rt,f,{id:0,name:1,woundThreshold:2,wounds:3,boostDice:4,setbackDice:5,player:6,enemy:7})}}function it(e){let t,n,s,a,l,r,o,c;const i=e[2].default,u=J(i,e,e[1],null);return{c(){t=p("div"),s=B(),a=p("div"),u&&u.c(),this.h()},l(e){t=$(e,"DIV",{class:!0}),h(t).forEach(y),s=M(e),a=$(e,"DIV",{class:!0});var n=h(a);u&&u.l(n),n.forEach(y),this.h()},h(){v(t,"class","background svelte-15t23n3"),v(a,"class","box svelte-15t23n3")},m(n,l){g(n,t,l),g(n,s,l),g(n,a,l),u&&u.m(a,null),r=!0,o||(c=L(t,"click",(function(){Q(e[0])&&e[0].apply(this,arguments)})),o=!0)},p(t,[n]){e=t,u&&u.p&&(!r||2&n)&&X(u,i,e,e[1],n,null,null)},i(e){r||(Y((()=>{n||(n=Z(t,_,{duration:250},!0)),n.run(1)})),I(u,e),Y((()=>{l||(l=Z(a,ee,{y:-100,duration:250},!0)),l.run(1)})),r=!0)},o(e){n||(n=Z(t,_,{duration:250},!1)),n.run(0),D(u,e),l||(l=Z(a,ee,{y:-100,duration:250},!1)),l.run(0),r=!1},d(e){e&&y(t),e&&n&&n.end(),e&&y(s),e&&y(a),u&&u.d(e),e&&l&&l.end(),o=!1,c()}}}function ut(e,t,n){let{$$slots:s={},$$scope:a}=t,{closeMenu:l}=t;return e.$$set=e=>{"closeMenu"in e&&n(0,l=e.closeMenu),"$$scope"in e&&n(1,a=e.$$scope)},[l,a,s]}class ft extends i{constructor(e){super(),u(this,e,ut,it,f,{closeMenu:0})}}function pt(e){let t,n,s,a,l,r,o,c,i,u,f,w,E,k,x,O,R,z,C,U,S,K,q,F,W,G,J,X,Y,Z,_,ee,se,ae,le,re=e[2]?"Player":"Enemy";return Z=new qe({props:{type:"submit",label:"Add",color:e[2]?"var(--player-color)":"var(--enemy-color)"}}),ee=new qe({props:{type:"button",small:!0,label:"Cancel",color:"var(--other-action-color)"}}),ee.$on("click",(function(){Q(e[0])&&e[0].apply(this,arguments)})),{c(){t=p("form"),n=p("p"),s=m("Add New "),a=m(re),l=B(),r=p("input"),o=B(),c=p("input"),i=B(),u=p("div"),f=p("label"),w=p("input"),E=B(),k=p("p"),x=m("Success"),O=B(),R=p("label"),z=p("input"),C=B(),U=p("p"),S=m("Triumph"),K=B(),q=p("label"),F=p("input"),W=B(),G=p("p"),J=m("Advantage"),X=B(),Y=p("div"),P(Z.$$.fragment),_=B(),P(ee.$$.fragment),this.h()},l(e){t=$(e,"FORM",{});var p=h(t);n=$(p,"P",{class:!0});var m=h(n);s=d(m,"Add New "),a=d(m,re),m.forEach(y),l=M(p),r=$(p,"INPUT",{placeholder:!0,class:!0,type:!0}),o=M(p),c=$(p,"INPUT",{placeholder:!0,class:!0,type:!0}),i=M(p),u=$(p,"DIV",{class:!0});var v=h(u);f=$(v,"LABEL",{class:!0});var g=h(f);w=$(g,"INPUT",{class:!0,type:!0}),E=M(g),k=$(g,"P",{});var b=h(k);x=d(b,"Success"),b.forEach(y),g.forEach(y),O=M(v),R=$(v,"LABEL",{class:!0});var D=h(R);z=$(D,"INPUT",{class:!0,type:!0}),C=M(D),U=$(D,"P",{});var I=h(U);S=d(I,"Triumph"),I.forEach(y),D.forEach(y),K=M(v),q=$(v,"LABEL",{class:!0});var P=h(q);F=$(P,"INPUT",{class:!0,type:!0}),W=M(P),G=$(P,"P",{});var T=h(G);J=d(T,"Advantage"),T.forEach(y),P.forEach(y),v.forEach(y),X=M(p),Y=$(p,"DIV",{class:!0});var A=h(Y);V(Z.$$.fragment,A),_=M(A),V(ee.$$.fragment,A),A.forEach(y),p.forEach(y),this.h()},h(){v(n,"class","title svelte-meo2uh"),v(r,"placeholder","Character Name"),v(r,"class","text-input svelte-meo2uh"),v(r,"type","text"),j(r,"player",e[2]),j(r,"enemy",e[1]),v(c,"placeholder","Wounds"),v(c,"class","number-input svelte-meo2uh"),v(c,"type","number"),j(c,"player",e[2]),j(c,"enemy",e[1]),v(w,"class","initiative-input svelte-meo2uh"),v(w,"type","number"),j(w,"player",e[2]),j(w,"enemy",e[1]),v(f,"class","svelte-meo2uh"),v(z,"class","initiative-input svelte-meo2uh"),v(z,"type","number"),j(z,"player",e[2]),j(z,"enemy",e[1]),v(R,"class","svelte-meo2uh"),v(F,"class","initiative-input svelte-meo2uh"),v(F,"type","number"),j(F,"player",e[2]),j(F,"enemy",e[1]),v(q,"class","svelte-meo2uh"),v(u,"class","initiative svelte-meo2uh"),v(Y,"class","button-container svelte-meo2uh")},m(p,m){g(p,t,m),b(t,n),b(n,s),b(n,a),b(t,l),b(t,r),e[10](r),te(r,e[3]),b(t,o),b(t,c),te(c,e[4]),b(t,i),b(t,u),b(u,f),b(f,w),te(w,e[5]),b(f,E),b(f,k),b(k,x),b(u,O),b(u,R),b(R,z),te(z,e[6]),b(R,C),b(R,U),b(U,S),b(u,K),b(u,q),b(q,F),te(F,e[7]),b(q,W),b(q,G),b(G,J),b(t,X),b(t,Y),T(Z,Y,null),b(Y,_),T(ee,Y,null),se=!0,ae||(le=[L(r,"input",e[11]),L(c,"input",e[12]),L(w,"input",e[13]),L(z,"input",e[14]),L(F,"input",e[15]),L(t,"submit",e[9])],ae=!0)},p(t,[n]){e=t,(!se||4&n)&&re!==(re=e[2]?"Player":"Enemy")&&A(a,re),8&n&&r.value!==e[3]&&te(r,e[3]),4&n&&j(r,"player",e[2]),2&n&&j(r,"enemy",e[1]),16&n&&ne(c.value)!==e[4]&&te(c,e[4]),4&n&&j(c,"player",e[2]),2&n&&j(c,"enemy",e[1]),32&n&&ne(w.value)!==e[5]&&te(w,e[5]),4&n&&j(w,"player",e[2]),2&n&&j(w,"enemy",e[1]),64&n&&ne(z.value)!==e[6]&&te(z,e[6]),4&n&&j(z,"player",e[2]),2&n&&j(z,"enemy",e[1]),128&n&&ne(F.value)!==e[7]&&te(F,e[7]),4&n&&j(F,"player",e[2]),2&n&&j(F,"enemy",e[1]);const s={};4&n&&(s.color=e[2]?"var(--player-color)":"var(--enemy-color)"),Z.$set(s)},i(e){se||(I(Z.$$.fragment,e),I(ee.$$.fragment,e),se=!0)},o(e){D(Z.$$.fragment,e),D(ee.$$.fragment,e),se=!1},d(n){n&&y(t),e[10](null),N(Z),N(ee),ae=!1,H(le)}}}function mt(e,t,n){let s,{closeMenu:a}=t,{enemy:l=!1}=t,{player:r=!1}=t,o="",c="",i=0,u=0,f=0;return se((()=>{s.focus()})),e.$$set=e=>{"closeMenu"in e&&n(0,a=e.closeMenu),"enemy"in e&&n(1,l=e.enemy),"player"in e&&n(2,r=e.player)},[a,l,r,o,c,i,u,f,s,function(e){e.preventDefault(),r&&de.update((e=>[...e,{name:o,woundThreshold:c,wound:0,boost:0,setback:0,initiative:{success:i,triumph:u,advantage:f}}])),l&&ye.update((e=>[...e,{name:o,woundThreshold:c,wound:0,boost:0,setback:0,initiative:{success:i,triumph:u,advantage:f}}])),a()},function(e){ae[e?"unshift":"push"]((()=>{s=e,n(8,s)}))},function(){o=this.value,n(3,o)},function(){c=ne(this.value),n(4,c)},function(){i=ne(this.value),n(5,i)},function(){u=ne(this.value),n(6,u)},function(){f=ne(this.value),n(7,f)}]}class $t extends i{constructor(e){super(),u(this,e,mt,pt,f,{closeMenu:0,enemy:1,player:2})}}function ht(e,t,n){const s=e.slice();return s[6]=t[n],s[8]=n,s}function dt(e,t,n){const s=e.slice();return s[9]=t[n],s[8]=n,s}function yt(e,t){let n,s,a;return s=new ct({props:{player:!0,id:t[8],name:t[9].name,woundThreshold:t[9].woundThreshold,wounds:t[9].wound,boostDice:t[9].boost,setbackDice:t[9].setback}}),{key:e,first:null,c(){n=E(),P(s.$$.fragment),this.h()},l(e){n=E(),V(s.$$.fragment,e),this.h()},h(){this.first=n},m(e,t){g(e,n,t),T(s,e,t),a=!0},p(e,n){t=e;const a={};4&n&&(a.id=t[8]),4&n&&(a.name=t[9].name),4&n&&(a.woundThreshold=t[9].woundThreshold),4&n&&(a.wounds=t[9].wound),4&n&&(a.boostDice=t[9].boost),4&n&&(a.setbackDice=t[9].setback),s.$set(a)},i(e){a||(I(s.$$.fragment,e),a=!0)},o(e){D(s.$$.fragment,e),a=!1},d(e){e&&y(n),N(s,e)}}}function vt(e){let t,n;return t=new ct({props:{enemy:!0,id:e[8],name:e[6].name,woundThreshold:e[6].woundThreshold,wounds:e[6].wound,boostDice:e[6].boost,setbackDice:e[6].setback}}),{c(){P(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},p(e,n){const s={};8&n&&(s.name=e[6].name),8&n&&(s.woundThreshold=e[6].woundThreshold),8&n&&(s.wounds=e[6].wound),8&n&&(s.boostDice=e[6].boost),8&n&&(s.setbackDice=e[6].setback),t.$set(s)},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function gt(e){let t,n;return t=new ft({props:{closeMenu:e[4],$$slots:{default:[bt]},$$scope:{ctx:e}}}),{c(){P(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},p(e,n){const s={};2048&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function bt(e){let t,n;return t=new $t({props:{player:!0,closeMenu:e[4]}}),{c(){P(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},p:w,i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function wt(e){let t,n;return t=new ft({props:{closeMenu:e[5],$$slots:{default:[Et]},$$scope:{ctx:e}}}),{c(){P(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},p(e,n){const s={};2048&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function Et(e){let t,n;return t=new $t({props:{enemy:!0,closeMenu:e[5]}}),{c(){P(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},p:w,i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function kt(e){let t,n,s,a,l,r,o,c,i,u,f,w,A,j,O,R,U,K,W,J,Q,X,Y,Z,_=[],ee=new Map;o=new F({props:{icon:G.faPlus}});let te=e[2];const ne=e=>e[8];for(let p=0;p<te.length;p+=1){let t=dt(e,te,p),n=ne(t);ee.set(n,_[p]=yt(n,t))}R=new F({props:{icon:G.faPlus}});let se=e[3],ae=[];for(let p=0;p<se.length;p+=1)ae[p]=vt(ht(e,se,p));const le=e=>D(ae[e],1,1,(()=>{ae[e]=null}));let re=e[0]&&gt(e),oe=e[1]&&wt(e);return{c(){t=p("div"),n=p("div"),s=p("p"),a=m("Players"),l=B(),r=p("div"),P(o.$$.fragment),c=B(),i=p("div");for(let e=0;e<_.length;e+=1)_[e].c();u=B(),f=p("div"),w=p("p"),A=m("Enemies"),j=B(),O=p("div"),P(R.$$.fragment),U=B(),K=p("div");for(let e=0;e<ae.length;e+=1)ae[e].c();W=B(),re&&re.c(),J=B(),oe&&oe.c(),Q=E(),this.h()},l(e){t=$(e,"DIV",{class:!0});var p=h(t);n=$(p,"DIV",{class:!0});var m=h(n);s=$(m,"P",{class:!0});var v=h(s);a=d(v,"Players"),v.forEach(y),l=M(m),r=$(m,"DIV",{});var g=h(r);V(o.$$.fragment,g),g.forEach(y),m.forEach(y),c=M(p),i=$(p,"DIV",{class:!0});var b=h(i);for(let t=0;t<_.length;t+=1)_[t].l(b);b.forEach(y),u=M(p),f=$(p,"DIV",{class:!0,style:!0});var k=h(f);w=$(k,"P",{class:!0});var D=h(w);A=d(D,"Enemies"),D.forEach(y),j=M(k),O=$(k,"DIV",{});var x=h(O);V(R.$$.fragment,x),x.forEach(y),k.forEach(y),U=M(p),K=$(p,"DIV",{class:!0});var I=h(K);for(let t=0;t<ae.length;t+=1)ae[t].l(I);I.forEach(y),p.forEach(y),W=M(e),re&&re.l(e),J=M(e),oe&&oe.l(e),Q=E(),this.h()},h(){v(s,"class","section-header svelte-1l9aex6"),v(n,"class","header-container svelte-1l9aex6"),v(i,"class","char-container svelte-1l9aex6"),v(w,"class","section-header svelte-1l9aex6"),v(f,"class","header-container svelte-1l9aex6"),S(f,"margin-top","2em"),v(K,"class","char-container svelte-1l9aex6"),v(t,"class","card a svelte-1l9aex6")},m(p,m){g(p,t,m),b(t,n),b(n,s),b(s,a),b(n,l),b(n,r),T(o,r,null),b(t,c),b(t,i);for(let e=0;e<_.length;e+=1)_[e].m(i,null);b(t,u),b(t,f),b(f,w),b(w,A),b(f,j),b(f,O),T(R,O,null),b(t,U),b(t,K);for(let e=0;e<ae.length;e+=1)ae[e].m(K,null);g(p,W,m),re&&re.m(p,m),g(p,J,m),oe&&oe.m(p,m),g(p,Q,m),X=!0,Y||(Z=[L(r,"click",e[4]),L(O,"click",e[5])],Y=!0)},p(e,[t]){if(4&t&&(te=e[2],k(),_=z(_,t,ne,1,e,te,ee,i,C,yt,null,dt),x()),8&t){let n;for(se=e[3],n=0;n<se.length;n+=1){const s=ht(e,se,n);ae[n]?(ae[n].p(s,t),I(ae[n],1)):(ae[n]=vt(s),ae[n].c(),I(ae[n],1),ae[n].m(K,null))}for(k(),n=se.length;n<ae.length;n+=1)le(n);x()}e[0]?re?(re.p(e,t),1&t&&I(re,1)):(re=gt(e),re.c(),I(re,1),re.m(J.parentNode,J)):re&&(k(),D(re,1,1,(()=>{re=null})),x()),e[1]?oe?(oe.p(e,t),2&t&&I(oe,1)):(oe=wt(e),oe.c(),I(oe,1),oe.m(Q.parentNode,Q)):oe&&(k(),D(oe,1,1,(()=>{oe=null})),x())},i(e){if(!X){I(o.$$.fragment,e);for(let e=0;e<te.length;e+=1)I(_[e]);I(R.$$.fragment,e);for(let e=0;e<se.length;e+=1)I(ae[e]);I(re),I(oe),X=!0}},o(e){D(o.$$.fragment,e);for(let t=0;t<_.length;t+=1)D(_[t]);D(R.$$.fragment,e),ae=ae.filter(Boolean);for(let t=0;t<ae.length;t+=1)D(ae[t]);D(re),D(oe),X=!1},d(e){e&&y(t),N(o);for(let t=0;t<_.length;t+=1)_[t].d();N(R),q(ae,e),e&&y(W),re&&re.d(e),e&&y(J),oe&&oe.d(e),e&&y(Q),Y=!1,H(Z)}}}function Dt(e,t,n){let s,a;U(e,de,(e=>n(2,s=e))),U(e,ye,(e=>n(3,a=e)));let l=!1,r=!1;return[l,r,s,a,function(){n(0,l=!l)},function(){n(1,r=!r)}]}class xt extends i{constructor(e){super(),u(this,e,Dt,kt,f,{})}}function It(e){let t,n,s,a,l,r,o,c,i;return n=new xt({}),a=new nt({}),r=new _e({}),c=new Ge({}),{c(){t=p("div"),P(n.$$.fragment),s=B(),P(a.$$.fragment),l=B(),P(r.$$.fragment),o=B(),P(c.$$.fragment),this.h()},l(e){t=$(e,"DIV",{class:!0});var i=h(t);V(n.$$.fragment,i),s=M(i),V(a.$$.fragment,i),l=M(i),V(r.$$.fragment,i),o=M(i),V(c.$$.fragment,i),i.forEach(y),this.h()},h(){v(t,"class","container svelte-z4aijy")},m(e,u){g(e,t,u),T(n,t,null),b(t,s),T(a,t,null),b(t,l),T(r,t,null),b(t,o),T(c,t,null),i=!0},p:w,i(e){i||(I(n.$$.fragment,e),I(a.$$.fragment,e),I(r.$$.fragment,e),I(c.$$.fragment,e),i=!0)},o(e){D(n.$$.fragment,e),D(a.$$.fragment,e),D(r.$$.fragment,e),D(c.$$.fragment,e),i=!1},d(e){e&&y(t),N(n),N(a),N(r),N(c)}}}new class extends i{constructor(e){super(),u(this,e,null,It,f,{})}}({target:document.body,props:{name:"world"}});
