(this["webpackJsonpcountries-app"]=this["webpackJsonpcountries-app"]||[]).push([[0],{44:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(34),s=n.n(c),i=(n(44),n(39)),o=n(10),l=n(11),u=n(13),d=n(12),h=n(17),j=n(3),m=n(15),b=n(16),f=n(35),g=(n(49),n(0));var v=function(e){var t=e.toggleTheme,n=e.isDark;return Object(g.jsx)("header",{className:"header",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("div",{className:"header__title",children:"Where in the world?"}),Object(g.jsx)("div",{className:"header__theme-toggle",children:Object(g.jsxs)("button",{className:"header__theme-btn btn",onClick:t,title:"Change Theme",children:[Object(g.jsx)(m.a,{className:"header__theme-icon",icon:n?b.b:f.a}),n?"Dark Mode":"Light Mode"]})})]})})},p=(n(51),n(9)),x=n.n(p),O=n(18);n(53);var y=function(e){var t=e.item,n=t.flag,a=t.name,r=t.population,c=t.capital,s=t.region;return Object(g.jsxs)("article",{className:"country-card card ",children:[Object(g.jsx)("img",{src:n,className:"card-img-top country-card__flag",alt:a}),Object(g.jsxs)("div",{className:"country-card__body",children:[Object(g.jsx)(h.b,{to:"details/".concat(a),className:"country-card__title font--bold",children:Object(g.jsx)("p",{children:a})}),Object(g.jsxs)("div",{className:"country-card__info",children:[Object(g.jsx)("span",{className:"font--regular",children:"Population:"}),Object(g.jsxs)("span",{className:"font--light",children:[" ",r]})]}),Object(g.jsxs)("div",{className:"country-card__info",children:[Object(g.jsx)("span",{className:"font--regular",children:"Region:"}),Object(g.jsxs)("span",{className:"font--light",children:[" ",s]})]}),Object(g.jsxs)("div",{className:"country-card__info",children:[Object(g.jsx)("span",{className:"font--regular",children:"Capital:"}),Object(g.jsxs)("span",{className:"font--light",children:[" ",c]})]})]})]})},N=n(37),_=n.n(N);n(60);var C=function(e){var t=e.isDisabled,n=e.onChangeHandler;return Object(g.jsx)(_.a,{className:"filter-select",disabled:t,options:[{labelKey:"Africa",value:"Africa"},{labelKey:"Americas",value:"Americas"},{labelKey:"Asia",value:"Asia"},{labelKey:"Europe",value:"Europe"},{labelKey:"Oceania",value:"Oceania"}],placeholder:"Filter by Region",onChange:function(e){return e.selectedValue.length&&n(e.selectedValue[0])}})},k=(n(61),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.timeOutID=null,e.setValue=function(t){e.setState({value:t},(function(){e.timeOutID&&clearTimeout(e.timeOutID),e.timeOutID=setTimeout((function(){return e.props.onChangeHandler(t)}),500)}))},e.onSubmitHandler=function(){e.props.onChangeHandler(e.state.value)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.isDisabled,n=this.state.value;return Object(g.jsxs)("div",{className:"country-search ",children:[Object(g.jsx)("label",{htmlFor:"country-search-input",children:Object(g.jsx)("span",{className:"sr-only",children:"Search for a country"})}),Object(g.jsx)(m.a,{className:"country-search__icon",icon:b.c}),Object(g.jsx)("input",{disabled:t,id:"country-search-input",type:"text",value:n,placeholder:"Search for a country...",className:"form-control form-control-sm country-search__input ",onChange:function(t){return e.setValue(t.target.value)}})]})}}]),n}(r.a.Component)),I=n(38),L=n.n(I).a.create({baseURL:"https://restcountries.eu/rest/v2/"});function D(e,t){return L.get(e,t)}function w(e){return D("".concat("name/").concat(e))}function S(e){return D("".concat("region/").concat(e))}function B(e){var t=e.join(";");return D("".concat("https://restcountries.eu/rest/v2/alpha"),{params:{codes:t,fields:"name;alpha3Code"}})}n(79);var T=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,hasError:!1,countries:[],regionFilter:null,searchQuery:null,pageSize:8,currentLoadedItems:0},e.filterByRegion=function(){var t=Object(O.a)(x.a.mark((function t(n){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(n);case 3:a=t.sent,e.setState({isLoading:!1,countries:a.data,regionFilter:n,searchQuery:null}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.setState({hasError:!0,isLoading:!1,countries:[],regionFilter:null,searchQuery:null});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),e.filterByName=function(){var t=Object(O.a)(x.a.mark((function t(n){var a,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=n,t.next=4,w(a);case 4:r=t.sent,e.setState({isLoading:!1,countries:r.data,regionFilter:null,searchQuery:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.setState({hasError:!0,isLoading:!1,countries:[],regionFilter:null,searchQuery:null});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleDataChange=function(t,n){e.setState({isLoading:!0,countries:[],currentLoadedItems:0},(function(){t?"filter"===n?e.filterByRegion(t):e.filterByName(t):e.getCountries()}))},e.renderBody=function(){var t=e.state,n=t.countries,a=t.isLoading,r=t.hasError;return a?Object(g.jsx)("div",{className:"alt-state",children:Object(g.jsx)("div",{className:"spinner-border",role:"status",children:Object(g.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):n.length?e.renderCountries():r?Object(g.jsx)("div",{className:"alt-state",children:"Something went wrong"}):n.length||a?void 0:Object(g.jsx)("div",{className:"alt-state",children:"No countries found"})},e.loadMore=function(){e.setState((function(e){return{currentLoadedItems:e.currentLoadedItems+e.pageSize}}))},e.renderCountries=function(){var t=e.state,n=t.countries,a=t.pageSize,r=t.currentLoadedItems;return n.slice(0,r+a).map((function(e,t){return Object(g.jsx)("div",{className:"col-md-3 col-sm-4 col-12",children:Object(g.jsx)(y,{item:e})},"".concat(t,"-").concat(e.name))}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getCountries()}},{key:"getCountries",value:function(){var e=Object(O.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D("all/?fields=name;capital;region;population;flag");case 3:t=e.sent,this.setState({isLoading:!1,countries:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({hasError:!0,isLoading:!1,countries:[],regionFilter:null,searchQuery:null});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.isLoading,a=t.countries,r=t.pageSize,c=a.length>r;return Object(g.jsxs)("section",{className:"countries-list container",children:[Object(g.jsxs)("div",{className:"row countries-list__header ",children:[Object(g.jsx)("div",{className:"countries-list__search col-md-4 col-12",children:Object(g.jsx)(k,{isDisabled:n,onChangeHandler:function(t){return e.handleDataChange(t,"search")}})}),Object(g.jsx)("div",{className:"countries-list__filter col-md-3 col-12",children:Object(g.jsx)(C,{isDisabled:n,onChangeHandler:function(t){return e.handleDataChange(t,"filter")}})})]}),Object(g.jsx)("div",{className:"row gx-lg-5 gx-md-4 gx-1 gy-3",children:this.renderBody()}),c&&Object(g.jsx)("div",{className:"row gx-lg-5 gx-md-4 gx-1 gy-3",children:Object(g.jsx)("div",{className:"col-12 countries-list__load-more",children:Object(g.jsx)("button",{className:"btn main-btn",onClick:this.loadMore,children:"Load More"})})})]})}}]),n}(r.a.Component),F=(n(80),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,hasError:!1,country:null,borderCountries:[]},e.renderBody=function(){var t=e.state,n=t.country,a=t.isLoading,r=t.hasError;return a?Object(g.jsx)("div",{className:"alt-state",children:Object(g.jsx)("div",{className:"spinner-border",role:"status",children:Object(g.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):n?e.renderDetails():r?Object(g.jsx)("div",{className:"alt-state",children:"Something went wrong"}):n||a?void 0:Object(g.jsx)("div",{className:"alt-state",children:"No Data found"})},e.renderDetails=function(){var t=e.state,n=t.country,a=t.borderCountries,r=n.flag,c=n.name,s=n.nativeName,i=n.population,o=n.region,l=n.subregion,u=n.capital,d=n.topLevelDomain,h=n.currencies,j=n.languages;return Object(g.jsxs)("div",{className:"row gx-lg-5 gx-md-4 gx-1 gy-4",children:[Object(g.jsx)("div",{className:"col-md-6 col-12",children:Object(g.jsx)("img",{className:"country-details__flag",src:r,alt:c})}),Object(g.jsxs)("div",{className:"col-md-6 col-12 country-details__info-section",children:[Object(g.jsx)("div",{className:"country-details__name font--bold",children:c}),Object(g.jsxs)("div",{className:"row gx-lg-5 gx-md-4 gx-1 gy-4",children:[Object(g.jsxs)("div",{className:"col-md-6 col-12 ",children:[e.renderInfoItem("Native Name",s),e.renderInfoItem("Population",i),e.renderInfoItem("region",o),e.renderInfoItem("Sub Region",l),e.renderInfoItem("Capital",u)]}),Object(g.jsxs)("div",{className:"col-md-6 col-12 ",children:[e.renderInfoItem("Top Level Domain",d),e.renderInfoItem("Currencies",h),e.renderInfoItem("Languages",j)]})]}),Object(g.jsx)("div",{className:"row gx-lg-5 gx-md-4 gx-1 gy-4",children:Object(g.jsx)("div",{className:"col-12 ",children:e.renderBorderCountries(a)})})]})]})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.name;this.getDetails(e)}},{key:"getDetails",value:function(){var e=Object(O.a)(x.a.mark((function e(t){var n,a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c=t,D("".concat("name/").concat(c),{params:{fullName:!0}});case 3:if(n=e.sent,!(a=n.data&&n.data[0]).borders.length){e.next=11;break}return e.next=8,B(a.borders);case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=[];case 12:r=e.t0,this.setState({isLoading:!1,country:a,borderCountries:r.data}),e.next=19;break;case 16:e.prev=16,e.t1=e.catch(0),this.setState({hasError:!0,isLoading:!1,countries:null,borderCountries:[]});case 19:case"end":return e.stop()}var c}),e,this,[[0,16]])})));return function(t){return e.apply(this,arguments)}}()},{key:"renderInfoItem",value:function(e,t){if("object"!==typeof t)return Object(g.jsxs)("div",{className:"country-details__info",children:[Object(g.jsxs)("span",{className:"font--regular",children:[e,": "]}),Object(g.jsx)("span",{className:"font--light",children:t})]});var n="object"!==typeof t[0]?t.join(", "):t.map((function(e){return e.name})).join(", ");return Object(g.jsxs)("div",{className:"country-details__info",children:[Object(g.jsxs)("span",{className:"font--regular",children:[e,": "]}),Object(g.jsx)("span",{className:"font--light",children:n})]})}},{key:"renderBorderCountries",value:function(e){var t=e?e.map((function(e){return Object(g.jsx)("div",{className:"country-details__border-item",children:e.name},e.alpha3Code)})):Object(g.jsx)("div",{className:"country-details__border-item",children:"None"});return Object(g.jsxs)("div",{className:"country-details__borders",children:[Object(g.jsx)("span",{className:"font--regular",children:"Border Countries: "}),t]})}},{key:"render",value:function(){return Object(g.jsxs)("section",{className:"country-details container",children:[Object(g.jsx)("div",{className:"row gx-lg-5 gx-md-4 gx-1",children:Object(g.jsx)("div",{className:"col-4",children:Object(g.jsxs)(h.b,{className:"country-details__btn btn main-btn",to:"/",children:[Object(g.jsx)(m.a,{icon:b.a,className:"country-details__btn-icon"}),"Back"]})})}),this.renderBody()]})}}]),n}(r.a.Component)),E=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isDarkTheme:!1},e.toggleThemeHandler=function(){e.setState((function(e){return{isDarkTheme:!e.isDarkTheme}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.isDarkTheme;return Object(g.jsx)(h.a,{children:Object(g.jsxs)("div",{className:"countries-app ".concat(e?"dark-mode":""),children:[Object(g.jsx)(v,{isDark:e,toggleTheme:this.toggleThemeHandler}),Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{exact:!0,path:"/",children:Object(g.jsx)(T,{})}),Object(g.jsx)(j.a,{exact:!0,path:"/details/:name",render:function(e){return Object(g.jsx)(F,Object(i.a)({},e))}}),Object(g.jsx)(j.a,{path:"*",children:function(){return Object(g.jsx)("div",{className:"alt-state",children:"not found"})}})]})]})})}}]),n}(r.a.Component),A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(E,{})}),document.getElementById("root")),A()}},[[81,1,2]]]);
//# sourceMappingURL=main.4010e240.chunk.js.map