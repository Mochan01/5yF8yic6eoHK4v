_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var r=t("8Kt/"),o=t.n(r),a=t("q1tI"),u=t.n(a),f=t("bnlg"),c=t("YFqc"),i=t.n(c),s=u.a.createElement;function l(){return s(u.a.Fragment,null,s(o.a,null,s("title",null,"title")),s(i.a,{href:"/hoge"},s("a",null,"Hoge Page")),s(f.a,{user:{},onLogin:function(){},onLogout:function(){},onCreateAccount:function(){}}))}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("zoAU"),o=t("7KCV");n.__esModule=!0,n.default=void 0;var a,u=o(t("q1tI")),f=t("g/15"),c=t("nOHt"),i=t("elyg");var s=new Map,l=window.IntersectionObserver,p={};var d=function(e,n){var t=a||(l?a=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var n=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),s.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}s.delete(e)}):function(){}};function h(e,n,t,r){e.prefetch(n,t,r).catch((function(e){0})),p[n+"%"+t]=!0}function v(e,n,t,r,o,a,u){var c=e.currentTarget,i=c.nodeName,s=c.target;"A"===i&&(s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)||function(e){var n=(0,f.getLocationOrigin)();return new URL(e,n).origin===n}(t)&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}var g=function(e){var n=!1!==e.prefetch,t=u.default.useState(),o=r(t,2),a=o[0],f=o[1],s=(0,c.useRouter)(),g=u.default.useMemo((function(){var n=(0,i.resolveHref)(s.pathname,e.href);return{href:n,as:e.as?(0,i.resolveHref)(s.pathname,e.as):n}}),[s.pathname,e.href,e.as]),w=g.href,E=g.as;u.default.useEffect((function(){if(n&&l&&a&&a.tagName&&!p[w+"%"+E])return d(a,(function(){h(s,w,E)}))}),[n,a,w,E,s]);var y=e.children,_=e.replace,m=e.shallow,b=e.scroll;"string"===typeof y&&(y=u.default.createElement("a",null,y));var M=u.Children.only(y),N={ref:function(e){e&&f(e),M&&"object"===typeof M&&M.ref&&("function"===typeof M.ref?M.ref(e):"object"===typeof M.ref&&(M.ref.current=e))},onClick:function(e){M.props&&"function"===typeof M.props.onClick&&M.props.onClick(e),e.defaultPrevented||v(e,s,w,E,_,m,b)}};return n&&(N.onMouseEnter=function(e){M.props&&"function"===typeof M.props.onMouseEnter&&M.props.onMouseEnter(e),h(s,w,E,{priority:!0})}),!e.passHref&&("a"!==M.type||"href"in M.props)||(N.href=(0,i.addBasePath)(E)),u.default.cloneElement(M,N)};n.default=g}},[["/EDR",0,1,3,2,4]]]);