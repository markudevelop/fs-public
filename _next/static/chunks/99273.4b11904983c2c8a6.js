"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[99273,16245],{16245:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,d=i.width?String(i.width):r;a=e.formattingValues[d]||e.formattingValues[r]}else{var o=e.defaultWidth,u=i.width?String(i.width):e.defaultWidth;a=e.values[u]||e.values[o]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},99273:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(16245))&&a.__esModule?a:{default:a};var r={ordinalNumber:function(e,t){return Number(e).toString()},era:(0,i.default)({values:{narrow:["\u1798.\u1782\u179f","\u1782\u179f"],abbreviated:["\u1798\u17bb\u1793\u1782.\u179f","\u1782.\u179f"],wide:["\u1798\u17bb\u1793\u1782\u17d2\u179a\u17b7\u179f\u17d2\u178f\u179f\u1780\u179a\u17b6\u1787","\u1793\u17c3\u1782\u17d2\u179a\u17b7\u179f\u17d2\u178f\u179f\u1780\u179a\u17b6\u1787"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 1","\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 2","\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 3","\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 4"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["\u1798.\u1780","\u1780.\u1798","\u1798\u17b7","\u1798.\u179f","\u17a7.\u179f","\u1798.\u1790","\u1780.\u178a","\u179f\u17b8","\u1780\u1789","\u178f\u17bb","\u179c\u17b7","\u1792"],abbreviated:["\u1798\u1780\u179a\u17b6","\u1780\u17bb\u1798\u17d2\u1797\u17c8","\u1798\u17b8\u1793\u17b6","\u1798\u17c1\u179f\u17b6","\u17a7\u179f\u1797\u17b6","\u1798\u17b7\u1790\u17bb\u1793\u17b6","\u1780\u1780\u17d2\u1780\u178a\u17b6","\u179f\u17b8\u17a0\u17b6","\u1780\u1789\u17d2\u1789\u17b6","\u178f\u17bb\u179b\u17b6","\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6","\u1792\u17d2\u1793\u17bc"],wide:["\u1798\u1780\u179a\u17b6","\u1780\u17bb\u1798\u17d2\u1797\u17c8","\u1798\u17b8\u1793\u17b6","\u1798\u17c1\u179f\u17b6","\u17a7\u179f\u1797\u17b6","\u1798\u17b7\u1790\u17bb\u1793\u17b6","\u1780\u1780\u17d2\u1780\u178a\u17b6","\u179f\u17b8\u17a0\u17b6","\u1780\u1789\u17d2\u1789\u17b6","\u178f\u17bb\u179b\u17b6","\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6","\u1792\u17d2\u1793\u17bc"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["\u17a2\u17b6","\u1785","\u17a2","\u1796","\u1796\u17d2\u179a","\u179f\u17bb","\u179f"],short:["\u17a2\u17b6","\u1785","\u17a2","\u1796","\u1796\u17d2\u179a","\u179f\u17bb","\u179f"],abbreviated:["\u17a2\u17b6","\u1785","\u17a2","\u1796","\u1796\u17d2\u179a","\u179f\u17bb","\u179f"],wide:["\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799","\u1785\u1793\u17d2\u1791","\u17a2\u1784\u17d2\u1782\u17b6\u179a","\u1796\u17bb\u1792","\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd","\u179f\u17bb\u1780\u17d2\u179a","\u179f\u17c5\u179a\u17cd"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"\u1796\u17d2\u179a\u17b9\u1780",pm:"\u179b\u17d2\u1784\u17b6\u1785",midnight:"\u200b\u1796\u17c1\u179b\u1780\u178e\u17d2\u178a\u17b6\u179b\u17a2\u1792\u17d2\u179a\u17b6\u178f\u17d2\u179a",noon:"\u1796\u17c1\u179b\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb",morning:"\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780",afternoon:"\u1796\u17c1\u179b\u179a\u179f\u17c0\u179b",evening:"\u1796\u17c1\u179b\u179b\u17d2\u1784\u17b6\u1785",night:"\u1796\u17c1\u179b\u1799\u1794\u17cb"},abbreviated:{am:"\u1796\u17d2\u179a\u17b9\u1780",pm:"\u179b\u17d2\u1784\u17b6\u1785",midnight:"\u200b\u1796\u17c1\u179b\u1780\u178e\u17d2\u178a\u17b6\u179b\u17a2\u1792\u17d2\u179a\u17b6\u178f\u17d2\u179a",noon:"\u1796\u17c1\u179b\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb",morning:"\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780",afternoon:"\u1796\u17c1\u179b\u179a\u179f\u17c0\u179b",evening:"\u1796\u17c1\u179b\u179b\u17d2\u1784\u17b6\u1785",night:"\u1796\u17c1\u179b\u1799\u1794\u17cb"},wide:{am:"\u1796\u17d2\u179a\u17b9\u1780",pm:"\u179b\u17d2\u1784\u17b6\u1785",midnight:"\u200b\u1796\u17c1\u179b\u1780\u178e\u17d2\u178a\u17b6\u179b\u17a2\u1792\u17d2\u179a\u17b6\u178f\u17d2\u179a",noon:"\u1796\u17c1\u179b\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb",morning:"\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780",afternoon:"\u1796\u17c1\u179b\u179a\u179f\u17c0\u179b",evening:"\u1796\u17c1\u179b\u179b\u17d2\u1784\u17b6\u1785",night:"\u1796\u17c1\u179b\u1799\u1794\u17cb"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u1796\u17d2\u179a\u17b9\u1780",pm:"\u179b\u17d2\u1784\u17b6\u1785",midnight:"\u200b\u1796\u17c1\u179b\u1780\u178e\u17d2\u178a\u17b6\u179b\u17a2\u1792\u17d2\u179a\u17b6\u178f\u17d2\u179a",noon:"\u1796\u17c1\u179b\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb",morning:"\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780",afternoon:"\u1796\u17c1\u179b\u179a\u179f\u17c0\u179b",evening:"\u1796\u17c1\u179b\u179b\u17d2\u1784\u17b6\u1785",night:"\u1796\u17c1\u179b\u1799\u1794\u17cb"},abbreviated:{am:"\u1796\u17d2\u179a\u17b9\u1780",pm:"\u179b\u17d2\u1784\u17b6\u1785",midnight:"\u200b\u1796\u17c1\u179b\u1780\u178e\u17d2\u178a\u17b6\u179b\u17a2\u1792\u17d2\u179a\u17b6\u178f\u17d2\u179a",noon:"\u1796\u17c1\u179b\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb",morning:"\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780",afternoon:"\u1796\u17c1\u179b\u179a\u179f\u17c0\u179b",evening:"\u1796\u17c1\u179b\u179b\u17d2\u1784\u17b6\u1785",night:"\u1796\u17c1\u179b\u1799\u1794\u17cb"},wide:{am:"\u1796\u17d2\u179a\u17b9\u1780",pm:"\u179b\u17d2\u1784\u17b6\u1785",midnight:"\u200b\u1796\u17c1\u179b\u1780\u178e\u17d2\u178a\u17b6\u179b\u17a2\u1792\u17d2\u179a\u17b6\u178f\u17d2\u179a",noon:"\u1796\u17c1\u179b\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb",morning:"\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780",afternoon:"\u1796\u17c1\u179b\u179a\u179f\u17c0\u179b",evening:"\u1796\u17c1\u179b\u179b\u17d2\u1784\u17b6\u1785",night:"\u1796\u17c1\u179b\u1799\u1794\u17cb"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default}}]);
//# sourceMappingURL=99273.4b11904983c2c8a6.js.map