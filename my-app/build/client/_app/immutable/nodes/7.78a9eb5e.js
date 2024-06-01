import{s as Dt,e as k,a as I,t as ut,C as P,c as S,l as W,g as R,b as x,f,d as _t,E as L,p as u,i as g,h as A,q as Vt,v as Xt,F as Zt,n as Ft,D as Et}from"../chunks/scheduler.55267da8.js";import{S as Gt,i as Qt,c as Mt,b as Tt,m as kt,a as rt,t as St,d as At,e as Ut}from"../chunks/index.102465cc.js";import{e as ct}from"../chunks/each.0e52d141.js";import{A as Pt,b as Wt,l as $t,f as Jt}from"../chunks/Axis.859864aa.js";function Lt(e,t){let n,i;if(t===void 0)for(const l of e)l!=null&&(n===void 0?l>=l&&(n=i=l):(n>l&&(n=l),i<l&&(i=l)));else{let l=-1;for(let s of e)(s=t(s,++l,e))!=null&&(n===void 0?s>=s&&(n=i=s):(n>s&&(n=s),i<s&&(i=s)))}return[n,i]}const bt=Math.PI,yt=2*bt,J=1e-6,Kt=yt-J;function Yt(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function Ot(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return Yt;const n=10**t;return function(i){this._+=i[0];for(let l=1,s=i.length;l<s;++l)this._+=Math.round(arguments[l]*n)/n+i[l]}}class te{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?Yt:Ot(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,i,l){this._append`Q${+t},${+n},${this._x1=+i},${this._y1=+l}`}bezierCurveTo(t,n,i,l,s,h){this._append`C${+t},${+n},${+i},${+l},${this._x1=+s},${this._y1=+h}`}arcTo(t,n,i,l,s){if(t=+t,n=+n,i=+i,l=+l,s=+s,s<0)throw new Error(`negative radius: ${s}`);let h=this._x1,c=this._y1,a=i-t,d=l-n,o=h-t,p=c-n,m=o*o+p*p;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(m>J)if(!(Math.abs(p*a-d*o)>J)||!s)this._append`L${this._x1=t},${this._y1=n}`;else{let w=i-h,M=l-c,C=a*a+d*d,b=w*w+M*M,X=Math.sqrt(C),H=Math.sqrt(m),it=s*Math.tan((bt-Math.acos((C+m-b)/(2*X*H)))/2),Y=it/H,N=it/X;Math.abs(Y-1)>J&&this._append`L${t+Y*o},${n+Y*p}`,this._append`A${s},${s},0,0,${+(p*w>o*M)},${this._x1=t+N*a},${this._y1=n+N*d}`}}arc(t,n,i,l,s,h){if(t=+t,n=+n,i=+i,h=!!h,i<0)throw new Error(`negative radius: ${i}`);let c=i*Math.cos(l),a=i*Math.sin(l),d=t+c,o=n+a,p=1^h,m=h?l-s:s-l;this._x1===null?this._append`M${d},${o}`:(Math.abs(this._x1-d)>J||Math.abs(this._y1-o)>J)&&this._append`L${d},${o}`,i&&(m<0&&(m=m%yt+yt),m>Kt?this._append`A${i},${i},0,1,${p},${t-c},${n-a}A${i},${i},0,1,${p},${this._x1=d},${this._y1=o}`:m>J&&this._append`A${i},${i},0,${+(m>=bt)},${p},${this._x1=t+i*Math.cos(s)},${this._y1=n+i*Math.sin(s)}`)}rect(t,n,i,l){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${i=+i}v${+l}h${-i}Z`}toString(){return this._}}function tt(e){return function(){return e}}function ee(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const i=Math.floor(n);if(!(i>=0))throw new RangeError(`invalid digits: ${n}`);t=i}return e},()=>new te(t)}function ne(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function zt(e){this._context=e}zt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function ie(e){return new zt(e)}function le(e){return e[0]}function se(e){return e[1]}function re(e,t){var n=tt(!0),i=null,l=ie,s=null,h=ee(c);e=typeof e=="function"?e:e===void 0?le:tt(e),t=typeof t=="function"?t:t===void 0?se:tt(t);function c(a){var d,o=(a=ne(a)).length,p,m=!1,w;for(i==null&&(s=l(w=h())),d=0;d<=o;++d)!(d<o&&n(p=a[d],d,a))===m&&((m=!m)?s.lineStart():s.lineEnd()),m&&s.point(+e(p,d,a),+t(p,d,a));if(w)return s=null,w+""||null}return c.x=function(a){return arguments.length?(e=typeof a=="function"?a:tt(+a),c):e},c.y=function(a){return arguments.length?(t=typeof a=="function"?a:tt(+a),c):t},c.defined=function(a){return arguments.length?(n=typeof a=="function"?a:tt(!!a),c):n},c.curve=function(a){return arguments.length?(l=a,i!=null&&(s=l(i)),c):l},c.context=function(a){return arguments.length?(a==null?i=s=null:s=l(i=a),c):i},c}function Bt(e){this._context=e}Bt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length;if(n)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),n===2)this._context.lineTo(e[1],t[1]);else for(var i=Ht(e),l=Ht(t),s=0,h=1;h<n;++s,++h)this._context.bezierCurveTo(i[0][s],l[0][s],i[1][s],l[1][s],e[h],t[h]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function Ht(e){var t,n=e.length-1,i,l=new Array(n),s=new Array(n),h=new Array(n);for(l[0]=0,s[0]=2,h[0]=e[0]+2*e[1],t=1;t<n-1;++t)l[t]=1,s[t]=4,h[t]=4*e[t]+2*e[t+1];for(l[n-1]=2,s[n-1]=7,h[n-1]=8*e[n-1]+e[n],t=1;t<n;++t)i=l[t]/s[t-1],s[t]-=i,h[t]-=i*h[t-1];for(l[n-1]=h[n-1]/s[n-1],t=n-2;t>=0;--t)l[t]=(h[t]-l[t+1])/s[t];for(s[n-1]=(e[n]+l[n-1])/2,t=0;t<n-1;++t)s[t]=2*e[t+1]-l[t+1];return[l,s]}function he(e){return new Bt(e)}function Nt(e,t,n){const i=e.slice();return i[13]=t[n],i[15]=n,i}function qt(e,t,n){const i=e.slice();return i[13]=t[n],i[15]=n,i}function jt(e){let t,n,i,l,s,h,c=e[13].toString()+"",a,d;return{c(){t=P("rect"),h=P("text"),a=ut(c),this.h()},l(o){t=L(o,"rect",{fill:!0,x:!0,y:!0,width:!0,height:!0,onclick:!0,onmouseover:!0}),x(t).forEach(f),h=L(o,"text",{class:!0,x:!0,y:!0});var p=x(h);a=_t(p,c),p.forEach(f),this.h()},h(){u(t,"fill","blue"),u(t,"x",0),u(t,"y",n=e[5](e[15])),u(t,"width",i=e[4](e[13])),u(t,"height",l=e[5].bandwidth()),u(t,"onclick","alert("+e[13]+")"),u(t,"onmouseover","alert("+e[13]+")"),u(h,"class","barlabel svelte-8r53nb"),u(h,"x","5"),u(h,"y",d=e[5](e[15])+e[5].bandwidth()*.8)},m(o,p){g(o,t,p),g(o,h,p),A(h,a)},p(o,p){p&32&&n!==(n=o[5](o[15]))&&u(t,"y",n),p&16&&i!==(i=o[4](o[13]))&&u(t,"width",i),p&32&&l!==(l=o[5].bandwidth())&&u(t,"height",l),p&32&&d!==(d=o[5](o[15])+o[5].bandwidth()*.8)&&u(h,"y",d)},i(o){s||Zt(()=>{s=Ut(t,Jt,{x:200,duration:1e3,delay:e[15]*500}),s.start()})},o:Ft,d(o){o&&(f(t),f(h))}}}function It(e){let t,n=ct(e[7]),i=[];for(let l=0;l<n.length;l+=1)i[l]=Rt(Nt(e,n,l));return{c(){for(let l=0;l<i.length;l+=1)i[l].c();t=Et()},l(l){for(let s=0;s<i.length;s+=1)i[s].l(l);t=Et()},m(l,s){for(let h=0;h<i.length;h+=1)i[h]&&i[h].m(l,s);g(l,t,s)},p(l,s){if(s&131){n=ct(l[7]);let h;for(h=0;h<n.length;h+=1){const c=Nt(l,n,h);i[h]?i[h].p(c,s):(i[h]=Rt(c),i[h].c(),i[h].m(t.parentNode,t))}for(;h<i.length;h+=1)i[h].d(1);i.length=n.length}},d(l){l&&f(t),Xt(i,l)}}}function Rt(e){let t,n,i;return{c(){t=P("circle"),this.h()},l(l){t=L(l,"circle",{fill:!0,r:!0,cx:!0,cy:!0}),x(t).forEach(f),this.h()},h(){u(t,"fill","red"),u(t,"r","4"),u(t,"cx",n=e[1](e[13][0])),u(t,"cy",i=e[0](e[13][1]))},m(l,s){g(l,t,s)},p(l,s){s&2&&n!==(n=l[1](l[13][0]))&&u(t,"cx",n),s&1&&i!==(i=l[0](l[13][1]))&&u(t,"cy",i)},d(l){l&&f(t)}}}function ae(e){let t,n='<a href="/">home</a> <a href="/about">about</a>',i,l,s="about",h,c,a="this is the about page.",d,o,p,m,w="charts test",M,C,b="Some charts drawn in SVG +D3",X,H,it="simple barchart",Y,N,D,pt,ht,at,q,V,ot,Z,wt="simple linechart",ft,j,F,E,z,G,dt,B,K,mt,Q,lt,gt,xt,U=ct(e[6]),$=[];for(let r=0;r<U.length;r+=1)$[r]=jt(qt(e,U,r));z=new Pt({props:{innerHeight:e[9],margin:e[8],scale:e[1],position:"bottom"}}),B=new Pt({props:{innerHeight:e[9],margin:e[8],scale:e[0],position:"left"}});let y=e[2]&&It(e);return{c(){t=k("nav"),t.innerHTML=n,i=I(),l=k("h1"),l.textContent=s,h=I(),c=k("p"),c.textContent=a,d=I(),o=k("p"),p=I(),m=k("h1"),m.textContent=w,M=I(),C=k("p"),C.textContent=b,X=I(),H=k("h2"),H.textContent=it,Y=I(),N=k("label"),D=k("input"),pt=ut(`
	visible
`),ht=k("br"),at=I(),q=P("svg"),V=P("rect");for(let r=0;r<$.length;r+=1)$[r].c();ot=I(),Z=k("h2"),Z.textContent=wt,ft=I(),j=P("svg"),F=P("rect"),E=P("g"),Mt(z.$$.fragment),G=P("text"),dt=ut("Timestamp"),Mt(B.$$.fragment),K=P("text"),mt=ut("Temperature"),Q=P("path"),y&&y.c(),this.h()},l(r){t=S(r,"NAV",{"data-svelte-h":!0}),W(t)!=="svelte-xj1woj"&&(t.innerHTML=n),i=R(r),l=S(r,"H1",{"data-svelte-h":!0}),W(l)!=="svelte-t7i5gh"&&(l.textContent=s),h=R(r),c=S(r,"P",{"data-svelte-h":!0}),W(c)!=="svelte-ql1lf9"&&(c.textContent=a),d=R(r),o=S(r,"P",{}),x(o).forEach(f),p=R(r),m=S(r,"H1",{"data-svelte-h":!0}),W(m)!=="svelte-1rmfwjn"&&(m.textContent=w),M=R(r),C=S(r,"P",{"data-svelte-h":!0}),W(C)!=="svelte-uq9uei"&&(C.textContent=b),X=R(r),H=S(r,"H2",{"data-svelte-h":!0}),W(H)!=="svelte-13xep79"&&(H.textContent=it),Y=R(r),N=S(r,"LABEL",{});var _=x(N);D=S(_,"INPUT",{type:!0}),pt=_t(_,`
	visible
`),_.forEach(f),ht=S(r,"BR",{}),at=R(r),q=L(r,"svg",{width:!0,height:!0});var T=x(q);V=L(T,"rect",{width:!0,height:!0,fill:!0}),x(V).forEach(f);for(let vt=0;vt<$.length;vt+=1)$[vt].l(T);T.forEach(f),ot=R(r),Z=S(r,"H2",{"data-svelte-h":!0}),W(Z)!=="svelte-62epsu"&&(Z.textContent=wt),ft=R(r),j=L(r,"svg",{width:!0,height:!0,color:!0});var O=x(j);F=L(O,"rect",{width:!0,height:!0,fill:!0}),x(F).forEach(f),E=L(O,"g",{transform:!0});var v=x(E);Tt(z.$$.fragment,v),G=L(v,"text",{x:!0,y:!0});var st=x(G);dt=_t(st,"Timestamp"),st.forEach(f),Tt(B.$$.fragment,v),K=L(v,"text",{transform:!0});var Ct=x(K);mt=_t(Ct,"Temperature"),Ct.forEach(f),Q=L(v,"path",{d:!0,class:!0}),x(Q).forEach(f),y&&y.l(v),v.forEach(f),O.forEach(f),this.h()},h(){u(D,"type","checkbox"),u(V,"width",et),u(V,"height",nt),u(V,"fill","lightgray"),u(q,"width",et),u(q,"height",nt),u(F,"width",et),u(F,"height",nt),u(F,"fill","lightgray"),u(G,"x",e[10]*.4),u(G,"y",e[9]+35),u(K,"transform",`translate(-28,${e[9]*.6}) rotate(-90)`),u(Q,"d",e[3]),u(Q,"class","svelte-8r53nb"),u(E,"transform",`translate(${e[8].left},${e[8].top})`),u(j,"width",et),u(j,"height",nt),u(j,"color","black")},m(r,_){g(r,t,_),g(r,i,_),g(r,l,_),g(r,h,_),g(r,c,_),g(r,d,_),g(r,o,_),g(r,p,_),g(r,m,_),g(r,M,_),g(r,C,_),g(r,X,_),g(r,H,_),g(r,Y,_),g(r,N,_),A(N,D),D.checked=e[2],A(N,pt),g(r,ht,_),g(r,at,_),g(r,q,_),A(q,V);for(let T=0;T<$.length;T+=1)$[T]&&$[T].m(q,null);g(r,ot,_),g(r,Z,_),g(r,ft,_),g(r,j,_),A(j,F),A(j,E),kt(z,E,null),A(E,G),A(G,dt),kt(B,E,null),A(E,K),A(K,mt),A(E,Q),y&&y.m(E,null),lt=!0,gt||(xt=Vt(D,"change",e[12]),gt=!0)},p(r,[_]){if(_&4&&(D.checked=r[2]),_&112){U=ct(r[6]);let v;for(v=0;v<U.length;v+=1){const st=qt(r,U,v);$[v]?($[v].p(st,_),rt($[v],1)):($[v]=jt(st),$[v].c(),rt($[v],1),$[v].m(q,null))}for(;v<$.length;v+=1)$[v].d(1);$.length=U.length}const T={};_&2&&(T.scale=r[1]),z.$set(T);const O={};_&1&&(O.scale=r[0]),B.$set(O),(!lt||_&8)&&u(Q,"d",r[3]),r[2]?y?y.p(r,_):(y=It(r),y.c(),y.m(E,null)):y&&(y.d(1),y=null)},i(r){if(!lt){for(let _=0;_<U.length;_+=1)rt($[_]);rt(z.$$.fragment,r),rt(B.$$.fragment,r),lt=!0}},o(r){St(z.$$.fragment,r),St(B.$$.fragment,r),lt=!1},d(r){r&&(f(t),f(i),f(l),f(h),f(c),f(d),f(o),f(p),f(m),f(M),f(C),f(X),f(H),f(Y),f(N),f(ht),f(at),f(q),f(ot),f(Z),f(ft),f(j)),Xt($,r),At(z),At(B),y&&y.d(),gt=!1,xt()}}}const et=400,nt=400;function oe(e,t,n){let i,l,s,h,c,{data:a}=t,d=!0,o=[1,2,3,4,3,1],p=[[0,1],[1,2],[2,3],[3,4],[4,3]];const m={top:20,bottom:40,left:40,right:20},w=nt-m.top-m.bottom,M=et-m.left-m.right;function C(){d=this.checked,n(2,d)}return e.$$set=b=>{"data"in b&&n(11,a=b.data)},e.$$.update=()=>{e.$$.dirty&3&&n(3,c=re().curve(he).x(b=>s(b[0])).y(b=>h(b[1]))(p))},n(5,i=Wt().domain(o.map(function(b,X){return X})).range([0,nt]).paddingInner(.1)),n(4,l=$t().domain([0,10]).range([0,et])),n(1,s=$t().domain(Lt(p,b=>b[0])).range([0,M])),n(0,h=$t().domain(Lt(p,b=>b[1])).range([w,0])),[h,s,d,c,l,i,o,p,m,w,M,a,C]}class pe extends Gt{constructor(t){super(),Qt(this,t,oe,ae,Dt,{data:11})}}export{pe as component};