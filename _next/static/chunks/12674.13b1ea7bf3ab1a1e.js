"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12674,16245],{16245:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,t){var a,r=t||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,u=r.width?String(r.width):i;a=e.formattingValues[u]||e.formattingValues[i]}else{var d=e.defaultWidth,o=r.width?String(r.width):e.defaultWidth;a=e.values[o]||e.values[d]}return a[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},12674:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.numberToLocale=u,n.default=void 0;var a,r=(a=t(16245))&&a.__esModule?a:{default:a};var i={locale:{1:"\u09e7",2:"\u09e8",3:"\u09e9",4:"\u09ea",5:"\u09eb",6:"\u09ec",7:"\u09ed",8:"\u09ee",9:"\u09ef",0:"\u09e6"},number:{"\u09e7":"1","\u09e8":"2","\u09e9":"3","\u09ea":"4","\u09eb":"5","\u09ec":"6","\u09ed":"7","\u09ee":"8","\u09ef":"9","\u09e6":"0"}};function u(e){return e.toString().replace(/\d/g,(function(e){return i.locale[e]}))}var d={ordinalNumber:function(e,n){var t=Number(e),a=u(t);if("date"===(null===n||void 0===n?void 0:n.unit))return function(e,n){if(e>18&&e<=31)return n+"\u09b6\u09c7";switch(e){case 1:return n+"\u09b2\u09be";case 2:case 3:return n+"\u09b0\u09be";case 4:return n+"\u09a0\u09be";default:return n+"\u0987"}}(t,a);if(t>10||0===t)return a+"\u09a4\u09ae";switch(t%10){case 2:case 3:return a+"\u09df";case 4:return a+"\u09b0\u09cd\u09a5";case 6:return a+"\u09b7\u09cd\u09a0";default:return a+"\u09ae"}},era:(0,r.default)({values:{narrow:["\u0996\u09cd\u09b0\u09bf\u0983\u09aa\u09c2\u0983","\u0996\u09cd\u09b0\u09bf\u0983"],abbreviated:["\u0996\u09cd\u09b0\u09bf\u0983\u09aa\u09c2\u09b0\u09cd\u09ac","\u0996\u09cd\u09b0\u09bf\u0983"],wide:["\u0996\u09cd\u09b0\u09bf\u09b8\u09cd\u099f\u09aa\u09c2\u09b0\u09cd\u09ac","\u0996\u09cd\u09b0\u09bf\u09b8\u09cd\u099f\u09be\u09ac\u09cd\u09a6"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["\u09e7","\u09e8","\u09e9","\u09ea"],abbreviated:["\u09e7\u09a4\u09cd\u09b0\u09c8","\u09e8\u09a4\u09cd\u09b0\u09c8","\u09e9\u09a4\u09cd\u09b0\u09c8","\u09ea\u09a4\u09cd\u09b0\u09c8"],wide:["\u09e7\u09ae \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995","\u09e8\u09df \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995","\u09e9\u09df \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995","\u09ea\u09b0\u09cd\u09a5 \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["\u099c\u09be\u09a8\u09c1","\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1","\u09ae\u09be\u09b0\u09cd\u099a","\u098f\u09aa\u09cd\u09b0\u09bf\u09b2","\u09ae\u09c7","\u099c\u09c1\u09a8","\u099c\u09c1\u09b2\u09be\u0987","\u0986\u0997\u09b8\u09cd\u099f","\u09b8\u09c7\u09aa\u09cd\u099f","\u0985\u0995\u09cd\u099f\u09cb","\u09a8\u09ad\u09c7","\u09a1\u09bf\u09b8\u09c7"],abbreviated:["\u099c\u09be\u09a8\u09c1","\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1","\u09ae\u09be\u09b0\u09cd\u099a","\u098f\u09aa\u09cd\u09b0\u09bf\u09b2","\u09ae\u09c7","\u099c\u09c1\u09a8","\u099c\u09c1\u09b2\u09be\u0987","\u0986\u0997\u09b8\u09cd\u099f","\u09b8\u09c7\u09aa\u09cd\u099f","\u0985\u0995\u09cd\u099f\u09cb","\u09a8\u09ad\u09c7","\u09a1\u09bf\u09b8\u09c7"],wide:["\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09bf","\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf","\u09ae\u09be\u09b0\u09cd\u099a","\u098f\u09aa\u09cd\u09b0\u09bf\u09b2","\u09ae\u09c7","\u099c\u09c1\u09a8","\u099c\u09c1\u09b2\u09be\u0987","\u0986\u0997\u09b8\u09cd\u099f","\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0","\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0","\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0","\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["\u09b0","\u09b8\u09cb","\u09ae","\u09ac\u09c1","\u09ac\u09c3","\u09b6\u09c1","\u09b6"],short:["\u09b0\u09ac\u09bf","\u09b8\u09cb\u09ae","\u09ae\u0999\u09cd\u0997\u09b2","\u09ac\u09c1\u09a7","\u09ac\u09c3\u09b9","\u09b6\u09c1\u0995\u09cd\u09b0","\u09b6\u09a8\u09bf"],abbreviated:["\u09b0\u09ac\u09bf","\u09b8\u09cb\u09ae","\u09ae\u0999\u09cd\u0997\u09b2","\u09ac\u09c1\u09a7","\u09ac\u09c3\u09b9","\u09b6\u09c1\u0995\u09cd\u09b0","\u09b6\u09a8\u09bf"],wide:["\u09b0\u09ac\u09bf\u09ac\u09be\u09b0","\u09b8\u09cb\u09ae\u09ac\u09be\u09b0","\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0","\u09ac\u09c1\u09a7\u09ac\u09be\u09b0","\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0 ","\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0","\u09b6\u09a8\u09bf\u09ac\u09be\u09b0"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"\u09aa\u09c2",pm:"\u0985\u09aa",midnight:"\u09ae\u09a7\u09cd\u09af\u09b0\u09be\u09a4",noon:"\u09ae\u09a7\u09cd\u09af\u09be\u09b9\u09cd\u09a8",morning:"\u09b8\u0995\u09be\u09b2",afternoon:"\u09ac\u09bf\u0995\u09be\u09b2",evening:"\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be",night:"\u09b0\u09be\u09a4"},abbreviated:{am:"\u09aa\u09c2\u09b0\u09cd\u09ac\u09be\u09b9\u09cd\u09a8",pm:"\u0985\u09aa\u09b0\u09be\u09b9\u09cd\u09a8",midnight:"\u09ae\u09a7\u09cd\u09af\u09b0\u09be\u09a4",noon:"\u09ae\u09a7\u09cd\u09af\u09be\u09b9\u09cd\u09a8",morning:"\u09b8\u0995\u09be\u09b2",afternoon:"\u09ac\u09bf\u0995\u09be\u09b2",evening:"\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be",night:"\u09b0\u09be\u09a4"},wide:{am:"\u09aa\u09c2\u09b0\u09cd\u09ac\u09be\u09b9\u09cd\u09a8",pm:"\u0985\u09aa\u09b0\u09be\u09b9\u09cd\u09a8",midnight:"\u09ae\u09a7\u09cd\u09af\u09b0\u09be\u09a4",noon:"\u09ae\u09a7\u09cd\u09af\u09be\u09b9\u09cd\u09a8",morning:"\u09b8\u0995\u09be\u09b2",afternoon:"\u09ac\u09bf\u0995\u09be\u09b2",evening:"\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be",night:"\u09b0\u09be\u09a4"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u09aa\u09c2",pm:"\u0985\u09aa",midnight:"\u09ae\u09a7\u09cd\u09af\u09b0\u09be\u09a4",noon:"\u09ae\u09a7\u09cd\u09af\u09be\u09b9\u09cd\u09a8",morning:"\u09b8\u0995\u09be\u09b2",afternoon:"\u09ac\u09bf\u0995\u09be\u09b2",evening:"\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be",night:"\u09b0\u09be\u09a4"},abbreviated:{am:"\u09aa\u09c2\u09b0\u09cd\u09ac\u09be\u09b9\u09cd\u09a8",pm:"\u0985\u09aa\u09b0\u09be\u09b9\u09cd\u09a8",midnight:"\u09ae\u09a7\u09cd\u09af\u09b0\u09be\u09a4",noon:"\u09ae\u09a7\u09cd\u09af\u09be\u09b9\u09cd\u09a8",morning:"\u09b8\u0995\u09be\u09b2",afternoon:"\u09ac\u09bf\u0995\u09be\u09b2",evening:"\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be",night:"\u09b0\u09be\u09a4"},wide:{am:"\u09aa\u09c2\u09b0\u09cd\u09ac\u09be\u09b9\u09cd\u09a8",pm:"\u0985\u09aa\u09b0\u09be\u09b9\u09cd\u09a8",midnight:"\u09ae\u09a7\u09cd\u09af\u09b0\u09be\u09a4",noon:"\u09ae\u09a7\u09cd\u09af\u09be\u09b9\u09cd\u09a8",morning:"\u09b8\u0995\u09be\u09b2",afternoon:"\u09ac\u09bf\u0995\u09be\u09b2",evening:"\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be",night:"\u09b0\u09be\u09a4"}},defaultFormattingWidth:"wide"})};n.default=d}}]);
//# sourceMappingURL=12674.13b1ea7bf3ab1a1e.js.map