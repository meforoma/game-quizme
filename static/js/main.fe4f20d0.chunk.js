(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(7),s=n.n(c),r=n(2),o=n(1),u=n(10),a=n(8),i=n.n(a),j="https://opentdb.com/api.php",l=function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch("".concat(j).concat(e)).then((function(e){return e.ok?e.json():new Error("".concat(e.status," -- ").concat(e.statusText))})).then((function(e){return e.results}))}("?amount=".concat(e))},b=n(3),d=n(6),h=n(4),O=n(9),f=n.n(O),m=n(0),w=function(e){var t=e.category,n=e.difficulty,c=e.question,s=e.correctAnswer,u=e.incorrectAnswers,a=e.userAnswers,i=e.userClickedCheckme,j=e.setUserAnswers,l=Object(o.useState)([]),O=Object(r.a)(l,2),w=O[0],x=O[1];return Object(o.useEffect)((function(){var e=u.concat(s);x(e.sort())}),[]),Object(m.jsxs)("div",{className:"question",children:[Object(m.jsx)("span",{className:"question__difficulty question__difficulty--".concat(n),children:"Difficulty: ".concat(n)}),Object(m.jsx)("span",{className:"question__category",children:" Category: ".concat(Object(h.decode)(t))}),Object(m.jsx)("div",{className:"question__body",children:Object(m.jsx)("h3",{children:Object(h.decode)(c)})}),Object(m.jsx)("div",{className:"question__answers",children:w.map((function(e){return Object(m.jsx)("div",{className:f()({answer:e,"answer--selected":a[c]===e,"answer--correct":i&&s===e,"answer--incorrect":i&&s!==e&&a[c]===e}),onClick:function(){return j((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(b.a)({},c,e))}))},children:Object(h.decode)(e)},e)}))})]})},x=function(e){var t=e.userQuestionsCount,n=e.restart,c=Object(o.useState)({}),s=Object(r.a)(c,2),a=s[0],j=s[1],b=Object(o.useState)(!1),d=Object(r.a)(b,2),h=d[0],O=d[1],f=Object(o.useState)([]),x=Object(r.a)(f,2),p=x[0],v=x[1];Object(o.useEffect)((function(){l(t).then(v)}),[]);var y=p.map((function(e){return[e.question,e.correct_answer]})),S=Object.fromEntries(y),q=function(){var e=0;for(var t in a)S[t]===a[t]&&(e+=1);return e},_=p.map((function(e){return Object(m.jsx)(w,{category:e.category,difficulty:e.difficulty,question:e.question,correctAnswer:e.correct_answer,incorrectAnswers:e.incorrect_answers,userAnswers:a,userClickedCheckme:h,setUserAnswers:j},Object(u.a)())}));return Object(m.jsxs)(m.Fragment,{children:[q()===t&&h&&Object(m.jsx)(i.a,{}),Object(m.jsx)("div",{className:"questions-container",children:_}),h&&Object(m.jsx)("div",{className:"result-message",children:t===q()?"\ud83c\udf89 Spectacular!!! You scored all the questions \ud83c\udf89":"You scored ".concat(q()," of ").concat(t," questions")}),t===Object.keys(a).length&&Object(m.jsx)("button",{className:"button-validate",type:"button",onClick:function(){h?(O(!1),j({}),n()):O(!0)},children:h?"re-Quiz, please":"Check me"})]})},p=(n(19),function(){var e=Object(o.useState)(3),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(o.useState)({showStartScreen:!0,showQuizScreen:!1}),u=Object(r.a)(s,2),a=u[0],i=u[1],j=function(){i({showStartScreen:!1,showQuizScreen:!0})};return Object(m.jsxs)("main",{children:[a.showStartScreen&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{className:"title",children:"QuizMe"}),Object(m.jsxs)("section",{className:"start-section",children:[Object(m.jsx)("div",{children:Object(m.jsx)("h3",{children:"How much questions do you want to be quizzed on?"})}),Object(m.jsx)("div",{className:"user-select-questions-count",children:Object(m.jsx)("input",{type:"number",min:3,max:20,name:"userQuestionsCount",className:"user-select-questions-count__input",value:n,onChange:function(e){return c(+e.target.value)},onKeyDown:function(e){"Enter"===e.code&&j()}})})]}),Object(m.jsx)("button",{type:"button",className:"start-button",onClick:function(){return j()},children:"Quiz me!"})]}),a.showQuizScreen&&Object(m.jsx)(x,{userQuestionsCount:n,restart:function(){i({showStartScreen:!0,showQuizScreen:!1})}})]})});s.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.fe4f20d0.chunk.js.map