"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27475,43421,78926],{43421:function(a,e){function t(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t}function i(a,e){for(var t=0;t<a.length;t++)if(e(a[t]))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.width,d=n&&a.matchPatterns[n]||a.matchPatterns[a.defaultMatchWidth],u=e.match(d);if(!u)return null;var o,l=u[0],s=n&&a.parsePatterns[n]||a.parsePatterns[a.defaultParseWidth],c=Array.isArray(s)?i(s,(function(a){return a.test(l)})):t(s,(function(a){return a.test(l)}));o=a.valueCallback?a.valueCallback(c):c,o=r.valueCallback?r.valueCallback(o):o;var f=e.slice(l.length);return{value:o,rest:f}}},a.exports=e.default},78926:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.match(a.matchPattern);if(!i)return null;var r=i[0],n=e.match(a.parsePattern);if(!n)return null;var d=a.valueCallback?a.valueCallback(n[0]):n[0];d=t.valueCallback?t.valueCallback(d):d;var u=e.slice(r.length);return{value:d,rest:u}}},a.exports=e.default},27475:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t(78926)),r=n(t(43421));function n(a){return a&&a.__esModule?a:{default:a}}var d={ordinalNumber:(0,i.default)({matchPattern:/^(\d+)(\xba)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes da era com[u\xfa]n|despois de cristo|era com[u\xfa]n)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes da era com[u\xfa]n)/i,/^(despois de cristo|era com[u\xfa]n)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[xfmasond]/i,abbreviated:/^(xan|feb|mar|abr|mai|xun|xul|ago|set|out|nov|dec)/i,wide:/^(xaneiro|febreiro|marzo|abril|maio|xu\xf1o|xullo|agosto|setembro|outubro|novembro|decembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^x/i,/^f/i,/^m/i,/^a/i,/^m/i,/^x/i,/^x/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^xan/i,/^feb/i,/^mar/i,/^abr/i,/^mai/i,/^xun/i,/^xul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dec/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[dlmxvs]/i,short:/^(do|lu|ma|me|xo|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|xov|ven|sab)/i,wide:/^(domingo|luns|martes|m[e\xe9]rcores|xoves|venres|s[\xe1a]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^x/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^me/i,/^xo/i,/^ve/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(a|p|mn|md|(da|[a\xe1]s) (ma\xf1[a\xe1]|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|medianoite|mediod[i\xed]a|(da|[a\xe1]s) (ma\xf1[a\xe1]|tarde|noite))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/ma\xf1[a\xe1]/i,afternoon:/tarde/i,evening:/tardi\xf1a/i,night:/noite/i}},defaultParseWidth:"any"})};e.default=d,a.exports=e.default}}]);
//# sourceMappingURL=27475.6b6cd07ffbb0337a.js.map