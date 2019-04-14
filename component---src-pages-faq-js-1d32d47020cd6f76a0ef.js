(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{135:function(e,t,n){"use strict";n.r(t);var a=n(601),i=n(141),o=n(251),r=n(142),l=n(156),s=n(163),c=n(0),u=n.n(c),f=n(162),p=n(179),d=n(153),g=n.n(d);t.default=function(){return u.a.createElement(s.a,null,u.a.createElement(f.a,{title:"FAQ | Full Stack Open 2019",description:"Usein kysytyt kysymykset",keywords:[].concat(g.a,["faq","frequently asked questions","ukk","usein kysytyt kysymykset"])}),u.a.createElement(r.a,{className:"container link spacing spacing--after"},u.a.createElement(p.a,{className:"spacing--after-small",headingLevel:"h1",text:"Usein kysytyt kysymykset"}),u.a.createElement(i.StaticQuery,{query:"10433134",render:function(e){var t=e.allFaqJson.edges;return u.a.createElement(u.a.Fragment,null,t.map(function(e){var t=e.node;return u.a.createElement(o.a,{track:!0,key:t.title,title:t.title,content:t.text})}))},data:a})),u.a.createElement(l.a,null))}},147:function(e,t,n){"use strict";n.d(t,"a",function(){return f});n(28),n(164);var a=n(143),i=n.n(a),o=(n(166),n(174)),r=n.n(o),l=n(4),s=n.n(l),c=n(0),u=n.n(c),f=function(e){var t=e.text,n=e.className,a=e.heading,o=e.headingFontSize,l=e.bold,s=e.centered,c=e.noPadding,f=e.headingFont,p=i()(e,["text","className","heading","headingFontSize","bold","centered","noPadding","headingFont"]),d=[];s&&d.push("centered"),l&&d.push("bold"),c&&d.push("body-text--no-padding"),f&&d.push("heading-font");return u.a.createElement("div",Object.assign({className:"body-text "+n},p),a.title&&function(){if(a){var e=a.level;return u.a.createElement(e,{className:"body-text__title",style:o?{fontSize:o}:{}},a.title)}return null}(),t&&"string"==typeof t?u.a.createElement("p",{className:"body-text__content "+d.join(" ")},t):t&&t.map(function(e){return u.a.createElement("div",{key:e,className:"body-text__content "+d.join(" ")},r()(e))}))};f.defaultProps={heading:{title:"",level:"h2"},text:"",className:"",centered:!1,bold:!1,noPadding:!1},f.propTypes={heading:s.a.shape({text:s.a.string,level:s.a.string}),headingFontSize:s.a.string,text:s.a.oneOfType([s.a.string,s.a.array]),className:s.a.string,centered:s.a.bool,bold:s.a.bool,noPadding:s.a.bool}},153:function(e,t){e.exports=["fullstack","full stack open 2019","course","helsingin yliopisto","tietojenkäsittelytieteen osasto","mooc","mooc.fi","full stack","full stack open","web-sovelluskehitys","web","houston","houston inc","websovelluskehitys","web-sovellus","React","Redux","Node.js","Node","MongoDB","GraphQL","REST","REST api","single page -sovellus","ohjelmointi"]},156:function(e,t,n){"use strict";n(157);var a=n(142),i=n(145),o=n(141),r=n(0),l=n.n(r),s=n(152),c=n.n(s),u=n(160),f=n(148),p=[{src:n.n(f).a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:c.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];t.a=function(){return l.a.createElement(a.a,{id:"footer",className:"container spacing--after-small spacing--mobile",flex:!0},l.a.createElement(a.a,{className:"col-5 push-right-3 col-10--mobile order-2--mobile order-2--tablet footer__links",flex:!0,spaceBetween:!0},p.map(function(e){return l.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},l.a.createElement(i.a,{contain:!0,src:e.src,alt:e.alt,className:"col-6"}))})),l.a.createElement(a.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile order-1--tablet footer__navigation"},l.a.createElement("div",{className:"footer__navigation-link-container"},u.b.map(function(e){return l.a.createElement(o.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover",style:{marginLeft:"4.5rem"}},e.text)}))))}},157:function(e,t,n){},166:function(e,t,n){},179:function(e,t,n){"use strict";n.d(t,"a",function(){return c});n(28);var a=n(143),i=n.n(a),o=(n(180),n(4)),r=n.n(o),l=n(0),s=n.n(l),c=function(e){var t=e.className,n=e.headingLevel,a=void 0===n?"h2":n,o=e.headingFontSize,r=e.text,l=i()(e,["className","headingLevel","headingFontSize","text"]),c=a;return s.a.createElement(c,Object.assign({className:"sub-header "+t,style:o?{fontSize:o}:{}},l),r)};c.propTypes={className:r.a.string,headingLevel:r.a.string,text:r.a.string.isRequired,headingFontSize:r.a.string},c.defaultProps={className:""}},180:function(e,t,n){},251:function(e,t,n){"use strict";var a=n(6),i=n.n(a),o=(n(252),n(0)),r=n.n(o),l=n(147),s=n(141),c=n(4),u=n.n(c),f=n(256);f.a.initialize("UA-135975842-1");var p=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOpened:!1},n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.initiallyOpened&&this.setState({isOpened:!0})},n.handleClick=function(){var e=this.state.isOpened,t=this.props,n=t.title,a=t.track;this.setState({isOpened:!e},function(){a&&f.a.event({category:"FAQ",action:n+" "+(e?"closed":"expanded")})})},n.render=function(){var e=this,t=this.props,n=t.title,a=t.content,i=t.className,o=t.containerClassName,c=t.list,u=t.titleStyle,f=this.state.isOpened;return r.a.createElement("div",{className:"accordion__container col-8 push-right-1 "+o},r.a.createElement("button",{className:"accordion accordion__title "+(f?"active":"")+" "+i,style:u,onClick:function(){return e.handleClick()}},n),r.a.createElement("div",{className:"panel",style:{padding:f?"2rem 18px":"",maxHeight:""+(f?"unset":0),transition:"max-height 0.2s ease-out"}},a&&r.a.createElement(l.a,{className:"col-8 push-right-1",text:a}),c&&r.a.createElement("ul",null,c.map(function(e){return r.a.createElement("li",{key:e.text},r.a.createElement(s.Link,{to:e.href},e.text))}))))},t}(o.Component);p.propTypes={title:u.a.string.isRequired,track:u.a.bool,content:u.a.oneOfType([u.a.string,u.a.array]),list:u.a.array,className:u.a.string,containerClassName:u.a.string,initiallyOpened:u.a.bool,titleStyle:u.a.object},p.defaultProps={className:"",track:!1,containerClassName:"",initiallyOpened:!1,titleStyle:{}},t.a=p},252:function(e,t,n){},256:function(e,t,n){"use strict";function a(e){return e.replace(/^\s+|\s+$/g,"")}var i=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function o(e){console.warn("[react-ga]",e)}var r="REDACTED (Potential Email Address)";function l(e,t){return function(e){return/[^@]+@[^@]+/.test(e)}(e)?(o("This arg looks like an email address, redacting."),r):t?a(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(i)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}):e}var s=function(e){var t,n,a,i,o,r,l,s="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?s=e.gaAddress:e&&e.debug&&(s="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,a="script",i=s,o="ga",t.GoogleAnalyticsObject=o,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,r=n.createElement(a),l=n.getElementsByTagName(a)[0],r.async=1,r.src=i,l.parentNode.insertBefore(r,l)};function c(e){console.info("[react-ga]",e)}var u=[],f={calls:u,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];u.push(t.concat())},resetCalls:function(){u.length=0}},p=n(0),d=n.n(p),g=n(4),y=n.n(g);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j="_blank",x=1,E=function(e){function t(){var e,n,a,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return a=this,i=(e=v(t)).call.apply(e,[this].concat(r)),n=!i||"object"!==m(i)&&"function"!=typeof i?w(a):i,O(w(w(n)),"handleClick",function(e){var a=n.props,i=a.target,o=a.eventLabel,r=a.to,l=a.onClick,s={label:o},c=i!==j,u=!(e.ctrlKey||e.shiftKey||e.metaKey||e.button===x);c&&u?(e.preventDefault(),t.trackLink(s,function(){window.location.href=r})):t.trackLink(s,function(){}),l&&l(e)}),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,p["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){O(e,t,n[t])})}return e}({},h(e,["to"]),{href:t,onClick:this.handleClick});return this.props.target===j&&(n.rel="noopener noreferrer"),delete n.eventLabel,d.a.createElement("a",n)}}])&&b(n.prototype,a),i&&b(n,i),t}();function S(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}O(E,"trackLink",function(){o("ga tracking not enabled")}),O(E,"propTypes",{eventLabel:y.a.string.isRequired,target:y.a.string,to:y.a.string,onClick:y.a.func}),O(E,"defaultProps",{target:null,to:null,onClick:null});var P=!1,T=!0,q=!1,C=!0,L=function(){var e;return q?f.ga.apply(f,arguments):"undefined"!=typeof window&&(window.ga?(e=window).ga.apply(e,arguments):o("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function F(e){return l(e,T)}function D(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var i=n[0];if("function"==typeof L){if("string"!=typeof i)return void o("ga command must be a string");!C&&Array.isArray(e)||L.apply(void 0,n),Array.isArray(e)&&e.forEach(function(e){L.apply(void 0,_(["".concat(e,".").concat(i)].concat(n.slice(1))))})}}function z(e,t){e?(t&&(t.debug&&!0===t.debug&&(P=!0),!1===t.titleCase&&(T=!1)),t&&t.gaOptions?L("create",e,t.gaOptions):L("create",e,"auto")):o("gaTrackingID is required in initialize()")}function J(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(L.apply(void 0,t),P&&(c("called ga('arguments');"),c("with arguments: ".concat(JSON.stringify(t))))),window.ga}function I(e,t){D(t,"send",e),P&&(c("called ga('send', fieldObject);"),c("with fieldObject: ".concat(JSON.stringify(e))),c("with trackers: ".concat(JSON.stringify(t))))}var M={require:function(e,t){if(e){var n=a(e);if(""!==n)if(t){if("object"!==A(t))return void o("Expected `options` arg to be an Object");0===Object.keys(t).length&&o("Empty `options` given to .require()"),J("require",n,t),P&&c("called ga('require', '".concat(n,"', ").concat(JSON.stringify(t)))}else J("require",n),P&&c("called ga('require', '".concat(n,"');"));else o("`name` cannot be an empty string in .require()")}else o("`name` is required in .require()")},execute:function(e,t){var n,a;if(1==(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(a=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!=typeof e)o("Expected `pluginName` arg to be a String.");else if("string"!=typeof t)o("Expected `action` arg to be a String.");else{var i="".concat(e,":").concat(t);n=n||null,a&&n?(J(i,a,n),P&&(c("called ga('".concat(i,"');")),c('actionType: "'.concat(a,'" with payload: ').concat(JSON.stringify(n))))):n?(J(i,n),P&&(c("called ga('".concat(i,"');")),c("with payload: ".concat(JSON.stringify(n))))):(J(i),P&&c("called ga('".concat(i,"');")))}}};function R(e,t,n){if("function"==typeof t)if(e&&e.label){var a={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:F(e.label)},i=!1,r=setTimeout(function(){i=!0,t()},250);a.hitCallback=function(){clearTimeout(r),i||t()},I(a,n)}else o("args.label is required in outboundLink()");else o("hitCallback function is required")}E.origTrackLink=E.trackLink,E.trackLink=R;var K=E;t.a={initialize:function(e,t){if(t&&!0===t.testMode)q=!0;else{if("undefined"==typeof window)return!1;t&&!0===t.standardImplementation||s(t)}return C=!t||"boolean"!=typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach(function(e){"object"===A(e)?z(e.trackingId,e):o("All configs must be an object")}):z(e,t),!0},ga:J,set:function(e,t){e?"object"===A(e)?(0===Object.keys(e).length&&o("empty `fieldsObject` given to .set()"),D(t,"set",e),P&&(c("called ga('set', fieldsObject);"),c("with fieldsObject: ".concat(JSON.stringify(e))))):o("Expected `fieldsObject` arg to be an Object"):o("`fieldsObject` is required in .set()")},send:I,pageview:function(e,t,n){if(e){var i=a(e);if(""!==i){var r={};if(n&&(r.title=n),D(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){N(e,t,n[t])})}return e}({hitType:"pageview",page:i},r)),P){c("called ga('send', 'pageview', path);");var l="";n&&(l=" and title: ".concat(n)),c("with path: ".concat(i).concat(l))}}else o("path cannot be an empty string in .pageview()")}else o("path is required in .pageview()")},modalview:function(e,t){if(e){var n,i="/"===(n=a(e)).substring(0,1)?n.substring(1):n;if(""!==i){var r="/modal/".concat(i);D(t,"send","pageview",r),P&&(c("called ga('send', 'pageview', path);"),c("with path: ".concat(r)))}else o("modalName cannot be an empty string or a single / in .modalview()")}else o("modalName is required in .modalview(modalName)")},timing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,a=e.value,i=e.label,r=arguments.length>1?arguments[1]:void 0;if(t&&n&&a&&"number"==typeof a){var l={hitType:"timing",timingCategory:F(t),timingVar:F(n),timingValue:a};i&&(l.timingLabel=F(i)),I(l,r)}else o("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")},event:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,a=e.label,i=e.value,r=e.nonInteraction,l=e.transport,s=S(e,["category","action","label","value","nonInteraction","transport"]),c=arguments.length>1?arguments[1]:void 0;if(t&&n){var u={hitType:"event",eventCategory:F(t),eventAction:F(n)};a&&(u.eventLabel=F(a)),void 0!==i&&("number"!=typeof i?o("Expected `args.value` arg to be a Number."):u.eventValue=i),void 0!==r&&("boolean"!=typeof r?o("`args.nonInteraction` must be a boolean."):u.nonInteraction=r),void 0!==l&&("string"!=typeof l?o("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(l)&&o("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),u.transport=l)),Object.keys(s).filter(function(e){return"dimension"===e.substr(0,"dimension".length)}).forEach(function(e){u[e]=s[e]}),Object.keys(s).filter(function(e){return"metric"===e.substr(0,"metric".length)}).forEach(function(e){u[e]=s[e]}),I(u,c)}else o("args.category AND args.action are required in event()")},exception:function(e,t){var n=e.description,a=e.fatal,i={hitType:"exception"};n&&(i.exDescription=F(n)),void 0!==a&&("boolean"!=typeof a?o("`args.fatal` must be a boolean."):i.exFatal=a),I(i,t)},plugin:M,outboundLink:R,OutboundLink:K,testModeAPI:f}},601:function(e){e.exports={data:{allFaqJson:{edges:[{node:{title:"Miten kurssille ilmoittaudutaan?",text:["Kurssille ei tarvitse varsinaisesti ilmoittautua ennen kuin haluat tehdä kurssin kokeen. Koe tehdään Avoimen yliopiston Moodle-järjestelmään. Katso lisää <a href='/osa0/yleista#arvosteluperusteet'>täältä</a>."]}},{node:{title:"Mikä on kurssin laajuus?",text:["Kurssin laajuus on <a href='osa0/yleista#arvosteluperusteet'>riippuen tekemiesi tehtävien määrästä</a>  3-8 opintopistettä. Suoritettuasi kurssin voit jatkaa aihepiiriin syventymistä 1-10 opintopisteen laajuisessa <a href='/osa0/yleista#full-stack-harjoitustyo'>Full stack -harjoitustyön</a> parissa."]}},{node:{title:"Milloin on tehtävien ja kokeen deadline?",text:["Etenemisnopeus on vapaa, kurssilla on ainoastaan yksi deadline sekä tehtäville että kokeelle 10.1.2020 klo 23.59.59. Kannattaa kuitenkin huomata, että kurssille on ilmoittauduttava viimeistään deadliea edeltävänä päivänä 9.1.2020."]}},{node:{title:"Miten tehtävät palautetaan?",text:["Tehtävät palautetaan GitHubin kautta ja merkitsemällä tehdyt tehtävät palautussovellukseen, lue lisää <a href='/osa0/yleista#tehtavien-palauttaminen'>täältä</a>."]}},{node:{title:"Pitääkö jokainen osa palauttaa omaan repositorioon?",text:["Ei. Voit käyttää yhtä tai useampaa repositoriota, tärkeintä että asiat repositorion sisällä ovat selkeästi nimettyjä."]}},{node:{title:"Voinko muokata tekemääni palautusta?",text:["Et. Kaikki osan tehtävät on palautettava kerralla. Jos merkkasit tehtäviä vahingossa väärin tai typotit repositorion nimen, lähetä mailia osoitteeseen matti.luukkainen@helsinki.fi"]}},{node:{title:"Voinko laajentaa aiempaa kurssisuoritustani?",text:["Voit, lue lisää <a href='/osa0/yleista#aiemmin-suoritetun-kurssin-taydentaminen'>täältä</a>"]}},{node:{title:"Suoritin kurssin viime vuonna. Miten opin käyttämään React hookeja?",text:["State hookia, eli tapaa määritellä tila funktionaalisille komponenteille käsitellään <a href='/osa1/komponentin_tila_ja_tapahtumankasittely/#tilallinen-komponentti'>osassa 1</a>. Lifecycle-metodien roolia hoitavia effect hookeja käsitellään <a href='/osa2/palvelimella_olevan_datan_hakeminen#effect-hookit'>osassa 2</a>. Custom hookeista puhutaan <a href='/osa5/custom_hookit'>osassa 5</a>"]}},{node:{title:"Kuulin että suorittamalla kurssin on mahdollista päästä työhaastatteluun",text:["Pitää paikkansa, jos suoritat täydellä laajuudella kurssin ja siihen liittyvän 10 op:n laajuisen harjoitustyön, pääset yhteistyökumppaniemme työhaastatteluun, lue lisää <a href='/osa0/yleista#haastattelulupaus'>täältä</a>."]}},{node:{title:"Will there be an English translation of the course?",text:["Yes, it will be released Monday 3.6.2019!"]}}]}}}}}]);
//# sourceMappingURL=component---src-pages-faq-js-1d32d47020cd6f76a0ef.js.map