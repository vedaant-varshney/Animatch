(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(20),r=c.n(a),i=c(5),o=(c.p,c(11),c(26),c(49)),l=c(50),j=c(51),b=c(52),d=c(53),u=c(54),m=Object(n.createContext)(),O=Object(n.createContext)(),h=Object(n.createContext)(),x=c(10),f=c.n(x),w=c(1);var v=function(e){var t=Object(n.useContext)(m),c=Object(n.useContext)(O),s=Object(i.a)(c,2),a=s[0],r=s[1],o=Object(n.useContext)(h),l=Object(i.a)(o,10),j=(l[0],l[1],l[2]),b=(l[3],l[4]),u=l[5],x=(l[6],l[7],l[8]),f=l[9];return Object(w.jsx)("div",{className:"mb-3 d-flex justify-content-center",children:Object(w.jsx)(d.a,{onClick:function(){x(!0),e.name===e.correct?(r(a+u),b("Your answer was correct, good job!")):(console.log("Your answer was incorrect, the correct answer was "+e.correct),r(0),b("Your answer was incorrect, the correct answer was "+e.correct+". The game is restarting.")),setTimeout((function(){j()}),f)},className:t?"button-override-small d-flex justify-self-center justify-content-center":"button-override d-flex align-items-center justify-content-center justify-self-center",children:Object(w.jsx)("h3",{style:{margin:0},children:e.name})})})};var g=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){window.innerWidth<=1e3&&s(!0),ee()}),[]),window.addEventListener("resize",(function(){window.innerWidth<=1e3?s(!0):s(!1)}));var a=Object(n.useState)([]),r=Object(i.a)(a,2),x=r[0],g=r[1],p=Object(n.useState)([]),N=Object(i.a)(p,2),y=N[0],S=N[1],C=Object(n.useState)(""),k=Object(i.a)(C,2),P=k[0],Y=k[1],I=Object(n.useState)(0),T=Object(i.a)(I,2),W=T[0],E=T[1],M=Object(n.useState)(100),A=Object(i.a)(M,2),J=A[0],L=A[1],R=Object(n.useState)(""),z=Object(i.a)(R,2),B=z[0],G=z[1],_=Object(n.useState)(0),q=Object(i.a)(_,2),D=q[0],F=q[1],H=Object(n.useState)(!1),K=Object(i.a)(H,2),Q=K[0],U=K[1],V=Object(n.useState)(12e3),X=Object(i.a)(V,2),Z=X[0],$=X[1];function ee(){f()({method:"get",url:"https://vedaantv.pythonanywhere.com/generate"}).then((function(e){F(0),function(){var e=12,t=0,c=0;L(100);var n=setInterval((function(){if(!0!==Q){c%2e3===0&&t<6&&(F(t),t++),$(13e3-(c+=100));var s=J;if(s=Math.round(e/12*100),(e-=.1)<=0)return s=0,void clearInterval(n);L(s)}else clearInterval(n)}),100)}(),U(!1),g(e.data.image_strings),Y(e.data.answer),S(e.data.options)})).catch((function(e){console.log(e)}))}return Object(w.jsx)("div",{className:"",children:Object(w.jsx)(h.Provider,{value:[D,F,ee,B,G,J,L,Q,U,Z],children:Object(w.jsx)(O.Provider,{value:[W,E],children:Object(w.jsx)(m.Provider,{value:c,children:Object(w.jsxs)(o.a,{fluid:"lg",className:"c-w change-font mt-5 mb-5",children:[Object(w.jsxs)(l.a,{className:"text-center",children:[Object(w.jsxs)("h1",{children:["Welcome to ",Object(w.jsx)("span",{className:"fw-700 text-blue",children:"AniMatch"})]}),Object(w.jsx)("h3",{children:"Your goal is to correctly identify as many characters as possible. Good Luck!"})]}),Object(w.jsxs)(l.a,{className:" mt-5",children:[Object(w.jsxs)(j.a,{lg:"6",className:"text-center d-flex flex-column align-items-center",children:[Object(w.jsx)("h4",{className:"mb-3",children:"Who is this character?"}),Object(w.jsx)(b.a,{rounded:!0,src:"data:image/jpg;base64,".concat(x[D]),className:c?"mb-4 dims-small":"mb-4 dims-rel"})]}),Object(w.jsxs)(j.a,{lg:"6",className:"mt-3 text-center d-flex flex-column align-items-center ",children:[Object(w.jsxs)("div",{className:"align-self-center d-flex justify-content-center flex-column",children:[Object(w.jsx)(v,{name:y[0],correct:P}),Object(w.jsx)(v,{name:y[1],correct:P}),Object(w.jsx)(v,{name:y[2],correct:P}),Object(w.jsx)(v,{name:y[3],correct:P}),Object(w.jsx)(d.a,{onClick:function(){E(0),G("The application is now restarting. Please wait..."),setTimeout((function(){G("Application Restarted"),ee()}),Z)},className:c?"mt-3 restart-button-small w-100":"mt-3 restart-button w-100",children:Object(w.jsx)("h3",{style:{margin:0},children:"Restart"})}),Object(w.jsx)(u.a,{className:"mt-5 mb-3",now:J}),!Q&&Object(w.jsxs)("h4",{children:["You will currently earn ",Object(w.jsx)("span",{className:"text-blue fw-700",children:J})," points!"]}),Q&&Object(w.jsx)("h4",{children:"Please wait a few moments for the next option to show up!"}),Object(w.jsxs)("h4",{children:["Score: ",Object(w.jsx)("span",{className:"text-blue fw-700",children:W})]})]}),Object(w.jsx)("h3",{className:"mt-3",children:B})]})]})]})})})})})};r.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(g,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.7580618a.chunk.js.map