(this.webpackJsonpbluestack=this.webpackJsonpbluestack||[]).push([[0],{22:function(e){e.exports=JSON.parse('{"data":[{"name":"Auto Chess","region":"US","createdOn":"2019-12-01T08:08:55.917Z","price":[{"label":"1 Week","value":"$ 50.00"},{"label":"1 Month","value":"$ 100.00"},{"label":"6 Months","value":"$ 500.00"},{"label":"1 Year","value":"$ 900.00"}],"csv":"Some CSV link for Whatsapp","report":"Some report link for Whatsapp","image_url":"auto_chess.png"},{"name":"PUBG Mobile","region":"CA, FR","createdOn":"2019-12-14T08:08:55.917Z","price":[{"label":"1 Week","value":"$ 50.00"},{"label":"1 Month","value":"$ 100.00"},{"label":"6 Months","value":"$ 500.00"}],"csv":"Some CSV link for Super Jewels Quest","report":"Some report link for Super Jewels Ques","image_url":"pubg_mobile.png"},{"name":"Flow Free","region":"FR","createdOn":"2019-12-09T08:08:55.917Z","price":[{"label":"1 Week","value":"$ 500.00"},{"label":"1 Month","value":"$ 1000.00"},{"label":"6 Months","value":"$ 2500.00"},{"label":"1 Year","value":"$ 4000.00"}],"csv":"Some CSV link for Mole Slayer","report":"Some report link for Mole Slayer","image_url":"flow_free.png"},{"name":"Garena Free Fire","region":"JP","createdOn":"2019-12-10T08:08:55.917Z","price":[{"label":"1 Week","value":"$ 50.00"},{"label":"1 Month","value":"$ 100.00"},{"label":"6 Months","value":"$ 500.00"},{"label":"1 Year","value":"$ 900.00"}],"csv":"Some CSV link for Mancala Mix","report":"Some report link for Mancala Mix","image_url":"gerena_free_fire.png"},{"name":"Mortal Kombat","region":"FR","createdOn":"2019-12-14T08:08:55.917Z","price":[{"label":"1 Week","value":"$ 50.00"},{"label":"1 Month","value":"$ 100.00"},{"label":"6 Months","value":"$ 500.00"},{"label":"1 Year","value":"$ 900.00"}],"csv":"Some CSV link for Mole Slayer","report":"Some report link for Mole Slayer","image_url":"mortal_combat.png"},{"name":"Summoners War","region":"JP","createdOn":"2019-12-20T08:08:55.917Z","price":[{"label":"1 Week","value":"$ 20.00"},{"label":"1 Month","value":"$ 50.00"},{"label":"6 Months","value":"$ 200.00"},{"label":"1 Year","value":"$ 300.00"}],"csv":"Some CSV link for Mancala Mix","report":"Some report link for Mancala Mix","image_url":"summoners_war.png"},{"name":"Need For Speed No Limit","region":"FR","createdOn":"2019-12-21T08:08:55.917Z","price":[{"label":"1 Week","value":"$ 50.00"},{"label":"1 Month","value":"$ 100.00"},{"label":"6 Months","value":"$ 500.00"},{"label":"1 Year","value":"$ 900.00"}],"csv":"Some CSV link for Mole Slayer","report":"Some report link for Mole Slayer","image_url":"need_for_speed.png"},{"name":"Shadow Fight 3","region":"JP","createdOn":"2019-12-14T08:08:55.917Z","price":[{"label":"1 Week","value":"$ 50.00"},{"label":"1 Month","value":"$ 100.00"},{"label":"6 Months","value":"$ 500.00"},{"label":"1 Year","value":"$ 900.00"}],"csv":"Some CSV link for Mancala Mix","report":"Some report link for Mancala Mix","image_url":"shadow_fight3.png"}]}')},33:function(e,a,t){e.exports=t(50)},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},48:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),i=t.n(l),c=(t(38),t(39),t(28)),o=t(14),m=t(8),p=t(9),s=t(12),u=t(10),g=t(13),d=(t(40),function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("img",{src:window.location.origin+"/new-logo-white.png",className:"logo",alt:"header logo"})),r.a.createElement("div",null))}}]),a}(n.Component)),v=t(11),E=(t(45),t(22)),f=function(e){var a={campaignList:e.campaignLSData},t=new Date;switch(t.setHours(0,0,0,0),e.campaignType){case"UPCOMING":a.campaignList=a.campaignList.filter((function(e){var a=new Date(e.createdOn);return a.setHours(0,0,0,0),t<a}));break;case"LIVE":a.campaignList=a.campaignList.filter((function(e){var a=new Date(e.createdOn);return a.setHours(0,0,0,0),t.toString()===a.toString()}));break;case"PAST":a.campaignList=a.campaignList.filter((function(e){var a=new Date(e.createdOn);return a.setHours(0,0,0,0),t>a}))}return a},b=function(e){return function(a){a({type:"SET_SELECTED_CAMPAIGN",payload:e})}},h=(t(46),t(23)),S=t.n(h),O=function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"list-row"},r.a.createElement("div",null),r.a.createElement("div",{className:"list-data"},r.a.createElement("div",null,r.a.createElement("p",null,S()(this.props.campaignDetail.createdOn).format("MMM YYYY, DD")),r.a.createElement("small",null,S()(this.props.campaignDetail.createdOn).fromNow())),r.a.createElement("div",{className:"campaign-name"},r.a.createElement("div",null,r.a.createElement("img",{src:window.location.origin+"/"+this.props.campaignDetail.image_url,alt:"Campaign Image"})),r.a.createElement("div",null,r.a.createElement("p",null,this.props.campaignDetail.name),r.a.createElement("p",null,r.a.createElement("small",null,this.props.campaignDetail.region)))),r.a.createElement("div",null,r.a.createElement("a",{href:"javascript: void(0)",onClick:function(){return e.props.setSelectedCampaign(e.props.campaignDetail)}},r.a.createElement("img",{src:window.location.origin+"/price.png",className:"img"}),r.a.createElement("span",null,"View Price "))),r.a.createElement("div",null,r.a.createElement("a",{href:"javascript: void(0)"},r.a.createElement("img",{src:window.location.origin+"/file.png",className:"img"}),r.a.createElement("span",null,"CSV")),r.a.createElement("a",{href:"javascript: void(0)"},r.a.createElement("img",{src:window.location.origin+"/statistics-report.png",className:"img"}),r.a.createElement("span",null,"Report")),r.a.createElement("a",{href:"javascript: void(0)"},r.a.createElement("img",{src:window.location.origin+"/calendar.png",className:"img"}),r.a.createElement("span",null,"Schedule Again")))),r.a.createElement("div",null))}}]),a}(n.Component),y=Object(v.b)(null,(function(e){return{setSelectedCampaign:function(a){return e(b(a))}}}))(O),C=(t(48),function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"myModal",className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"compain-heading"},r.a.createElement("div",null,r.a.createElement("img",{src:window.location.origin+"/"+this.props.selectedCampaign.image_url,alt:"Campaign Img"})),r.a.createElement("div",null,r.a.createElement("p",null,this.props.selectedCampaign.name),r.a.createElement("small",null,this.props.selectedCampaign.region))),r.a.createElement("h1",null,"Pricing"),this.props.selectedCampaign.price.map((function(e,a){return r.a.createElement("div",{className:"pricing",key:a},r.a.createElement("div",null,e.label),r.a.createElement("div",null,e.value))})),r.a.createElement("div",{align:"center"},r.a.createElement("button",{type:"button",className:"btn",onClick:this.props.setSelectedCampaignToNull},"Close"))))}}]),a}(n.Component)),M=Object(v.b)(null,(function(e){return{setSelectedCampaignToNull:function(){return e(b(null))}}}))(C),w=function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(s.a)(this,Object(u.a)(a).call(this))).changeTab=function(a){a.target.dataset.type&&e.props.updateCampaignType(a.target.dataset.type)},e.state={redirect:!1,id:""},e}return Object(g.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.getCampaignList()}},{key:"render",value:function(){return r.a.createElement("div",{className:"campaign-container"},r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Manage Campaigns")),r.a.createElement("div",{className:"tab-container",onClick:this.changeTab},r.a.createElement("div",{className:"tab-item ' ".concat("UPCOMING"===this.props.campaignType?"active":""),"data-type":"UPCOMING"},r.a.createElement("a",{href:"javascript: void(0)",className:"UPCOMING"===this.props.campaignType?"active":"","data-type":"UPCOMING"},"Upcoming Campaigns")),r.a.createElement("div",{className:"tab-item ' ".concat("LIVE"===this.props.campaignType?"active":""),"data-type":"LIVE"},r.a.createElement("a",{href:"javascript: void(0)",className:"LIVE"===this.props.campaignType?"active":"","data-type":"LIVE"},"Live Campaigns")),r.a.createElement("div",{className:"tab-item ' ".concat("PAST"===this.props.campaignType?"active":""),"data-type":"PAST"},r.a.createElement("a",{href:"javascript: void(0)",className:"PAST"===this.props.campaignType?"active":"","data-type":"PAST"},"Past Campaigns"))),r.a.createElement("div",{className:"data-container"},r.a.createElement("div",{className:"list-caption"},r.a.createElement("div",null,"DATE"),r.a.createElement("div",null,"CAMPAIGN"),r.a.createElement("div",null,"VIEW"),r.a.createElement("div",null,"ACTIONS")),this.props.campaignList.map((function(e,a){return r.a.createElement(y,{campaignDetail:e,key:a})})),this.props.selectedCampaign?r.a.createElement(M,{selectedCampaign:this.props.selectedCampaign}):"")),r.a.createElement("div",null))}}]),a}(n.Component),T=Object(v.b)((function(e){return{campaignList:e.campaignReducer.campaignList,campaignType:e.campaignReducer.campaignType,selectedCampaign:e.campaignReducer.selectedCampaign}}),(function(e){return{getCampaignList:function(){return e((function(e,a){if(!localStorage.getItem("campaignList")){for(var t=[],n=0;n<E.data.length;n++){var r=E.data[n];t.push(r)}localStorage.setItem("campaignList",JSON.stringify(t))}var l=a().campaignReducer;e({type:"GET_USER_LIST",payload:{campaignList:f(l).campaignList}})}))},updateCampaignType:function(a){return e(function(e){return function(a,t){a({type:"UPDATE_CAMPAIGN_TYPE",payload:e});var n=t().campaignReducer;a({type:"GET_USER_LIST",payload:{campaignList:f(n).campaignList}})}}(a))}}}))(w);var j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(c.a,null,r.a.createElement(o.a,{path:"/",exact:!0,strict:!0,render:function(){return r.a.createElement(T,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=t(15),k=t(30),L=t(31),P=t(32);function _(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function $(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?_(Object(t),!0).forEach((function(a){Object(P.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var I={campaignList:[],campaignType:"UPCOMING",selectedCampaign:null,campaignLSData:JSON.parse(localStorage.getItem("campaignList"))},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,a=arguments.length>1?arguments[1]:void 0,t=$({},e);switch(a.type){case"GET_USER_LIST":return $({},e,{campaignList:a.payload.campaignList});case"UPDATE_CAMPAIGN_TYPE":return $({},e,{campaignType:a.payload});case"SET_SELECTED_CAMPAIGN":return $({},e,{selectedCampaign:a.payload});default:return t}},A=Object(N.c)({campaignReducer:D}),G=function(){return Object(N.d)(A,Object(N.a)(k.a,L.logger))};i.a.render(r.a.createElement(v.a,{store:G()},r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.70e01522.chunk.js.map