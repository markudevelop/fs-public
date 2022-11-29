"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79434],{79434:function(n,u){Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(n,u,t){t=t||{};var o,r=e[n];o="object"===typeof r.other?"other":1===u?"one":u>1&&u<5?"few":"many";var a,p=!0===t.addSuffix,i=t.comparison;a=p&&-1===i?"past":p&&1===i?"future":"regular";return r[o][a].replace("{{count}}",u)};var e={lessThanXSeconds:{one:{regular:"m\xe9n\u011b ne\u017e sekunda",past:"p\u0159ed m\xe9n\u011b ne\u017e sekundou",future:"za m\xe9n\u011b ne\u017e sekundu"},few:{regular:"m\xe9n\u011b ne\u017e {{count}} sekundy",past:"p\u0159ed m\xe9n\u011b ne\u017e {{count}} sekundami",future:"za m\xe9n\u011b ne\u017e {{count}} sekundy"},many:{regular:"m\xe9n\u011b ne\u017e {{count}} sekund",past:"p\u0159ed m\xe9n\u011b ne\u017e {{count}} sekundami",future:"za m\xe9n\u011b ne\u017e {{count}} sekund"}},xSeconds:{one:{regular:"sekunda",past:"p\u0159ed sekundou",future:"za sekundu"},few:{regular:"{{count}} sekundy",past:"p\u0159ed {{count}} sekundami",future:"za {{count}} sekundy"},many:{regular:"{{count}} sekund",past:"p\u0159ed {{count}} sekundami",future:"za {{count}} sekund"}},halfAMinute:{other:{regular:"p\u016fl minuty",past:"p\u0159ed p\u016fl minutou",future:"za p\u016fl minuty"}},lessThanXMinutes:{one:{regular:"m\xe9n\u011b ne\u017e minuta",past:"p\u0159ed m\xe9n\u011b ne\u017e minutou",future:"za m\xe9n\u011b ne\u017e minutu"},few:{regular:"m\xe9n\u011b ne\u017e {{count}} minuty",past:"p\u0159ed m\xe9n\u011b ne\u017e {{count}} minutami",future:"za m\xe9n\u011b ne\u017e {{count}} minuty"},many:{regular:"m\xe9n\u011b ne\u017e {{count}} minut",past:"p\u0159ed m\xe9n\u011b ne\u017e {{count}} minutami",future:"za m\xe9n\u011b ne\u017e {{count}} minut"}},xMinutes:{one:{regular:"minuta",past:"p\u0159ed minutou",future:"za minutu"},few:{regular:"{{count}} minuty",past:"p\u0159ed {{count}} minutami",future:"za {{count}} minuty"},many:{regular:"{{count}} minut",past:"p\u0159ed {{count}} minutami",future:"za {{count}} minut"}},aboutXHours:{one:{regular:"p\u0159ibli\u017en\u011b hodina",past:"p\u0159ibli\u017en\u011b p\u0159ed hodinou",future:"p\u0159ibli\u017en\u011b za hodinu"},few:{regular:"p\u0159ibli\u017en\u011b {{count}} hodiny",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} hodinami",future:"p\u0159ibli\u017en\u011b za {{count}} hodiny"},many:{regular:"p\u0159ibli\u017en\u011b {{count}} hodin",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} hodinami",future:"p\u0159ibli\u017en\u011b za {{count}} hodin"}},xHours:{one:{regular:"hodina",past:"p\u0159ed hodinou",future:"za hodinu"},few:{regular:"{{count}} hodiny",past:"p\u0159ed {{count}} hodinami",future:"za {{count}} hodiny"},many:{regular:"{{count}} hodin",past:"p\u0159ed {{count}} hodinami",future:"za {{count}} hodin"}},xDays:{one:{regular:"den",past:"p\u0159ed dnem",future:"za den"},few:{regular:"{{count}} dny",past:"p\u0159ed {{count}} dny",future:"za {{count}} dny"},many:{regular:"{{count}} dn\xed",past:"p\u0159ed {{count}} dny",future:"za {{count}} dn\xed"}},aboutXWeeks:{one:{regular:"p\u0159ibli\u017en\u011b t\xfdden",past:"p\u0159ibli\u017en\u011b p\u0159ed t\xfddnem",future:"p\u0159ibli\u017en\u011b za t\xfdden"},few:{regular:"p\u0159ibli\u017en\u011b {{count}} t\xfddny",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} t\xfddny",future:"p\u0159ibli\u017en\u011b za {{count}} t\xfddny"},many:{regular:"p\u0159ibli\u017en\u011b {{count}} t\xfddn\u016f",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} t\xfddny",future:"p\u0159ibli\u017en\u011b za {{count}} t\xfddn\u016f"}},xWeeks:{one:{regular:"t\xfdden",past:"p\u0159ed t\xfddnem",future:"za t\xfdden"},few:{regular:"{{count}} t\xfddny",past:"p\u0159ed {{count}} t\xfddny",future:"za {{count}} t\xfddny"},many:{regular:"{{count}} t\xfddn\u016f",past:"p\u0159ed {{count}} t\xfddny",future:"za {{count}} t\xfddn\u016f"}},aboutXMonths:{one:{regular:"p\u0159ibli\u017en\u011b m\u011bs\xedc",past:"p\u0159ibli\u017en\u011b p\u0159ed m\u011bs\xedcem",future:"p\u0159ibli\u017en\u011b za m\u011bs\xedc"},few:{regular:"p\u0159ibli\u017en\u011b {{count}} m\u011bs\xedce",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} m\u011bs\xedci",future:"p\u0159ibli\u017en\u011b za {{count}} m\u011bs\xedce"},many:{regular:"p\u0159ibli\u017en\u011b {{count}} m\u011bs\xedc\u016f",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} m\u011bs\xedci",future:"p\u0159ibli\u017en\u011b za {{count}} m\u011bs\xedc\u016f"}},xMonths:{one:{regular:"m\u011bs\xedc",past:"p\u0159ed m\u011bs\xedcem",future:"za m\u011bs\xedc"},few:{regular:"{{count}} m\u011bs\xedce",past:"p\u0159ed {{count}} m\u011bs\xedci",future:"za {{count}} m\u011bs\xedce"},many:{regular:"{{count}} m\u011bs\xedc\u016f",past:"p\u0159ed {{count}} m\u011bs\xedci",future:"za {{count}} m\u011bs\xedc\u016f"}},aboutXYears:{one:{regular:"p\u0159ibli\u017en\u011b rok",past:"p\u0159ibli\u017en\u011b p\u0159ed rokem",future:"p\u0159ibli\u017en\u011b za rok"},few:{regular:"p\u0159ibli\u017en\u011b {{count}} roky",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} roky",future:"p\u0159ibli\u017en\u011b za {{count}} roky"},many:{regular:"p\u0159ibli\u017en\u011b {{count}} rok\u016f",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} roky",future:"p\u0159ibli\u017en\u011b za {{count}} rok\u016f"}},xYears:{one:{regular:"rok",past:"p\u0159ed rokem",future:"za rok"},few:{regular:"{{count}} roky",past:"p\u0159ed {{count}} roky",future:"za {{count}} roky"},many:{regular:"{{count}} rok\u016f",past:"p\u0159ed {{count}} roky",future:"za {{count}} rok\u016f"}},overXYears:{one:{regular:"v\xedce ne\u017e rok",past:"p\u0159ed v\xedce ne\u017e rokem",future:"za v\xedce ne\u017e rok"},few:{regular:"v\xedce ne\u017e {{count}} roky",past:"p\u0159ed v\xedce ne\u017e {{count}} roky",future:"za v\xedce ne\u017e {{count}} roky"},many:{regular:"v\xedce ne\u017e {{count}} rok\u016f",past:"p\u0159ed v\xedce ne\u017e {{count}} roky",future:"za v\xedce ne\u017e {{count}} rok\u016f"}},almostXYears:{one:{regular:"skoro rok",past:"skoro p\u0159ed rokem",future:"skoro za rok"},few:{regular:"skoro {{count}} roky",past:"skoro p\u0159ed {{count}} roky",future:"skoro za {{count}} roky"},many:{regular:"skoro {{count}} rok\u016f",past:"skoro p\u0159ed {{count}} roky",future:"skoro za {{count}} rok\u016f"}}};n.exports=u.default}}]);
//# sourceMappingURL=79434.652f7cff321565ef.js.map