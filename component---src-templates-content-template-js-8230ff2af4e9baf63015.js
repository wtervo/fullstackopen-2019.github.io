(window.webpackJsonp=window.webpackJsonp||[]).push([[19,2],{145:function(e,a,t){"use strict";t.r(a);t(156),t(70),t(436);var n=t(6),r=t.n(n),i=(t(598),t(0)),o=t.n(i),l=t(294),s=t(301),c=t.n(s),u=t(152),M=(t(599),t(147)),g=t(4),N=t.n(g),m=function(e){var a=e.part,t=e.letter,n=e.lang,r="en"===n?"part"+a:"osa"+a;return o.a.createElement(M.a,{flex:!0,className:"container spacing",centered:!0},o.a.createElement("a",{className:"edit-link",target:"__BLANK",href:"https://github.com/fullstackopen-2019/fullstackopen-2019.github.io/edit/source/src/content/"+a+"/"+n+"/"+r+t+".md"},o.a.createElement("span",null,"en"===n?"Propose changes to material":"Ehdota muutosta materiaalin sisältöön")))};m.propTypes={part:N.a.number.isRequired,letter:N.a.string.isRequired,lang:N.a.string.isRequired};var p=m,d=t(159),D=t(161),y=t(239),T=t.n(y),j=t(326),h=(t(151),t(158),t(160)),E=(t(600),t(244)),f=t(146),w=t(601),z=t.n(w),k=t(213),I=t.n(k),v=t(240),x=t.n(v),b=function(e){function a(a){var t;return(t=e.call(this,a)||this).componentDidMount=function(){var e=Array.from(document.querySelectorAll("h3")),a=document.querySelector("h1"),n=e.map(function(e){return e.id=z()(e.innerText),e.classList.add("offset"),{text:e.innerText,id:e.id,level:e.nodeName}});t.setState({headings:n,h1Top:a.offsetTop})},t.loopThroughPartsNode=function(e){var a=t.state.headings,n=t.props,r=n.part,i=n.letter,l=n.currentPath,s=n.currentPartTitle,c=n.colorCode,u=n.lang,M=[];for(var g in e)s!==e[g]?M.push(o.a.createElement(f.Link,{key:g,className:"left-navigation-link",style:{borderColor:c},to:"/"+("en"===u?"en/part":"osa")+r+"/"+x()(e[g])},g+" "+e[g])):M.push(o.a.createElement(E.a,{containerClassName:"accordion--side-navigation",style:{color:c},titleStyle:{backgroundColor:c,borderColor:c},initiallyOpened:!0,key:g,title:i+" "+e[g],list:a.map(function(e){return{href:l+"#"+e.id,text:e.text}})}));return M},t.state={h1Top:0,headings:[]},t}return r()(a,e),a.prototype.render=function(){var e=this.props.part;return o.a.createElement(M.a,{tag:"ul",flex:!0,dirColumn:!0,className:"scroll-navigation "+this.props.className},this.loopThroughPartsNode(I.a[this.props.lang][e]))},a}(i.Component);b.defaultProps={className:"",lang:"fi"},b.propTypes={className:N.a.string,lang:N.a.string.isRequired,colorCode:N.a.string.isRequired};var L=b,O=t(219),C=t(154),A=t(324),S=t.n(A),Y=t(233),Q=t.n(Y),U=t(157),B=t.n(U),_=t(361),P=t(293),R=t.n(P);t.d(a,"default",function(){return G}),t.d(a,"contentPageQuery",function(){return q});var G=function(e){function a(a){var t;return(t=e.call(this,a)||this).handleScroll=function(){t.setState({top:window.scrollY})},t.state={h1Top:0,h1Title:"",otherTitles:"",top:0},t}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=Array.from(document.querySelectorAll("a")),a=document.querySelector("h1"),t=document.querySelectorAll("h3"),n=Array.from(t).map(function(e){return e.innerText}),r=this.props.data.markdownRemark.frontmatter;e.map(function(e){return e.style="border-color: "+C[_.a[r.part]],e.classList.contains("language-switcher__language")?e.target=e.target:e.target="_blank",e.onmouseover=function(){e.style.backgroundColor=C[_.a[r.part]]},e.onmouseleave=function(){e.style.backgroundColor="transparent"},null}),this.setState({h1Top:a.offsetTop,h1Title:a.innerText,otherTitles:[].concat(n)}),window.addEventListener("scroll",this.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},t.render=function(){var e=this.props.data.markdownRemark,a=e.frontmatter,t=e.html,n=a.mainImage,r=a.letter,i=a.part,s=a.lang,g=C[_.a[i]],N={replace:function(e){var a=e.type,t=e.name,n=e.attribs,r=e.children;return"tag"===a&&"picture"===t?o.a.createElement("picture",null,o.a.createElement("img",{style:{borderColor:g},alt:"fullstack content",src:r[0].attribs.src})):"tag"===a&&"pre"===t?o.a.createElement("pre",null,S()(r,N)):"tag"===a&&"content"===n.class?o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"course-content col-6 push-right-3"},S()(r,N))):"tag"===a&&"tasks"===n.class?o.a.createElement(u.a,{style:{backgroundColor:g},className:"spacing spacing--after tasks"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"course-content col-6 push-right-3",style:{borderColor:g,backgroundColor:"transparent"}},"pre"===r.name?o.a.createElement("pre",null,S()(r,N)):S()(r,N)))):void 0}};return o.a.createElement(D.a,null,o.a.createElement(h.a,{lang:s,title:"Fullstack "+("en"===s?"part":"osa")+i+" | "+this.state.h1Title,description:Q.a[s],keywords:[].concat(B.a,[this.state.h1Title],this.state.otherTitles)}),this.state.top>300&&o.a.createElement("div",{className:"arrow-go-up",onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})}},o.a.createElement("img",{src:c.a,alt:"arrow-up"})),o.a.createElement("div",{className:"course-container spacing--after"},o.a.createElement(u.a,{className:"part-main__banner spacing--mobile--small",backgroundColor:g,style:{backgroundImage:"url("+R.a.resolve(n.publicURL)+")",backgroundColor:g}},o.a.createElement("div",{className:"container spacing--after"},o.a.createElement(l.a,{className:"breadcrumb",content:[{backgroundColor:g,text:"Fullstack",link:"/"+("en"===s?"en/":"")+"#course-contents"},{backgroundColor:g,text:("en"===s?"part":"osa")+" "+i,link:"en"===s?"/en/part"+i:"/osa"+i},{backgroundColor:C.black,text:I.a[s][i][r]}]}))),o.a.createElement(M.a,{className:"course"},o.a.createElement(M.a,{flex:!0,className:"container",relative:!0},o.a.createElement(L,{part:i,letter:r,lang:s,currentPartTitle:I.a[s][i][r],currentPath:"/"+("en"===s?"en/part":"osa")+i+"/"+x()(I.a[s][i][r]),colorCode:g,className:"col-2 spacing",style:{top:this.state.h1Top}}),o.a.createElement(M.a,{className:"course-content col-6 push-right-3",autoBottomMargin:!0},o.a.createElement("p",{className:"col-1 letter",style:{borderColor:g}},r),o.a.createElement(O.a,{headingLevel:"h1",text:I.a[s][i][r]}))),T()(t,N)),!1,o.a.createElement(p,{part:i,letter:r,lang:s}),o.a.createElement(j.a,{part:i,letter:r,lang:s})),o.a.createElement(d.a,{lang:s}))},a}(i.Component),q="1861846353"},146:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return m}),t.d(a,"StaticQueryContext",function(){return g}),t.d(a,"StaticQuery",function(){return N});var n=t(0),r=t.n(n),i=t(4),o=t.n(i),l=t(150),s=t.n(l);t.d(a,"Link",function(){return s.a}),t.d(a,"withPrefix",function(){return l.withPrefix}),t.d(a,"navigate",function(){return l.navigate}),t.d(a,"push",function(){return l.push}),t.d(a,"replace",function(){return l.replace}),t.d(a,"navigateTo",function(){return l.navigateTo});var c=t(231),u=t.n(c);t.d(a,"PageRenderer",function(){return u.a});var M=t(31);t.d(a,"parsePath",function(){return M.a});var g=r.a.createContext({}),N=function(e){return r.a.createElement(g.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}N.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,a,t){"use strict";t(28);var n=t(148),r=t.n(n),i=(t(255),t(4)),o=t.n(i),l=t(0),s=t.n(l),c=function(e){var a=e.Tag,t=e.children,n=e.className,i=e.flex,o=e.dirColumn,l=e.spaceAround,c=e.spaceBetween,u=e.centered,M=e.autoMargin,g=e.autoBottomMargin,N=e.horizontalHalf,m=e.flexStart,p=e.noWrap,d=e.centeredInDesktop,D=e.relative,y=r()(e,["Tag","children","className","flex","dirColumn","spaceAround","spaceBetween","centered","autoMargin","autoBottomMargin","horizontalHalf","flexStart","noWrap","centeredInDesktop","relative"]),T=[];return i&&T.push("element--flex"),M&&T.push("element--auto-margin"),g&&T.push("element--auto-bottom-margin"),o&&T.push("element--column"),l&&T.push("element--space-around"),c&&T.push("element--space-between"),u&&T.push("element--centered"),N&&T.push("element--horizontal-half"),m&&T.push("element--flex-start"),p&&T.push("element--no-wrap"),d&&T.push("element--centered-in-desktop"),D&&T.push("element--relative"),s.a.createElement(a,Object.assign({className:n+" "+T.join(" ")},y),t)};c.defaultProps={className:"",Tag:"div"},c.propTypes={Tag:o.a.string,children:o.a.node,className:o.a.string,flex:o.a.bool,spaceAround:o.a.bool,spaceBetween:o.a.bool,dirColumn:o.a.bool,centered:o.a.bool,horizontalHalf:o.a.bool,autoMargin:o.a.bool,autoBottomMargin:o.a.bool,flexStart:o.a.bool,noWrap:o.a.bool,centeredInDesktop:o.a.bool,relative:o.a.bool},a.a=c},149:function(e,a,t){"use strict";t.d(a,"a",function(){return c});t(28),t(238);var n=t(148),r=t.n(n),i=(t(257),t(4)),o=t.n(i),l=t(0),s=t.n(l),c=function(e){var a=e.src,t=e.alt,n=(e.hover,e.className),i=e.overlay,o=e.contain,l=e.circle,c=e.extraSmall,u=e.small,M=e.medium,g=e.large,N=e.fullWidth,m=e.actualSize,p=e.squareBig,d=r()(e,["src","alt","hover","className","overlay","contain","circle","extraSmall","small","medium","large","fullWidth","actualSize","squareBig"]),D=[];return o&&D.push("image--contain"),N&&D.push("image--full-width"),l&&D.push("image--circle"),c&&D.push("image--extra-small"),u&&D.push("image--small"),M&&D.push("image--medium"),g&&D.push("image--large"),p&&D.push("image--square-big"),m&&D.push("image--acctual-size"),s.a.createElement("div",Object.assign({className:"image "+n+" "+D.join(" ")},d),s.a.createElement("div",{className:"image__container"},s.a.createElement("img",{style:{backgroundColor:i,backgroundOpacity:"0.5"},className:"image__content",src:a,alt:t})))};c.defaultProps={src:"",alt:"",overlay:"",className:""},c.propTypes={overlay:o.a.string,src:o.a.oneOfType([o.a.string,o.a.object]),alt:o.a.oneOfType([o.a.string,o.a.array]),hover:o.a.string,className:o.a.string,contain:o.a.bool,circle:o.a.bool,extraSmall:o.a.bool,small:o.a.bool,medium:o.a.bool,large:o.a.bool,squareBig:o.a.bool,fullWidth:o.a.bool,actualSize:o.a.bool}},151:function(e,a,t){"use strict";t.d(a,"a",function(){return M});t(28),t(237);var n=t(148),r=t.n(n),i=(t(216),t(239)),o=t.n(i),l=t(4),s=t.n(l),c=t(0),u=t.n(c),M=function(e){var a=e.text,t=e.className,n=e.heading,i=e.headingFontSize,l=e.bold,s=e.centered,c=e.noPadding,M=e.headingFont,g=r()(e,["text","className","heading","headingFontSize","bold","centered","noPadding","headingFont"]),N=[];s&&N.push("centered"),l&&N.push("bold"),c&&N.push("body-text--no-padding"),M&&N.push("heading-font");return u.a.createElement("div",Object.assign({className:"body-text "+t},g),n.title&&function(){if(n){var e=n.level;return u.a.createElement(e,{className:"body-text__title",style:i?{fontSize:i}:{}},n.title)}return null}(),a&&"string"==typeof a?u.a.createElement("p",{className:"body-text__content "+N.join(" ")},a):a&&a.map(function(e){return u.a.createElement("div",{key:e,className:"body-text__content "+N.join(" ")},o()(e))}))};M.defaultProps={heading:{title:"",level:"h2"},text:"",className:"",centered:!1,bold:!1,noPadding:!1},M.propTypes={heading:s.a.shape({text:s.a.string,level:s.a.string}),headingFontSize:s.a.string,text:s.a.oneOfType([s.a.string,s.a.array]),className:s.a.string,centered:s.a.bool,bold:s.a.bool,noPadding:s.a.bool}},152:function(e,a,t){"use strict";t.d(a,"a",function(){return c});t(28);var n=t(148),r=t.n(n),i=(t(162),t(4)),o=t.n(i),l=t(0),s=t.n(l),c=function(e){var a=e.className,t=e.backgroundColor,n=r()(e,["className","backgroundColor"]),i=t?{backgroundColor:t}:null;return s.a.createElement("div",Object.assign({className:"banner "+a,style:i},n))};c.defaultProps={className:""},c.propTypes={className:o.a.string}},153:function(e,a,t){e.exports=t.p+"static/uoh_centre-3689cf9983a2ebc8089c8f078a9c4769.svg"},154:function(e){e.exports={white:"#ffffff",black:"#33332d",main:"#e1e1e1",violet:"#B795F3",turquoise:"#82F7EB",green:"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D",yellow:"#F7F382",pink:"#E693CB",blue:"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0"}},155:function(e,a){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjQ3cHgiIGhlaWdodD0iODJweCIgdmlld0JveD0iMCAwIDI0NyA4MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTMuMiAoNzI2NDMpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPmxvZ28vaG91c3RvbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMCAwLjAyNjcxOTI2NzMgMTM4LjIwODE2NyAwLjAyNjcxOTI2NzMgMTM4LjIwODE2NyAzNi40NjU0MzgxIDAgMzYuNDY1NDM4MSI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9ImxvZ28vaG91c3RvbiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImhvdXN0b25fc2ltcGxlLmVwcy1jb3B5LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0LjU4MTg5MywgMjMuMjYzMDQwKSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMiI+PC9nPgogICAgICAgICAgICA8cGF0aCBkPSJNODIuODA1MTI5OCwxMy41MDY2NjAzIEw4Mi44MDUxMjk4LDI1LjUzNjU1MDkgTDg1Ljk5MzYyOSwyNS41MzY1NTA5IEw4NS45OTM2MjksMTMuNTA2NjYwMyBMOTAuNDA2NTQ5MywxMy41MDY2NjAzIEw5MC40MDY1NDkzLDEwLjQ0NTY3ODQgTDc4LjM3NTEwMzYsMTAuNDQ1Njc4NCBMNzguMzc1MTAzNiwxMy41MDY2NjAzIEw4Mi44MDUxMjk4LDEzLjUwNjY2MDMgWiBNOTYuNDkxMDQ5NSwxNy45NjM2ODg1IEM5Ni40OTEwNDk1LDIwLjU1OTU1NzIgOTguMzE3ODU1NywyMi43MDc5ODQyIDEwMC44ODYxNTcsMjIuNzA3OTg0MiBDMTAzLjQ1NDg4MiwyMi43MDc5ODQyIDEwNS4yNDcxOTQsMjAuNTk1NDY1NyAxMDUuMjQ3MTk0LDE4LjAxNzk3NTMgTDEwNS4yNDcxOTQsMTguMDAwMDIxMSBDMTA1LjI0NzE5NCwxNS40MDQyOTM3IDEwMy40MjA1MjksMTMuMjU1ODY2NyAxMDAuODUyMjI4LDEzLjI1NTg2NjcgQzk4LjI4MzUwMjMsMTMuMjU1ODY2NyA5Ni40OTEwNDk1LDE1LjM2ODM4NTMgOTYuNDkxMDQ5NSwxNy45NDU3MzQzIEw5Ni40OTEwNDk1LDE3Ljk2MzY4ODUgWiBNOTMuMTQ3MDQxMywxOC4wMTc5NzUzIEw5My4xNDcwNDEzLDE3Ljk4MjA2NjkgQzkzLjE0NzA0MTMsMTMuNjg1NDk1NiA5Ni40MDQ4MTI3LDEwLjE3NjkzMDYgMTAwLjg4NjE1NywxMC4xNzY5MzA2IEMxMDUuMzY3OTI1LDEwLjE3NjkzMDYgMTA4LjU5MTM0MywxMy42NDk3Mjg1IDEwOC41OTEzNDMsMTcuOTQ1NzM0MyBMMTA4LjU5MTM0MywxNy45NjM2ODg1IEMxMDguNTkxMzQzLDIyLjI2MDI1OTggMTA1LjMzMzU3MiwyNS43Njg4MjQ3IDEwMC44NTIyMjgsMjUuNzY4ODI0NyBDOTYuMzcwMzE4LDI1Ljc2ODgyNDcgOTMuMTQ3MDQxMywyMi4zMTQxMjI0IDkzLjE0NzA0MTMsMTguMDE3OTc1MyBMOTMuMTQ3MDQxMywxOC4wMTc5NzUzIFogTTcwLjQxMTkxMzcsMjIuNzk3MDQ4NSBDNjguNzU2ODc0MiwyMi43OTcwNDg1IDY3LjM3ODIxNjYsMjIuMDgxMjgzMSA2Ni4wNjg0MDcsMjAuOTcxNzk3NCBMNjQuMTcyMTg3MiwyMy4zMTY0NDg0IEM2NS45MTMxODA4LDI0LjkyNzk0NTQgNjguMTM2Njc2MiwyNS43MzMzNDA0IDcwLjM0MzA2NTYsMjUuNzMzMzQwNCBDNzMuNDgwMTA1NSwyNS43MzMzNDA0IDc1LjY2OTI0NzYsMjQuMDUwMTY4IDc1LjY2OTI0NzYsMjEuMDYxMDAzIEw3NS42NjkyNDc2LDIxLjAyNTA5NDUgQzc1LjcyMTEzMSwxOC4zOTM0NTg4IDc0LjA0ODU2MTUsMTcuMzAxNzg1OCA3MS4xMDExMDExLDE2LjQ5NTgyNTMgQzY4LjU4NDY4MzQsMTUuODMzOTIyNiA2Ny45NjM5MTk5LDE1LjUxMTMxMjIgNjcuOTYzOTE5OSwxNC41MDg5ODYyIEw2Ny45NjM5MTk5LDE0LjQ3MzA3NzggQzY3Ljk2MzkxOTksMTMuNzM4OTM0MSA2OC42MDIyMTM1LDEzLjE2NjY2MTEgNjkuODI1NjQ0OSwxMy4xNjY2NjExIEM3MS4wNDk2NDE4LDEzLjE2NjY2MTEgNzIuMzA3OTkyMSwxMy43MjA5Nzk5IDczLjYwMDgzNywxNC42NTIwNTQ1IEw3NS4yNTU1OTM4LDEyLjE0NTk1NjkgQzczLjc4OTk5MjUsMTAuOTEwNjUwMiA3MS45ODA3MTY0LDEwLjIzMDM2OTIgNjkuODYwNTYzNywxMC4yMzAzNjkyIEM2Ni44OTU3MTQ3LDEwLjIzMDM2OTIgNjQuNzc1NTYyLDEyLjAzODY1NTcgNjQuNzc1NTYyLDE0Ljc3NzU5MjYgTDY0Ljc3NTU2MiwxNC44MTMwNzY5IEM2NC43NzU1NjIsMTcuODAyNjY2MSA2Ni42NzEwNzQ5LDE4LjY0NDUzNSA2OS41ODQxODE5LDE5LjQzMjExNzMgQzcyLjAxNDY0NTYsMjAuMDc2NjMxMiA3Mi41MTQ2Nzc2LDIwLjUwNjI2MDEgNzIuNTE0Njc3NiwyMS4zNDc3MDQ5IEw3Mi41MTQ2Nzc2LDIxLjM4MzA0NzkgQzcyLjUxNDY3NzYsMjIuMjYwMjU5OCA3MS43MjIyODg4LDIyLjc5NzA0ODUgNzAuNDExOTEzNywyMi43OTcwNDg1IEw3MC40MTE5MTM3LDIyLjc5NzA0ODUgWiBNMzEuMzM2NDY5NywxNy45NjM2ODg1IEMzMS4zMzY0Njk3LDIwLjU1OTU1NzIgMzMuMTYzNywyMi43MDc5ODQyIDM1LjczMTg1OTksMjIuNzA3OTg0MiBDMzguMzAwMTYxMSwyMi43MDc5ODQyIDQwLjA5MjQ3MjYsMjAuNTk1NDY1NyA0MC4wOTI0NzI2LDE4LjAxNzk3NTMgTDQwLjA5MjQ3MjYsMTguMDAwMDIxMSBDNDAuMDkyNDcyNiwxNS40MDQyOTM3IDM4LjI2NTI0MjMsMTMuMjU1ODY2NyAzNS42OTY5NDEsMTMuMjU1ODY2NyBDMzMuMTI5MjA1MywxMy4yNTU4NjY3IDMxLjMzNjQ2OTcsMTUuMzY4Mzg1MyAzMS4zMzY0Njk3LDE3Ljk0NTczNDMgTDMxLjMzNjQ2OTcsMTcuOTYzNjg4NSBaIE0yOC4wMDk3MDg5LDE4LjAxNzk3NTMgTDI4LjAwOTcwODksMTcuOTgyMDY2OSBDMjguMDA5NzA4OSwxMy42ODU0OTU2IDMxLjI2NzQ4MDMsMTAuMTc2OTMwNiAzNS43NDg4MjQ1LDEwLjE3NjkzMDYgQzQwLjIzMDczNDIsMTAuMTc2OTMwNiA0My40MzYxOTgsMTMuNjQ5NzI4NSA0My40NTQwMTA5LDE3Ljk0NTczNDMgTDQzLjQ1NDAxMDksMTcuOTYzNjg4NSBDNDMuNDU0MDEwOSwyMi4yNjAyNTk4IDQwLjE5NjIzOTUsMjUuNzY4ODI0NyAzNS43MTQ4OTUzLDI1Ljc2ODgyNDcgQzMxLjIzMjU2MTUsMjUuNzY4ODI0NyAyOC4wMDk3MDg5LDIyLjMxNDEyMjQgMjguMDA5NzA4OSwxOC4wMTc5NzUzIEwyOC4wMDk3MDg5LDE4LjAxNzk3NTMgWiBNNTMuODMwNDE3MSwyNS43MzMzNDA0IEM1Ny43NDI4ODEyLDI1LjczMzM0MDQgNjAuMjA3ODM5NywyMy40OTU4NDkyIDYwLjIwNzgzOTcsMTguOTMwNjcxNSBMNjAuMjA3ODM5NywxMC40MjcxNTg3IEw1Ny4wMDE4MTAzLDEwLjQyNzE1ODcgTDU3LjAwMTgxMDMsMTkuMDczNzM5OCBDNTcuMDAxODEwMywyMS40NzI2Nzc2IDU1LjgxMjMwODEsMjIuNjkwMDMgNTMuODY0NzcwNCwyMi42OTAwMyBDNTEuOTE3Mzc0MSwyMi42OTAwMyA1MC43Mjc3MzA1LDIxLjQxODk1NjMgNTAuNzI3NzMwNSwxOC45NjY1OCBMNTAuNzI3NzMwNSwxMC40MjcxNTg3IEw0Ny41Mzg2NjU4LDEwLjQyNzE1ODcgTDQ3LjUzODY2NTgsMTkuMDM3ODMxMyBDNDcuNTM4NjY1OCwyMy40Nzc4OTUgNDkuOTE3OTUzLDI1LjczMzM0MDQgNTMuODMwNDE3MSwyNS43MzMzNDA0IEw1My44MzA0MTcxLDI1LjczMzM0MDQgWiBNMy4xNTQ1NywzMy4xOTgxOTQ4IEwxMzUuMDM2NjMyLDMzLjE5ODE5NDggTDEzNS4wMzY2MzIsMy4zMDI0NDQ4OCBMMy4xNTQ1NywzLjMwMjQ0NDg4IEwzLjE1NDU3LDMzLjE5ODE5NDggWiBNMCwzNi40NzM5MjA0IEwxMzguMjA4MTY3LDM2LjQ3MzkyMDQgTDEzOC4yMDgxNjcsMC4wMjY3MTkyNjczIEwwLDAuMDI2NzE5MjY3MyBMMCwzNi40NzM5MjA0IFogTTE0LjgyMzExNDMsMTkuNDg1NDE0NCBMMjAuNzE4NjAwNSwxOS40ODU0MTQ0IEwyMC43MTg2MDA1LDI1LjUzNjU1MDkgTDIzLjkwNzY2NTIsMjUuNTM2NTUwOSBMMjMuOTA3NjY1MiwxMC40NDU2Nzg0IEwyMC43MTg2MDA1LDEwLjQ0NTY3ODQgTDIwLjcxODYwMDUsMTYuNDA2MDU0MiBMMTQuODIzMTE0MywxNi40MDYwNTQyIEwxNC44MjMxMTQzLDEwLjQ0NTY3ODQgTDExLjYzNDc1NjUsMTAuNDQ1Njc4NCBMMTEuNjM0NzU2NSwyNS41MzY1NTA5IEwxNC44MjMxMTQzLDI1LjUzNjU1MDkgTDE0LjgyMzExNDMsMTkuNDg1NDE0NCBaIE0xMTUuODY0OTIyLDE1Ljk0MTUwNjUgTDEyMi44OTc2MDIsMjUuNTM2NTUwOSBMMTI1LjYyMDk4OCwyNS41MzY1NTA5IEwxMjUuNjIwOTg4LDEwLjQ0NTY3ODQgTDEyMi40NjY0MTgsMTAuNDQ1Njc4NCBMMTIyLjQ2NjQxOCwxOS43MzYyMDggTDExNS42NTgzNzcsMTAuNDQ1Njc4NCBMMTEyLjcxMDkxNywxMC40NDU2Nzg0IEwxMTIuNzEwOTE3LDI1LjUzNjU1MDkgTDExNS44NjQ5MjIsMjUuNTM2NTUwOSBMMTE1Ljg2NDkyMiwxNS45NDE1MDY1IEwxMTUuODY0OTIyLDE1Ljk0MTUwNjUgWiIgaWQ9IkZpbGwtMSIgZmlsbD0iIzAwMDEwNSIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},157:function(e,a){e.exports=["fullstack","full stack open 2019","course","helsingin yliopisto","tietojenkäsittelytieteen osasto","mooc","mooc.fi","full stack","full stack open","web-sovelluskehitys","web","houston","houston inc","websovelluskehitys","web-sovellus","React","Redux","Node.js","Node","MongoDB","GraphQL","REST","REST api","single page -sovellus","ohjelmointi","university of helsinki","department of computer science","web development","software development","web","web application","single page app","programming"]},158:function(e,a,t){"use strict";t.d(a,"a",function(){return l});t(28),t(264);var n=t(4),r=t.n(n),i=t(0),o=t.n(i),l=function(e){var a=e.children,t=e.largeMargin,n=e.className,r=e.childrenClassName,i=e.backgroundColor,l=e.props,s=e.hover;return o.a.createElement("div",Object.assign({className:"triple-border "+n+" "+(t?"triple-border--large-margin":""),style:s?{backgroundColor:"black",color:"white",padding:t?"":"0.2em"}:{padding:t?"":"0.2em"}},l),o.a.createElement("div",{className:"triple-border__container "+r,style:{backgroundColor:i,zIndex:10}},a))};l.defaultProps={className:"",childrenClassName:"",largeMargin:!1,hover:!1,backgroundColor:"transparent"},l.propTypes={children:r.a.node.isRequired,className:r.a.string,childrenClassName:r.a.string,largeMargin:r.a.bool,backgroundColor:r.a.string,hover:r.a.bool}},159:function(e,a,t){"use strict";t(163);var n=t(147),r=t(149),i=t(146),o=t(0),l=t.n(o),s=t(155),c=t.n(s),u=t(212),M=t(153),g=[{src:t.n(M).a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:c.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];a.a=function(e){var a=e.lang;return l.a.createElement(n.a,{id:"footer",className:"container spacing--after-small spacing--mobile",flex:!0},l.a.createElement(n.a,{className:"col-5 push-right-3 col-10--mobile order-2--mobile order-2--tablet footer__links",flex:!0,spaceBetween:!0},g.map(function(e){return l.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},l.a.createElement(r.a,{contain:!0,src:e.src,alt:e.alt,className:"col-6"}))})),l.a.createElement(n.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile order-1--tablet footer__navigation"},l.a.createElement("div",{className:"footer__navigation-link-container"},u.b[a].map(function(e){return l.a.createElement(i.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover",style:{marginLeft:"4.5rem"}},e.text)}))))}},160:function(e,a,t){"use strict";var n=t(267),r=t(146),i=t(323),o=t.n(i),l=t(4),s=t.n(l),c=t(0),u=t.n(c),M=t(241),g=t.n(M),N=t(242),m=t.n(N),p=t(293),d=t.n(p);function D(e){var a=e.description,t=e.lang,i=e.meta,l=e.image,s=e.keywords,c=e.title,M=l||"fi"===t?g.a:m.a;return u.a.createElement(r.StaticQuery,{query:y,render:function(e){var n=a||e.site.siteMetadata.description;return u.a.createElement(o.a,{htmlAttributes:{lang:t},title:c,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{name:"og:image",content:d.a.resolve(M)},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n},{name:"twitter:image",content:d.a.resolve(M)},{name:"google-site-verification",content:"ds9pQKiK3kjhRSHHbf5ccoG-oJggn7Lq4A8uHxM3Mkw"}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})},data:n})}D.defaultProps={lang:"fi",image:null,meta:[],keywords:[]},D.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,image:s.a.string,keywords:s.a.array,title:s.a.string.isRequired},a.a=D;var y="1025518380"},161:function(e,a,t){"use strict";var n=t(6),r=t.n(n),i=(t(260),t(261),t(0)),o=t.n(i),l=(t(262),t(4)),s=t.n(l),c=function(e){var a=e.dismissed;return o.a.createElement("div",{className:"release-message"},o.a.createElement("div",null,o.a.createElement("p",null,"This course is now available in English.",o.a.createElement("a",{href:"/en"},"Click here")," ","to change the language.")),o.a.createElement("button",{className:"release-message__button",onClick:function(){return a(!0)}},o.a.createElement("span",null,"x")))};c.propTypes={dismissed:s.a.func.isRequired};var u=c,M=(t(263),t(146)),g=t(212),N=t(158),m=function(e){function a(a){var t;return(t=e.call(this,a)||this).header=o.a.createRef(),t.handleScroll=function(){var e=window.scrollY;t.setState({top:e,headerClass:t.state.top>10&&e>t.state.top?"header--small":""})},t.state={top:0,headerClass:""},t}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},t.render=function(){var e=this.state.headerClass;return o.a.createElement("div",{ref:this.header,className:"header "+e,style:{backgroundColor:""!==e?"transparent":"white"}},o.a.createElement("div",{className:"container",style:{alignItems:"center",justifyContent:"flex-start"}},o.a.createElement(M.Link,{to:"en"===this.props.lang?"/en":"/",className:"header__logo"},""===e?o.a.createElement(N.a,{className:"nav-item-hover",childrenClassName:"triple-border__logo"},"{() => fs}"):o.a.createElement(N.a,{hover:!0,className:"nav-item-hover",childrenClassName:"triple-border__logo"},"fs")),"header--small"!==this.state.headerClass&&o.a.createElement(g.a,{lang:this.props.lang})))},a}(i.Component),p=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={siteLanguage:"fi",notificationDismissed:!1},a.dismissMessage=function(e){a.setState({notificationDismissed:e},function(){window.localStorage.setItem("notificationDismissed",e)})},a}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=-1!==window.location.pathname.indexOf("/en")?"en":"fi",a=window.localStorage.getItem("notificationDismissed");this.setState({siteLanguage:e,notificationDismissed:a})},t.render=function(){var e=this,a=this.state,t=a.siteLanguage,n=a.notificationDismissed;return o.a.createElement("div",{className:"main-wrapper"},o.a.createElement(m,{lang:this.state.siteLanguage}),"fi"===t&&!n&&o.a.createElement(u,{dismissed:function(a){return e.dismissMessage(a)}}),this.props.children)},a}(i.Component);p.propTypes={children:s.a.node.isRequired};a.a=p},162:function(e,a,t){},163:function(e,a,t){},212:function(e,a,t){"use strict";t(28);var n=t(6),r=t.n(n),i=(t(258),t(0)),o=t.n(i),l=(t(259),t(4)),s=t.n(l),c=function(e){var a=e.language,t=e.active;return a===t?o.a.createElement("span",{className:"language-switcher__active-language"},a):o.a.createElement("a",{target:"_self",className:"language-switcher__language",href:"en"===t?"/":"/en"},a)},u=function(e){var a=e.lang;return o.a.createElement("div",{className:"language-switcher"},o.a.createElement(c,{language:"fi",active:a}),o.a.createElement(c,{language:"en",active:a}))};u.defaultProps={lang:"fi"},u.propTypes={lang:s.a.string.isRequired};var M=u,g=t(148),N=t.n(g),m=t(146),p=function(e){var a=e.text,t=e.path,n=e.className,r=N()(e,["text","path","className"]);return o.a.createElement("li",Object.assign({},r,{className:"navigation__item "+n}),o.a.createElement(m.Link,{className:"nav-item-hover",to:t},a))};p.propTypes={text:s.a.string.isRequired,path:s.a.string.isRequired,className:s.a.string},p.defaultProps={className:""},t.d(a,"b",function(){return d});var d={en:[{text:"About course",path:"/en/about"},{text:"Course contents",path:"/en#course-contents"},{text:"FAQ",path:"/en/faq"},{text:"Partners",path:"/en/companies"},{text:"Challenge",path:"/en/challenge"}],fi:[{text:"Kurssista",path:"/about"},{text:"Kurssin sisältö",path:"#course-contents"},{text:"FAQ",path:"/faq"},{text:"Kurssilla mukana",path:"/companies"},{text:"Haaste",path:"/challenge"}]},D=function(){return document.body.classList.remove("is-open--navigation")},y=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={navigationOpen:!1},t}return r()(a,e),a.prototype.render=function(){var e=this,a=this.props.className;return o.a.createElement("div",{className:"navigation__wrapper "+a},o.a.createElement("button",{"aria-label":"Navigation menu","aria-expanded":this.state.navigationOpen,onClick:function(){e.setState({navigationOpen:!e.state.navigationOpen}),document.body.classList.toggle("is-open--navigation")},className:"navigation__toggle"},o.a.createElement("div",{className:"navigation__toggle-icon"})),o.a.createElement("nav",null,o.a.createElement("ul",{className:"navigation"},d[this.props.lang].map(function(e){return o.a.createElement(p,Object.assign({key:e.path},e,{onClick:D}))}),o.a.createElement(M,{lang:this.props.lang}))))},a}(i.Component);y.propTypes={className:s.a.string},y.defaultProps={className:""};a.a=y},213:function(e,a){e.exports={fi:{0:{a:"Yleistä",b:"Web-sovelluksen toimintaperiaatteita"},1:{a:"Reactin alkeet",b:"Javascriptiä",c:"Komponentin tila ja tapahtumankäsittely",d:"Monimutkaisempi tila, Reactin debuggaus"},2:{a:"Kokoelmien renderöinti ja moduulit",b:"Lomakkeiden käsittely",c:"Palvelimella olevan datan hakeminen",d:"Palvelimella olevan datan muokkaaminen",e:"Tyylien lisääminen React-sovellukseen"},3:{a:"Node.js ja Express",b:"Sovellus internetiin",c:"Tietojen tallettaminen MongoDB-tietokantaan",d:"Validointi ja ESLint"},4:{a:"Sovelluksen rakenne ja testauksen alkeet",b:"Backendin testaaminen",c:"Käyttäjien hallinta",d:"Token-perustainen kirjautuminen"},5:{a:"Kirjautuminen frontendissä",b:"props.children ja proptypet",c:"React-sovellusten testaaminen",d:"Custom hookit"},6:{a:"Flux-arkkitehtuuri ja Redux",b:"Monta reduseria, connect",c:"Redux-sovelluksen kommunikointi palvelimen kanssa"},7:{a:"React-router",b:"Lisää tyyleistä",c:"Webpack",d:"Luokkakomponentit, E2E-testaus",e:"Sekalaista",f:"Tehtäviä: blogilistan laajennus"},8:{a:"GraphQL-palvelin",b:"React ja GraphQL",c:"Tietokanta ja käyttäjien hallinta",d:"Kirjautuminen ja välimuistin päivitys",e:"Fragmentit ja subskriptiot"}},en:{0:{a:"General info",b:"Fundamentals of Web-apps"},1:{a:"Introduction to React",b:"Javascript",c:"Component state, event handlers",d:"A more complex state, debugging React apps"},2:{a:"Rendering a collection, modules",b:"Forms",c:"Getting data from server",d:"Altering data in server",e:"Adding styles to React app"},3:{a:"Node.js and Express",b:"Deploying app to internet",c:"Saving data to MongoDB",d:"Validation and ESLint"},4:{a:"Structure of backend application, introduction to testing",b:"Testing the backend"},5:{},6:{},7:{},8:{}}}},216:function(e,a,t){},219:function(e,a,t){"use strict";t.d(a,"a",function(){return c});t(28);var n=t(148),r=t.n(n),i=(t(234),t(4)),o=t.n(i),l=t(0),s=t.n(l),c=function(e){var a=e.className,t=e.headingLevel,n=void 0===t?"h2":t,i=e.headingFontSize,o=e.text,l=r()(e,["className","headingLevel","headingFontSize","text"]),c=n;return s.a.createElement(c,Object.assign({className:"sub-header "+a,style:i?{fontSize:i}:{}},l),o)};c.propTypes={className:o.a.string,headingLevel:o.a.string,text:o.a.string.isRequired,headingFontSize:o.a.string},c.defaultProps={className:""}},231:function(e,a,t){var n;e.exports=(n=t(256))&&n.default||n},233:function(e,a){e.exports={fi:"Helsingin yliopiston ja Houston Inc:n kaikille avoin ja ilmainen moderniin Javascript-pohjaiseen web-sovelluskehitykseen keskittyvä kurssi. Osallistujilta edellytetään vahvaa ohjelmointirutiinia, pitkäjänteistyyttä ja valmiuksia omatoimiseen ongelmanratkaisuun.",en:"Open online course on Javascript based modern web development by University of Helsinki and Houston Inc.."}},234:function(e,a,t){},241:function(e,a,t){e.exports=t.p+"static/seo_image-939e8e249cf62a835ed560f6da4200ad.jpg"},242:function(e,a,t){e.exports=t.p+"static/EYE_green_wide-0a72f74a959f54d0f3e4bb8c67f6f158.jpg"},244:function(e,a,t){"use strict";var n=t(6),r=t.n(n),i=(t(268),t(0)),o=t.n(i),l=t(151),s=t(146),c=t(4),u=t.n(c),M=t(290);M.a.initialize("UA-135975842-1");var g=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpened:!1},t}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){this.props.initiallyOpened&&this.setState({isOpened:!0})},t.handleClick=function(){var e=this.state.isOpened,a=this.props,t=a.title,n=a.track;this.setState({isOpened:!e},function(){n&&M.a.event({category:"FAQ",action:t+" "+(e?"closed":"expanded")})})},t.render=function(){var e=this,a=this.props,t=a.title,n=a.content,r=a.className,i=a.containerClassName,c=a.list,u=a.titleStyle,M=this.state.isOpened;return o.a.createElement("div",{className:"accordion__container col-8 push-right-1 "+i},o.a.createElement("button",{className:"accordion accordion__title "+(M?"active":"")+" "+r,style:u,onClick:function(){return e.handleClick()}},t),o.a.createElement("div",{className:"panel",style:{padding:M?"2rem 18px":"",maxHeight:""+(M?"unset":0),transition:"max-height 0.2s ease-out"}},n&&o.a.createElement(l.a,{className:"col-8 push-right-1",text:n}),c&&o.a.createElement("ul",null,c.map(function(e){return o.a.createElement("li",{key:e.text},o.a.createElement(s.Link,{to:e.href},e.text))}))))},a}(i.Component);g.propTypes={title:u.a.string.isRequired,track:u.a.bool,content:u.a.oneOfType([u.a.string,u.a.array]),list:u.a.array,className:u.a.string,containerClassName:u.a.string,initiallyOpened:u.a.bool,titleStyle:u.a.object},g.defaultProps={className:"",track:!1,containerClassName:"",initiallyOpened:!1,titleStyle:{}},a.a=g},255:function(e,a,t){},256:function(e,a,t){"use strict";t.r(a);t(28);var n=t(0),r=t.n(n),i=t(4),o=t.n(i),l=t(47),s=t(2),c=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=c},257:function(e,a,t){},258:function(e,a,t){},259:function(e,a,t){},260:function(e,a,t){},261:function(e,a,t){},262:function(e,a,t){},263:function(e,a,t){},264:function(e,a,t){},267:function(e){e.exports={data:{site:{siteMetadata:{title:"Full Stack Open 2019",description:"",author:"Houston Inc. Consulting oy"}}}}},268:function(e,a,t){},294:function(e,a,t){"use strict";t(28),t(237),t(296);var n=t(148),r=t.n(n),i=(t(297),t(147)),o=t(146),l=t(4),s=t.n(l),c=t(0),u=t.n(c),M=t(154),g=function(e){var a,t=e.className,n=e.wrapperClassName,l=e.link,s=e.content,c=e.stack,g=e.bold,N=e.thickBorder,m=e.upperCase,p=r()(e,["className","wrapperClassName","link","content","stack","bold","thickBorder","upperCase"]),d=u.a.createElement("div",{className:"arrow__container arrows--horizontal "+t},s.map(function(e,a){var t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===M.black?"white":M.black};return u.a.createElement("div",Object.assign({key:"arrow"+a,className:"arrow__wrapper"},p),u.a.createElement("div",{className:"arrow__rectangle "+(g?"bold":"")+" "+(N?"arrow__rectangle--thick-border":""),style:t},e.link?u.a.createElement(o.Link,{to:e.link},m?e.text.toUpperCase():e.text):m?e.text.toUpperCase():e.text),u.a.createElement("div",{className:"arrow__point "+(N?"arrow__point--thick-border":""),style:t}))}));return c||l?!c&&l?a=u.a.createElement("div",{className:"spacing--after-small auto-bottom-margin"},u.a.createElement(o.Link,{to:l,style:{display:"inline-block"}},d)):c&&(a=u.a.createElement("div",{className:"col-10 spacing--after "+n},u.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},s.map(function(e){var a={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===M.black?"white":M.black};return u.a.createElement(o.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+t},p),u.a.createElement(i.a,{flex:!0,className:"arrow__rectangle",style:a},u.a.createElement("p",{className:"arrow--stacked-title"},u.a.createElement("span",null,e.text))),u.a.createElement("div",{className:"arrow__point",style:a}))})))):a=u.a.createElement("div",{className:"col-10 spacing--after"},d),a};g.propTypes={className:s.a.string,wrapperClassName:s.a.string,link:s.a.string,content:s.a.array.isRequired,stack:s.a.bool,upperCase:s.a.bool,bold:s.a.bool,thickBorder:s.a.bool},g.defaultProps={className:"",wrapperClassName:""},a.a=g},297:function(e,a,t){},301:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48dGl0bGU+aWNfYXJyb3dfdXB3YXJkXzQ4cHg8L3RpdGxlPg0KICAgIDxnIGNsYXNzPSJuYy1pY29uLXdyYXBwZXIiIGZpbGw9IiMxMTExMTEiPg0KICAgICAgICA8cGF0aCBkPSJNOCAyNGwyLjgzIDIuODNMMjIgMTUuNjZWNDBoNFYxNS42NmwxMS4xNyAxMS4xN0w0MCAyNCAyNCA4IDggMjR6Ii8+DQogICAgPC9nPg0KPC9zdmc+"},326:function(e,a,t){"use strict";t(327),t(67),t(46),t(218),t(329),t(330),t(333);var n=t(147),r=t(146),i=t(4),o=t(0),l=t.n(o),s=t(213),c=t.n(s),u=t(240),M=t.n(u),g=function(e){return String.fromCharCode(e.charCodeAt(0)-1)},N=function(e){return String.fromCharCode(e.charCodeAt(0)+1)},m=function(e,a){return Object.keys(c.a[a]).includes(e.toString())},p=function(e,a,t){return N(e)in c.a[t][a]},d=function(e,a,t){return!e&&m(a+1,t)||e&&p(e,a,t)},D=function(e){return"en"===e?"Part":"Osa"},y=function(e){return"en"===e?"Previous part":"Edellinen osa"},T=function(e){return"en"===e?"Next part":"Seuraava osa"},j=function(e){return"/"+("en"===e?"en/part":"osa")},h=function(e){var a=e.part,t=e.letter,i=e.lang;return l.a.createElement(n.a,{className:"container spacing spacing--after-large prev-next__container"},!t&&m(a-1,i)?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Link,{to:""+j(i)+(a-1),className:"col-4--mobile push-right-1 prev"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,D(i)," ",a-1),l.a.createElement("b",null,y(i)))),d(t,a,i)&&l.a.createElement("div",{className:"col-1--mobile separator"})):t?"a"!==t?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Link,{to:""+j(i)+a+"/"+M()(c.a[i][a][g(t)]),className:"col-4--mobile push-right-1 prev"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,D(i)," ",""+a+g(t)),l.a.createElement("b",null,y(i)))),d(t,a,i)&&l.a.createElement("div",{className:"col-1--mobile separator"})):m(a-1,i)?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Link,{to:""+j(i)+(a-1),className:"col-4--mobile push-right-1 prev"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,D(i)," ",a-1),l.a.createElement("b",null,y(i)))),d(t,a,i)&&l.a.createElement("div",{className:"col-1--mobile separator"})):l.a.createElement(n.a,{className:"push-right-1"}):l.a.createElement(n.a,{className:"push-right-1"}),!t&&m(a+1,i)?l.a.createElement(r.Link,{to:""+j(i)+(a+1),className:"col-4--mobile push-left-1 next"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,D(i)," ",a+1),l.a.createElement("b",null,T(i)))):t?p(t,a,i)?l.a.createElement(r.Link,{to:""+j(i)+a+"/"+M()(c.a[i][a][N(t)]),className:"col-4--mobile push-left-1 next"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,D(i)," ",""+a+N(t)),l.a.createElement("b",null,T(i)))):m(a+1,i)?l.a.createElement(r.Link,{to:""+j(i)+(a+1),className:"col-4--mobile push-left-1 next"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,D(i)," ",a+1),l.a.createElement("b",null,T(i)))):l.a.createElement(n.a,{className:"push-left-1"}):l.a.createElement(n.a,{className:"push-left-1"}))};h.defaultProps={part:void 0,letter:void 0},h.propTypes={part:i.PropTypes.number,letter:i.PropTypes.string,lang:i.PropTypes.string.isRequired},a.a=h},333:function(e,a,t){},361:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n={0:"light-violet",1:"green",2:"dark-orange",3:"light-orange",4:"yellow",5:"pink",6:"violet",7:"light-blue",8:"turquoise"}},598:function(e,a,t){},599:function(e,a,t){},600:function(e,a,t){}}]);
//# sourceMappingURL=component---src-templates-content-template-js-8230ff2af4e9baf63015.js.map