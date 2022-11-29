"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63086,20289,16245,43421,78926,48637,10063,29479,81235,51549],{20289:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth,n=e.formats[t]||e.formats[e.defaultWidth];return n}},e.exports=a.default},16245:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var n,i=t||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=i.width?String(i.width):r;n=e.formattingValues[o]||e.formattingValues[r]}else{var d=e.defaultWidth,u=i.width?String(i.width):e.defaultWidth;n=e.values[u]||e.values[d]}return n[e.argumentCallback?e.argumentCallback(a):a]}},e.exports=a.default},43421:function(e,a){function t(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function n(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],d=a.match(o);if(!d)return null;var u,s=d[0],m=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(m)?n(m,(function(e){return e.test(s)})):t(m,(function(e){return e.test(s)}));u=e.valueCallback?e.valueCallback(l):l,u=i.valueCallback?i.valueCallback(u):u;var f=a.slice(s.length);return{value:u,rest:f}}},e.exports=a.default},78926:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.match(e.matchPattern);if(!n)return null;var i=n[0],r=a.match(e.parsePattern);if(!r)return null;var o=e.valueCallback?e.valueCallback(r[0]):r[0];o=t.valueCallback?t.valueCallback(o):o;var d=a.slice(i.length);return{value:o,rest:d}}},e.exports=a.default},1092:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,n){var i;n=n||{},i="string"===typeof t[e]?t[e]:1===a?t[e].one:t[e].other.replace("{{count}}",a);if(n.addSuffix)return n.comparison>0?"daqui a "+i:"h\xe1 "+i;return i};var t={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"aproximadamente 1 hora",other:"aproximadamente {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"aproximadamente 1 semana",other:"aproximadamente {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"aproximadamente 1 m\xeas",other:"aproximadamente {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"aproximadamente 1 ano",other:"aproximadamente {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};e.exports=a.default},10063:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,i=(n=t(20289))&&n.__esModule?n:{default:n};var r={date:(0,i.default)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d 'de' MMM 'de' y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} '\xe0s' {{time}}",long:"{{date}} '\xe0s' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=r,e.exports=a.default},29479:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,n,i){return t[e]};var t={lastWeek:"'na \xfaltima' eeee '\xe0s' p",yesterday:"'ontem \xe0s' p",today:"'hoje \xe0s' p",tomorrow:"'amanh\xe3 \xe0s' p",nextWeek:"eeee '\xe0s' p",other:"P"};e.exports=a.default},81235:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,i=(n=t(16245))&&n.__esModule?n:{default:n};var r={ordinalNumber:function(e){return Number(e)+"\xba"},era:(0,i.default)({values:{narrow:["aC","dC"],abbreviated:["a.C.","d.C."],wide:["antes de Cristo","depois de Cristo"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["d","s","t","q","q","s","s"],short:["dom","seg","ter","qua","qui","sex","s\xe1b"],abbreviated:["dom","seg","ter","qua","qui","sex","s\xe1b"],wide:["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"noite",night:"madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"noite",night:"madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"noite",night:"madrugada"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da noite",night:"da madrugada"}},defaultFormattingWidth:"wide"})};a.default=r,e.exports=a.default},51549:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(78926)),i=r(t(43421));function r(e){return e&&e.__esModule?e:{default:e}}var o={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)(\xba|\xaa)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes da era comum|depois de cristo|era comum)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes da era comum)/i,/^(depois de cristo|era comum)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba|\xaa)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|mar\xe7o|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ab/i,/^mai/i,/^jun/i,/^jul/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[dstq]/i,short:/^(dom|seg|ter|qua|qui|sex|s[\xe1a]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[\xe1a]b)/i,wide:/^(domingo|segunda-?\s?feira|ter\xe7a-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[\xe1a]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^s/i,/^t/i,/^q/i,/^q/i,/^s/i,/^s/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[\xe1a]/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[\xe3a]|tarde|noite|madrugada))/i,any:/^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[\xe3a]|tarde|noite|madrugada))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^meia/i,noon:/^meio/i,morning:/manh[\xe3a]/i,afternoon:/tarde/i,evening:/noite/i,night:/madrugada/i}},defaultParseWidth:"any"})};a.default=o,e.exports=a.default},63086:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=u(t(1092)),i=u(t(10063)),r=u(t(29479)),o=u(t(81235)),d=u(t(51549));function u(e){return e&&e.__esModule?e:{default:e}}var s={code:"pt",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:o.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=s,e.exports=a.default}}]);
//# sourceMappingURL=63086.575ad9492bf0fffd.js.map