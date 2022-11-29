"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82182,20289,16245,43421,78926,67835,32076,36520,12674,35920],{20289:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,n=e.formats[a]||e.formats[e.defaultWidth];return n}},e.exports=t.default},16245:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,u=r.width?String(r.width):i;n=e.formattingValues[u]||e.formattingValues[i]}else{var o=e.defaultWidth,d=r.width?String(r.width):e.defaultWidth;n=e.values[d]||e.values[o]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},43421:function(e,t){function a(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function n(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.width,u=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],o=t.match(u);if(!o)return null;var d,l=o[0],f=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(f)?n(f,(function(e){return e.test(l)})):a(f,(function(e){return e.test(l)}));d=e.valueCallback?e.valueCallback(s):s,d=r.valueCallback?r.valueCallback(d):d;var c=t.slice(l.length);return{value:d,rest:c}}},e.exports=t.default},78926:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var r=n[0],i=t.match(e.parsePattern);if(!i)return null;var u=e.valueCallback?e.valueCallback(i[0]):i[0];u=a.valueCallback?a.valueCallback(u):u;var o=t.slice(r.length);return{value:u,rest:o}}},e.exports=t.default},67835:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(12674),r={lessThanXSeconds:{one:"\u09aa\u09cd\u09b0\u09be\u09df \u09e7 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",other:"\u09aa\u09cd\u09b0\u09be\u09df {{count}} \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1"},xSeconds:{one:"\u09e7 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",other:"{{count}} \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1"},halfAMinute:"\u0986\u09a7 \u09ae\u09bf\u09a8\u09bf\u099f",lessThanXMinutes:{one:"\u09aa\u09cd\u09b0\u09be\u09df \u09e7 \u09ae\u09bf\u09a8\u09bf\u099f",other:"\u09aa\u09cd\u09b0\u09be\u09df {{count}} \u09ae\u09bf\u09a8\u09bf\u099f"},xMinutes:{one:"\u09e7 \u09ae\u09bf\u09a8\u09bf\u099f",other:"{{count}} \u09ae\u09bf\u09a8\u09bf\u099f"},aboutXHours:{one:"\u09aa\u09cd\u09b0\u09be\u09df \u09e7 \u0998\u09a8\u09cd\u099f\u09be",other:"\u09aa\u09cd\u09b0\u09be\u09df {{count}} \u0998\u09a8\u09cd\u099f\u09be"},xHours:{one:"\u09e7 \u0998\u09a8\u09cd\u099f\u09be",other:"{{count}} \u0998\u09a8\u09cd\u099f\u09be"},xDays:{one:"\u09e7 \u09a6\u09bf\u09a8",other:"{{count}} \u09a6\u09bf\u09a8"},aboutXWeeks:{one:"\u09aa\u09cd\u09b0\u09be\u09df \u09e7 \u09b8\u09aa\u09cd\u09a4\u09be\u09b9",other:"\u09aa\u09cd\u09b0\u09be\u09df {{count}} \u09b8\u09aa\u09cd\u09a4\u09be\u09b9"},xWeeks:{one:"\u09e7 \u09b8\u09aa\u09cd\u09a4\u09be\u09b9",other:"{{count}} \u09b8\u09aa\u09cd\u09a4\u09be\u09b9"},aboutXMonths:{one:"\u09aa\u09cd\u09b0\u09be\u09df \u09e7 \u09ae\u09be\u09b8",other:"\u09aa\u09cd\u09b0\u09be\u09df {{count}} \u09ae\u09be\u09b8"},xMonths:{one:"\u09e7 \u09ae\u09be\u09b8",other:"{{count}} \u09ae\u09be\u09b8"},aboutXYears:{one:"\u09aa\u09cd\u09b0\u09be\u09df \u09e7 \u09ac\u099b\u09b0",other:"\u09aa\u09cd\u09b0\u09be\u09df {{count}} \u09ac\u099b\u09b0"},xYears:{one:"\u09e7 \u09ac\u099b\u09b0",other:"{{count}} \u09ac\u099b\u09b0"},overXYears:{one:"\u09e7 \u09ac\u099b\u09b0\u09c7\u09b0 \u09ac\u09c7\u09b6\u09bf",other:"{{count}} \u09ac\u099b\u09b0\u09c7\u09b0 \u09ac\u09c7\u09b6\u09bf"},almostXYears:{one:"\u09aa\u09cd\u09b0\u09be\u09df \u09e7 \u09ac\u099b\u09b0",other:"\u09aa\u09cd\u09b0\u09be\u09df {{count}} \u09ac\u099b\u09b0"}},i=function(e,t,a){var i,u=r[e];return i="string"===typeof u?u:1===t?u.one:u.other.replace("{{count}}",(0,n.numberToLocale)(t)),null!==a&&void 0!==a&&a.addSuffix?a.comparison&&a.comparison>0?i+" \u098f\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7":i+" \u0986\u0997\u09c7":i};t.default=i,e.exports=t.default},32076:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(20289))&&n.__esModule?n:{default:n};var i={date:(0,r.default)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} {{time}} '\u09b8\u09ae\u09df'",long:"{{date}} {{time}} '\u09b8\u09ae\u09df'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},36520:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lastWeek:"'\u0997\u09a4' eeee '\u09b8\u09ae\u09df' p",yesterday:"'\u0997\u09a4\u0995\u09be\u09b2' '\u09b8\u09ae\u09df' p",today:"'\u0986\u099c' '\u09b8\u09ae\u09df' p",tomorrow:"'\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2' '\u09b8\u09ae\u09df' p",nextWeek:"eeee '\u09b8\u09ae\u09df' p",other:"P"},n=function(e,t,n,r){return a[e]};t.default=n,e.exports=t.default},12674:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.numberToLocale=u,t.default=void 0;var n,r=(n=a(16245))&&n.__esModule?n:{default:n};var i={locale:{1:"\u09e7",2:"\u09e8",3:"\u09e9",4:"\u09ea",5:"\u09eb",6:"\u09ec",7:"\u09ed",8:"\u09ee",9:"\u09ef",0:"\u09e6"},number:{"\u09e7":"1","\u09e8":"2","\u09e9":"3","\u09ea":"4","\u09eb":"5","\u09ec":"6","\u09ed":"7","\u09ee":"8","\u09ef":"9","\u09e6":"0"}};function u(e){return e.toString().replace(/\d/g,(function(e){return i.locale[e]}))}var o={ordinalNumber:function(e,t){var a=Number(e),n=u(a);if("date"===(null===t||void 0===t?void 0:t.unit))return function(e,t){if(e>18&&e<=31)return t+"\u09b6\u09c7";switch(e){case 1:return t+"\u09b2\u09be";case 2:case 3:return t+"\u09b0\u09be";case 4:return t+"\u09a0\u09be";default:return t+"\u0987"}}(a,n);if(a>10||0===a)return n+"\u09a4\u09ae";switch(a%10){case 2:case 3:return n+"\u09df";case 4:return n+"\u09b0\u09cd\u09a5";case 6:return n+"\u09b7\u09cd\u09a0";default:return n+"\u09ae"}},era:(0,r.default)({values:{narrow:["\u0996\u09cd\u09b0\u09bf\u0983\u09aa\u09c2\u0983","\u0996\u09cd\u09b0\u09bf\u0983"],abbreviated:["\u0996\u09cd\u09b0\u09bf\u0983\u09aa\u09c2\u09b0\u09cd\u09ac","\u0996\u09cd\u09b0\u09bf\u0983"],wide:["\u0996\u09cd\u09b0\u09bf\u09b8\u09cd\u099f\u09aa\u09c2\u09b0\u09cd\u09ac","\u0996\u09cd\u09b0\u09bf\u09b8\u09cd\u099f\u09be\u09ac\u09cd\u09a6"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["\u09e7","\u09e8","\u09e9","\u09ea"],abbreviated:["\u09e7\u09a4\u09cd\u09b0\u09c8","\u09e8\u09a4\u09cd\u09b0\u09c8","\u09e9\u09a4\u09cd\u09b0\u09c8","\u09ea\u09a4\u09cd\u09b0\u09c8"],wide:["\u09e7\u09ae \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995","\u09e8\u09df \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995","\u09e9\u09df \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995","\u09ea\u09b0\u09cd\u09a5 \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["\u099c\u09be\u09a8\u09c1","\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1","\u09ae\u09be\u09b0\u09cd\u099a","\u098f\u09aa\u09cd\u09b0\u09bf\u09b2","\u09ae\u09c7","\u099c\u09c1\u09a8","\u099c\u09c1\u09b2\u09be\u0987","\u0986\u0997\u09b8\u09cd\u099f","\u09b8\u09c7\u09aa\u09cd\u099f","\u0985\u0995\u09cd\u099f\u09cb","\u09a8\u09ad\u09c7","\u09a1\u09bf\u09b8\u09c7"],abbreviated:["\u099c\u09be\u09a8\u09c1","\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1","\u09ae\u09be\u09b0\u09cd\u099a","\u098f\u09aa\u09cd\u09b0\u09bf\u09b2","\u09ae\u09c7","\u099c\u09c1\u09a8","\u099c\u09c1\u09b2\u09be\u0987","\u0986\u0997\u09b8\u09cd\u099f","\u09b8\u09c7\u09aa\u09cd\u099f","\u0985\u0995\u09cd\u099f\u09cb","\u09a8\u09ad\u09c7","\u09a1\u09bf\u09b8\u09c7"],wide:["\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09bf","\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf","\u09ae\u09be\u09b0\u09cd\u099a","\u098f\u09aa\u09cd\u09b0\u09bf\u09b2","\u09ae\u09c7","\u099c\u09c1\u09a8","\u099c\u09c1\u09b2\u09be\u0987","\u0986\u0997\u09b8\u09cd\u099f","\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0","\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0","\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0","\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["\u09b0","\u09b8\u09cb","\u09ae","\u09ac\u09c1","\u09ac\u09c3","\u09b6\u09c1","\u09b6"],short:["\u09b0\u09ac\u09bf","\u09b8\u09cb\u09ae","\u09ae\u0999\u09cd\u0997\u09b2","\u09ac\u09c1\u09a7","\u09ac\u09c3\u09b9","\u09b6\u09c1\u0995\u09cd\u09b0","\u09b6\u09a8\u09bf"],abbreviated:["\u09b0\u09ac\u09bf","\u09b8\u09cb\u09ae","\u09ae\u0999\u09cd\u0997\u09b2","\u09ac\u09c1\u09a7","\u09ac\u09c3\u09b9","\u09b6\u09c1\u0995\u09cd\u09b0","\u09b6\u09a8\u09bf"],wide:["\u09b0\u09ac\u09bf\u09ac\u09be\u09b0","\u09b8\u09cb\u09ae\u09ac\u09be\u09b0","\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0","\u09ac\u09c1\u09a7\u09ac\u09be\u09b0","\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0 ","\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0","\u09b6\u09a8\u09bf\u09ac\u09be\u09b0"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"\u09aa\u09c2",pm:"\u0985\u09aa",midnight:"\u09ae\u09a7\u09cd\u09af\u09b0\u09be\u09a4",noon:"\u09ae\u09a7\u09cd\u09af\u09be\u09b9\u09cd\u09a8",morning:"\u09b8\u0995\u09be\u09b2",afternoon:"\u09ac\u09bf\u0995\u09be\u09b2",evening:"\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be",night:"\u09b0\u09be\u09a4"},abbreviated:{am:"\u09aa\u09c2\u09b0\u09cd\u09ac\u09be\u09b9\u09cd\u09a8",pm:"\u0985\u09aa\u09b0\u09be\u09b9\u09cd\u09a8",midnight:"\u09ae\u09a7\u09cd\u09af\u09b0\u09be\u09a4",noon:"\u09ae\u09a7\u09cd\u09af\u09be\u09b9\u09cd\u09a8",morning:"\u09b8\u0995\u09be\u09b2",afternoon:"\u09ac\u09bf\u0995\u09be\u09b2",evening:"\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be",night:"\u09b0\u09be\u09a4"},wide:{am:"\u09aa\u09c2\u09b0\u09cd\u09ac\u09be\u09b9\u09cd\u09a8",pm:"\u0985\u09aa\u09b0\u09be\u09b9\u09cd\u09a8",midnight:"\u09ae\u09a7\u09cd\u09af\u09b0\u09be\u09a4",noon:"\u09ae\u09a7\u09cd\u09af\u09be\u09b9\u09cd\u09a8",morning:"\u09b8\u0995\u09be\u09b2",afternoon:"\u09ac\u09bf\u0995\u09be\u09b2",evening:"\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be",night:"\u09b0\u09be\u09a4"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u09aa\u09c2",pm:"\u0985\u09aa",midnight:"\u09ae\u09a7\u09cd\u09af\u09b0\u09be\u09a4",noon:"\u09ae\u09a7\u09cd\u09af\u09be\u09b9\u09cd\u09a8",morning:"\u09b8\u0995\u09be\u09b2",afternoon:"\u09ac\u09bf\u0995\u09be\u09b2",evening:"\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be",night:"\u09b0\u09be\u09a4"},abbreviated:{am:"\u09aa\u09c2\u09b0\u09cd\u09ac\u09be\u09b9\u09cd\u09a8",pm:"\u0985\u09aa\u09b0\u09be\u09b9\u09cd\u09a8",midnight:"\u09ae\u09a7\u09cd\u09af\u09b0\u09be\u09a4",noon:"\u09ae\u09a7\u09cd\u09af\u09be\u09b9\u09cd\u09a8",morning:"\u09b8\u0995\u09be\u09b2",afternoon:"\u09ac\u09bf\u0995\u09be\u09b2",evening:"\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be",night:"\u09b0\u09be\u09a4"},wide:{am:"\u09aa\u09c2\u09b0\u09cd\u09ac\u09be\u09b9\u09cd\u09a8",pm:"\u0985\u09aa\u09b0\u09be\u09b9\u09cd\u09a8",midnight:"\u09ae\u09a7\u09cd\u09af\u09b0\u09be\u09a4",noon:"\u09ae\u09a7\u09cd\u09af\u09be\u09b9\u09cd\u09a8",morning:"\u09b8\u0995\u09be\u09b2",afternoon:"\u09ac\u09bf\u0995\u09be\u09b2",evening:"\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be",night:"\u09b0\u09be\u09a4"}},defaultFormattingWidth:"wide"})};t.default=o},35920:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(43421));function r(e){return e&&e.__esModule?e:{default:e}}var i={ordinalNumber:(0,r(a(78926)).default)({matchPattern:/^(\d+)(\u09ae|\u09df|\u09b0\u09cd\u09a5|\u09b7\u09cd\u09a0|\u09b6\u09c7|\u0987|\u09a4\u09ae)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(\u0996\u09cd\u09b0\u09bf\u0983\u09aa\u09c2\u0983|\u0996\u09cd\u09b0\u09bf\u0983)/i,abbreviated:/^(\u0996\u09cd\u09b0\u09bf\u0983\u09aa\u09c2\u09b0\u09cd\u09ac|\u0996\u09cd\u09b0\u09bf\u0983)/i,wide:/^(\u0996\u09cd\u09b0\u09bf\u09b8\u09cd\u099f\u09aa\u09c2\u09b0\u09cd\u09ac|\u0996\u09cd\u09b0\u09bf\u09b8\u09cd\u099f\u09be\u09ac\u09cd\u09a6)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0996\u09cd\u09b0\u09bf\u0983\u09aa\u09c2\u0983/i,/^\u0996\u09cd\u09b0\u09bf\u0983/i],abbreviated:[/^\u0996\u09cd\u09b0\u09bf\u0983\u09aa\u09c2\u09b0\u09cd\u09ac/i,/^\u0996\u09cd\u09b0\u09bf\u0983/i],wide:[/^\u0996\u09cd\u09b0\u09bf\u09b8\u09cd\u099f\u09aa\u09c2\u09b0\u09cd\u09ac/i,/^\u0996\u09cd\u09b0\u09bf\u09b8\u09cd\u099f\u09be\u09ac\u09cd\u09a6/i]},defaultParseWidth:"wide"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[\u09e7\u09e8\u09e9\u09ea]/i,abbreviated:/^[\u09e7\u09e8\u09e9\u09ea]\u09a4\u09cd\u09b0\u09c8/i,wide:/^[\u09e7\u09e8\u09e9\u09ea](\u09ae|\u09df|\u09b0\u09cd\u09a5)? \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995/i},defaultMatchWidth:"wide",parsePatterns:{any:[/\u09e7/i,/\u09e8/i,/\u09e9/i,/\u09ea/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^(\u099c\u09be\u09a8\u09c1|\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1|\u09ae\u09be\u09b0\u09cd\u099a|\u098f\u09aa\u09cd\u09b0\u09bf\u09b2|\u09ae\u09c7|\u099c\u09c1\u09a8|\u099c\u09c1\u09b2\u09be\u0987|\u0986\u0997\u09b8\u09cd\u099f|\u09b8\u09c7\u09aa\u09cd\u099f|\u0985\u0995\u09cd\u099f\u09cb|\u09a8\u09ad\u09c7|\u09a1\u09bf\u09b8\u09c7)/i,abbreviated:/^(\u099c\u09be\u09a8\u09c1|\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1|\u09ae\u09be\u09b0\u09cd\u099a|\u098f\u09aa\u09cd\u09b0\u09bf\u09b2|\u09ae\u09c7|\u099c\u09c1\u09a8|\u099c\u09c1\u09b2\u09be\u0987|\u0986\u0997\u09b8\u09cd\u099f|\u09b8\u09c7\u09aa\u09cd\u099f|\u0985\u0995\u09cd\u099f\u09cb|\u09a8\u09ad\u09c7|\u09a1\u09bf\u09b8\u09c7)/i,wide:/^(\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09bf|\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf|\u09ae\u09be\u09b0\u09cd\u099a|\u098f\u09aa\u09cd\u09b0\u09bf\u09b2|\u09ae\u09c7|\u099c\u09c1\u09a8|\u099c\u09c1\u09b2\u09be\u0987|\u0986\u0997\u09b8\u09cd\u099f|\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0|\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0|\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0|\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u099c\u09be\u09a8\u09c1/i,/^\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1/i,/^\u09ae\u09be\u09b0\u09cd\u099a/i,/^\u098f\u09aa\u09cd\u09b0\u09bf\u09b2/i,/^\u09ae\u09c7/i,/^\u099c\u09c1\u09a8/i,/^\u099c\u09c1\u09b2\u09be\u0987/i,/^\u0986\u0997\u09b8\u09cd\u099f/i,/^\u09b8\u09c7\u09aa\u09cd\u099f/i,/^\u0985\u0995\u09cd\u099f\u09cb/i,/^\u09a8\u09ad\u09c7/i,/^\u09a1\u09bf\u09b8\u09c7/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^(\u09b0|\u09b8\u09cb|\u09ae|\u09ac\u09c1|\u09ac\u09c3|\u09b6\u09c1|\u09b6)+/i,short:/^(\u09b0\u09ac\u09bf|\u09b8\u09cb\u09ae|\u09ae\u0999\u09cd\u0997\u09b2|\u09ac\u09c1\u09a7|\u09ac\u09c3\u09b9|\u09b6\u09c1\u0995\u09cd\u09b0|\u09b6\u09a8\u09bf)+/i,abbreviated:/^(\u09b0\u09ac\u09bf|\u09b8\u09cb\u09ae|\u09ae\u0999\u09cd\u0997\u09b2|\u09ac\u09c1\u09a7|\u09ac\u09c3\u09b9|\u09b6\u09c1\u0995\u09cd\u09b0|\u09b6\u09a8\u09bf)+/i,wide:/^(\u09b0\u09ac\u09bf\u09ac\u09be\u09b0|\u09b8\u09cb\u09ae\u09ac\u09be\u09b0|\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0|\u09ac\u09c1\u09a7\u09ac\u09be\u09b0|\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0 |\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0|\u09b6\u09a8\u09bf\u09ac\u09be\u09b0)+/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u09b0/i,/^\u09b8\u09cb/i,/^\u09ae/i,/^\u09ac\u09c1/i,/^\u09ac\u09c3/i,/^\u09b6\u09c1/i,/^\u09b6/i],short:[/^\u09b0\u09ac\u09bf/i,/^\u09b8\u09cb\u09ae/i,/^\u09ae\u0999\u09cd\u0997\u09b2/i,/^\u09ac\u09c1\u09a7/i,/^\u09ac\u09c3\u09b9/i,/^\u09b6\u09c1\u0995\u09cd\u09b0/i,/^\u09b6\u09a8\u09bf/i],abbreviated:[/^\u09b0\u09ac\u09bf/i,/^\u09b8\u09cb\u09ae/i,/^\u09ae\u0999\u09cd\u0997\u09b2/i,/^\u09ac\u09c1\u09a7/i,/^\u09ac\u09c3\u09b9/i,/^\u09b6\u09c1\u0995\u09cd\u09b0/i,/^\u09b6\u09a8\u09bf/i],wide:[/^\u09b0\u09ac\u09bf\u09ac\u09be\u09b0/i,/^\u09b8\u09cb\u09ae\u09ac\u09be\u09b0/i,/^\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0/i,/^\u09ac\u09c1\u09a7\u09ac\u09be\u09b0/i,/^\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0 /i,/^\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0/i,/^\u09b6\u09a8\u09bf\u09ac\u09be\u09b0/i]},defaultParseWidth:"wide"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(\u09aa\u09c2|\u0985\u09aa|\u09ae\u09a7\u09cd\u09af\u09b0\u09be\u09a4|\u09ae\u09a7\u09cd\u09af\u09be\u09b9\u09cd\u09a8|\u09b8\u0995\u09be\u09b2|\u09ac\u09bf\u0995\u09be\u09b2|\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be|\u09b0\u09be\u09a4)/i,abbreviated:/^(\u09aa\u09c2\u09b0\u09cd\u09ac\u09be\u09b9\u09cd\u09a8|\u0985\u09aa\u09b0\u09be\u09b9\u09cd\u09a8|\u09ae\u09a7\u09cd\u09af\u09b0\u09be\u09a4|\u09ae\u09a7\u09cd\u09af\u09be\u09b9\u09cd\u09a8|\u09b8\u0995\u09be\u09b2|\u09ac\u09bf\u0995\u09be\u09b2|\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be|\u09b0\u09be\u09a4)/i,wide:/^(\u09aa\u09c2\u09b0\u09cd\u09ac\u09be\u09b9\u09cd\u09a8|\u0985\u09aa\u09b0\u09be\u09b9\u09cd\u09a8|\u09ae\u09a7\u09cd\u09af\u09b0\u09be\u09a4|\u09ae\u09a7\u09cd\u09af\u09be\u09b9\u09cd\u09a8|\u09b8\u0995\u09be\u09b2|\u09ac\u09bf\u0995\u09be\u09b2|\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be|\u09b0\u09be\u09a4)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^\u09aa\u09c2/i,pm:/^\u0985\u09aa/i,midnight:/^\u09ae\u09a7\u09cd\u09af\u09b0\u09be\u09a4/i,noon:/^\u09ae\u09a7\u09cd\u09af\u09be\u09b9\u09cd\u09a8/i,morning:/\u09b8\u0995\u09be\u09b2/i,afternoon:/\u09ac\u09bf\u0995\u09be\u09b2/i,evening:/\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be/i,night:/\u09b0\u09be\u09a4/i}},defaultParseWidth:"any"})};t.default=i,e.exports=t.default},82182:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(67835)),r=d(a(32076)),i=d(a(36520)),u=d(a(12674)),o=d(a(35920));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"bn",formatDistance:n.default,formatLong:r.default,formatRelative:i.default,localize:u.default,match:o.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=l,e.exports=t.default}}]);
//# sourceMappingURL=82182.ede9c78142fc23f0.js.map