"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34308,43421,78926],{43421:function(e,t){function a(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function r(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.width,u=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],s=t.match(u);if(!s)return null;var d,l=s[0],o=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],f=Array.isArray(o)?r(o,(function(e){return e.test(l)})):a(o,(function(e){return e.test(l)}));d=e.valueCallback?e.valueCallback(f):f,d=i.valueCallback?i.valueCallback(d):d;var m=t.slice(l.length);return{value:d,rest:m}}},e.exports=t.default},78926:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var i=r[0],n=t.match(e.parsePattern);if(!n)return null;var u=e.valueCallback?e.valueCallback(n[0]):n[0];u=a.valueCallback?a.valueCallback(u):u;var s=t.slice(i.length);return{value:u,rest:s}}},e.exports=t.default},34308:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(78926)),i=n(a(43421));function n(e){return e&&e.__esModule?e:{default:e}}var u={ordinalNumber:(0,r.default)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(viru Christus|virun eiser Z\xe4itrechnung|no Christus|eiser Z\xe4itrechnung)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^v/i,/^n/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|m\xe4e|abr|mee|jun|jul|aug|sep|okt|nov|dez)/i,wide:/^(januar|februar|m\xe4erz|abr\xebll|mee|juni|juli|august|september|oktober|november|dezember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^m\xe4/i,/^ab/i,/^me/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[smdf]/i,short:/^(so|m\xe9|d\xeb|m\xeb|do|fr|sa)/i,abbreviated:/^(son?|m\xe9i?|d\xebn?|m\xebt?|don?|fre?|sam?)\.?/i,wide:/^(sonndeg|m\xe9indeg|d\xebnschdeg|m\xebttwoch|donneschdeg|freideg|samschdeg)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^so/i,/^m\xe9/i,/^d\xeb/i,/^m\xeb/i,/^do/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(mo\.?|nom\xeb\.?|M\xebtternuecht|m\xebttes|moies|nom\xebttes|owes|nuets)/i,abbreviated:/^(moi\.?|nom\xebt\.?|M\xebtternuecht|m\xebttes|moies|nom\xebttes|owes|nuets)/i,wide:/^(moies|nom\xebttes|M\xebtternuecht|m\xebttes|moies|nom\xebttes|owes|nuets)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^m/i,pm:/^n/i,midnight:/^M\xebtter/i,noon:/^m\xebttes/i,morning:/moies/i,afternoon:/nom\xebttes/i,evening:/owes/i,night:/nuets/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default}}]);
//# sourceMappingURL=34308.b29906ed0c945e18.js.map