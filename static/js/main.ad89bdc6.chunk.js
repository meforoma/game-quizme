(this["webpackJsonpreact-tenzi-from-scratch"]=this["webpackJsonpreact-tenzi-from-scratch"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(7),s=c.n(n),r=c(2),o=c(1),a=c(10),u=c(8),i=c.n(u),l="https://opentdb.com/api.php",j=function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch("".concat(l).concat(e)).then((function(e){return e.ok?e.json():new Error("".concat(e.status," -- ").concat(e.statusText))})).then((function(e){return e.results}))}("?amount=".concat(e))},b=c(3),h=c(6),d=c(4),O=c(9),f=c.n(O),m=c(0),w=function(e){console.log("mount QuestionDisplay");var t=e.category,c=e.difficulty,n=e.question,s=e.correctAnswer,a=e.incorrectAnswers,u=e.userAnswers,i=e.userClickedCheckme,l=e.setUserAnswers,j=Object(o.useState)([]),O=Object(r.a)(j,2),w=O[0],x=O[1];return Object(o.useEffect)((function(){var e=a.concat(s).sort((function(){return Math.floor(Math.random()-.5)}));x(e)}),[]),Object(m.jsxs)("div",{className:"question",children:[Object(m.jsx)("span",{className:"question__difficulty question__difficulty--".concat(c),children:"Difficulty: ".concat(c)}),Object(m.jsx)("span",{className:"question__category",children:" Category: ".concat(Object(d.decode)(t))}),Object(m.jsx)("div",{className:"question__body",children:Object(m.jsx)("h3",{children:Object(d.decode)(n)})}),Object(m.jsx)("div",{className:"question__answers",children:w.map((function(e){return Object(m.jsx)("div",{className:f()({answer:e,"answer--selected":u[n]===e,"answer--correct":i&&s===e,"answer--incorrect":i&&s!==e&&u[n]===e}),onClick:function(){return l((function(t){return Object(h.a)(Object(h.a)({},t),{},Object(b.a)({},n,e))}))},children:Object(d.decode)(e)},e)}))})]})},x=function(e){console.log("mount QuizScreen");var t=e.userQuestionsCount,c=e.restart,n=Object(o.useState)([]),s=Object(r.a)(n,2),u=s[0],l=s[1];Object(o.useEffect)((function(){j(t).then(l)}),[]);var b=u.map((function(e){return[e.question,e.correct_answer]})),h=Object.fromEntries(b),d=Object(o.useState)({}),O=Object(r.a)(d,2),f=O[0],x=O[1];console.log("correctAnswersObj",h),console.log("userAnswers",f,Object.keys(f).length);var v=Object(o.useState)(!1),p=Object(r.a)(v,2),S=p[0],g=p[1],y=function(){var e=0;for(var t in f)h[t]===f[t]&&(e+=1);return e};console.log("evaluateAnswers",y());var q=u.map((function(e){return Object(m.jsx)(w,{category:e.category,difficulty:e.difficulty,question:e.question,correctAnswer:e.correct_answer,incorrectAnswers:e.incorrect_answers,userAnswers:f,userClickedCheckme:S,setUserAnswers:x},Object(a.a)())}));return Object(m.jsxs)(m.Fragment,{children:[y()===t&&S&&Object(m.jsx)(i.a,{}),Object(m.jsx)("div",{className:"questions-container",children:q}),S&&Object(m.jsx)("div",{className:"result-message",children:t===y()?"\ud83c\udf89 Spectacular!!! You scored all the questions \ud83c\udf89":"You scored ".concat(y()," of ").concat(t," questions")}),t===Object.keys(f).length&&Object(m.jsx)("button",{className:"button-validate",type:"button",onClick:function(){S?(g(!1),x({}),c()):g(!0)},children:S?"re-Quiz, please":"Check me"})]})},v=(c(19),function(){var e=Object(o.useState)(3),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(o.useState)({showStartScreen:!0,showQuizScreen:!1}),a=Object(r.a)(s,2),u=a[0],i=a[1];return Object(m.jsxs)("main",{children:[u.showStartScreen&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{className:"title",children:"QuizMe"}),Object(m.jsxs)("section",{className:"start-section",children:[Object(m.jsx)("h4",{children:"How much questions do you want to be quizzed on?"}),Object(m.jsx)("select",{name:"userQuestionsCount",className:"user-select-questions-count",value:c,onChange:function(e){return n(+e.target.value)},children:[3,5,6,7,8,9,10].map((function(e){return Object(m.jsx)("option",{value:e,children:e},e)}))})]}),Object(m.jsx)("button",{type:"button",className:"start-button",onClick:function(){return i({showStartScreen:!1,showQuizScreen:!0})},children:"Quiz me!"})]}),u.showQuizScreen&&Object(m.jsx)(x,{userQuestionsCount:c,restart:function(){i({showStartScreen:!0,showQuizScreen:!1})}})]})});s.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.ad89bdc6.chunk.js.map