import{s as L,e as r,t as E,a as T,H as M,c as h,b as C,d as H,f as a,g as k,w as Q,l as R,p as W,i as s,h as q,q as J,j as y,n as K,r as X}from"../chunks/scheduler.55267da8.js";import{S as Y,i as Z}from"../chunks/index.102465cc.js";function x(i){let l,o=i[0].post.title+"",n,u,f,v,c=i[0].post.content+"",B,d,N,p,j,w=i[0].post.views+"",O,P,_,A,b=i[1].views+"",S,U,m,z="about",D,F;return{c(){l=r("h3"),n=E(o),u=T(),f=r("div"),v=new M(!1),B=T(),d=r("p"),N=T(),p=r("button"),j=E("counter is "),O=E(w),P=T(),_=r("button"),A=E("counter2 is "),S=E(b),U=T(),m=r("a"),m.textContent=z,this.h()},l(t){l=h(t,"H3",{});var e=C(l);n=H(e,o),e.forEach(a),u=k(t),f=h(t,"DIV",{});var G=C(f);v=Q(G,!1),G.forEach(a),B=k(t),d=h(t,"P",{}),C(d).forEach(a),N=k(t),p=h(t,"BUTTON",{});var I=C(p);j=H(I,"counter is "),O=H(I,w),I.forEach(a),P=k(t),_=h(t,"BUTTON",{});var V=C(_);A=H(V,"counter2 is "),S=H(V,b),V.forEach(a),U=k(t),m=h(t,"A",{href:!0,"data-svelte-h":!0}),R(m)!=="svelte-pmt1op"&&(m.textContent=z),this.h()},h(){v.a=null,W(m,"href","/about")},m(t,e){s(t,l,e),q(l,n),s(t,u,e),s(t,f,e),v.m(c,f),s(t,B,e),s(t,d,e),s(t,N,e),s(t,p,e),q(p,j),q(p,O),s(t,P,e),s(t,_,e),q(_,A),q(_,S),s(t,U,e),s(t,m,e),D||(F=[J(p,"click",i[2]),J(_,"click",i[3])],D=!0)},p(t,[e]){e&1&&o!==(o=t[0].post.title+"")&&y(n,o),e&1&&c!==(c=t[0].post.content+"")&&v.p(c),e&1&&w!==(w=t[0].post.views+"")&&y(O,w),e&2&&b!==(b=t[1].views+"")&&y(S,b)},i:K,o:K,d(t){t&&(a(l),a(u),a(f),a(B),a(d),a(N),a(p),a(P),a(_),a(U),a(m)),D=!1,X(F)}}}function g(i,l,o){let{data:n}=l,u={views:0};function f(){o(0,n.post.views+=1,n)}function v(){o(1,u.views+=1,u)}return i.$$set=c=>{"data"in c&&o(0,n=c.data)},[n,u,f,v]}class et extends Y{constructor(l){super(),Z(this,l,g,x,L,{data:0})}}export{et as component};