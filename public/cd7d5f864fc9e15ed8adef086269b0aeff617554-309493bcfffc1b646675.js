(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"4IfK":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIsomorphicLayoutEffect=void 0;var n=a("q1tI");t.useIsomorphicLayoutEffect="undefined"!=typeof window?n.useLayoutEffect:n.useEffect},Kvkj:function(e,t,a){"use strict";a.d(t,"f",(function(){return x})),a.d(t,"h",(function(){return w})),a.d(t,"a",(function(){return S})),a.d(t,"l",(function(){return I})),a.d(t,"i",(function(){return F})),a.d(t,"j",(function(){return M})),a.d(t,"k",(function(){return L})),a.d(t,"g",(function(){return A})),a.d(t,"d",(function(){return H})),a.d(t,"e",(function(){return _})),a.d(t,"m",(function(){return W})),a.d(t,"b",(function(){return z.a})),a.d(t,"c",(function(){return U.a}));var n=a("q1tI"),o=a.n(n),s=a("A9nh");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}var l=a("dI71");function c(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var m=a("i8i4"),u=a.n(m),d=!1,f=o.a.createContext(null),p=function(e){function t(t,a){var n;n=e.call(this,t,a)||this;var o,s=a&&!a.isMounting?t.enter:t.appear;return n.appearStatus=null,t.in?s?(o="exited",n.appearStatus="entering"):o="entered":o=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",n.state={status:o},n.nextCallback=null,n}Object(l.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var a=t.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var a=this.state.status;this.props.in?"entering"!==a&&"entered"!==a&&(t="entering"):"entering"!==a&&"entered"!==a||(t="exiting")}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e,t,a,n=this.props.timeout;return e=t=a=n,null!=n&&"number"!=typeof n&&(e=n.exit,t=n.enter,a=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:a}},a.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},a.performEnter=function(e){var t=this,a=this.props.enter,n=this.context?this.context.isMounting:e,o=this.props.nodeRef?[n]:[u.a.findDOMNode(this),n],s=o[0],r=o[1],i=this.getTimeouts(),l=n?i.appear:i.enter;!e&&!a||d?this.safeSetState({status:"entered"},(function(){t.props.onEntered(s)})):(this.props.onEnter(s,r),this.safeSetState({status:"entering"},(function(){t.props.onEntering(s,r),t.onTransitionEnd(l,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(s,r)}))}))})))},a.performExit=function(){var e=this,t=this.props.exit,a=this.getTimeouts(),n=this.props.nodeRef?void 0:u.a.findDOMNode(this);t&&!d?(this.props.onExit(n),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(n),e.onTransitionEnd(a.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(n)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(n)}))},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,a=!0;return this.nextCallback=function(n){a&&(a=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},a.onTransitionEnd=function(e,t){this.setNextCallback(t);var a=this.props.nodeRef?this.props.nodeRef.current:u.a.findDOMNode(this),n=null==e&&!this.props.addEndListener;if(a&&!n){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],s=o[0],r=o[1];this.props.addEndListener(s,r)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},a.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,a=t.children,n=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,i(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.a.createElement(f.Provider,{value:null},"function"==typeof a?a(e,n):o.a.cloneElement(o.a.Children.only(a),n))},t}(o.a.Component);function h(){}p.contextType=f,p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},p.UNMOUNTED="unmounted",p.EXITED="exited",p.ENTERING="entering",p.ENTERED="entered",p.EXITING="exiting";var E=p,g=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return n=t,void((a=e).classList?a.classList.remove(n):"string"==typeof a.className?a.className=c(a.className,n):a.setAttribute("class",c(a.className&&a.className.baseVal||"",n)));var a,n}))},b=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,a){var n=t.resolveArguments(e,a),o=n[0],s=n[1];t.removeClasses(o,"exit"),t.addClass(o,s?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,a)},t.onEntering=function(e,a){var n=t.resolveArguments(e,a),o=n[0],s=n[1]?"appear":"enter";t.addClass(o,s,"active"),t.props.onEntering&&t.props.onEntering(e,a)},t.onEntered=function(e,a){var n=t.resolveArguments(e,a),o=n[0],s=n[1]?"appear":"enter";t.removeClasses(o,s),t.addClass(o,s,"done"),t.props.onEntered&&t.props.onEntered(e,a)},t.onExit=function(e){var a=t.resolveArguments(e)[0];t.removeClasses(a,"appear"),t.removeClasses(a,"enter"),t.addClass(a,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var a=t.resolveArguments(e)[0];t.addClass(a,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var a=t.resolveArguments(e)[0];t.removeClasses(a,"exit"),t.addClass(a,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,a){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,a]},t.getClassNames=function(e){var a=t.props.classNames,n="string"==typeof a,o=n?""+(n&&a?a+"-":"")+e:a[e];return{baseClassName:o,activeClassName:n?o+"-active":a[e+"Active"],doneClassName:n?o+"-done":a[e+"Done"]}},t}Object(l.a)(t,e);var a=t.prototype;return a.addClass=function(e,t,a){var n=this.getClassNames(t)[a+"ClassName"],o=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===a&&o&&(n+=" "+o),"active"===a&&e&&e.scrollTop,n&&(this.appliedClasses[t][a]=n,function(e,t){e&&t&&t.split(" ").forEach((function(t){return n=t,void((a=e).classList?a.classList.add(n):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(a,n)||("string"==typeof a.className?a.className=a.className+" "+n:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+n)));var a,n}))}(e,n))},a.removeClasses=function(e,t){var a=this.appliedClasses[t],n=a.base,o=a.active,s=a.done;this.appliedClasses[t]={},n&&g(e,n),o&&g(e,o),s&&g(e,s)},a.render=function(){var e=this.props,t=(e.classNames,i(e,["classNames"]));return o.a.createElement(E,r({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(o.a.Component);b.defaultProps={classNames:""};var v=b;function x(e){var t=Object(n.useState)(!1),a=t[0],r=t[1];Object(n.useEffect)((function(){var e=setTimeout((function(){return r(!0)}),200);return function(){return clearTimeout(e)}}),[]);return o.a.createElement("div",{className:"hero",ref:e.navRef},o.a.createElement("div",{className:"bx--row",style:{margin:"0px"}},o.a.createElement("div",{className:Object(s.a)({max:{offset:"3",col:"9"},xlg:{offset:"3",col:"9"},lg:{offset:"3",col:"8"},md:{offset:"1",col:"6"},sm:{col:"col"}},"heroBanner")},o.a.createElement(v,{mountOnEnter:!0,in:a,classNames:"heroBannerFadeup",timeout:400},o.a.createElement("p",{className:"heroBannerPreTitle",style:{transitionDelay:"100ms"}},e.contentData.preTitle)),o.a.createElement(v,{mountOnEnter:!0,in:a,classNames:"heroBannerFadeup",timeout:400},o.a.createElement("p",{className:"heroBannerTitle",style:{transitionDelay:"200ms"}},e.contentData.title)),o.a.createElement(v,{mountOnEnter:!0,in:a,classNames:"heroBannerFadeup",timeout:400,style:{transitionDelay:"300ms"}},o.a.createElement("p",{className:"heroBannerSubTitle"},e.contentData.subTitle)),o.a.createElement(v,{mountOnEnter:!0,in:a,classNames:"heroBannerFadeup",timeout:400,style:{transitionDelay:"400ms"}},o.a.createElement("p",{className:"heroBannerBody"},e.contentData.body)))))}var N=a("3pSX"),y=a("lTFH");function w(e){var t=Object(n.useState)(!0),a=t[0],s=t[1];return Object(y.useScrollPosition)((function(e){var t=e.prevPos,n=e.currPos.y<t.y;n&a&&s(!1),!n&!a&&s(!0)})),Object(n.useEffect)((function(){console.log("Show nav",a)}),[a]),o.a.createElement(v,{in:a,mountOnEnter:!0,classNames:"navBarFadeup",timeout:1e3},o.a.createElement("div",{className:"navBar"},o.a.createElement(N.j,{className:"navBarLogo"}),o.a.createElement("ul",{className:"navBarList"},o.a.createElement(v,{in:e.aboutNav,classNames:"navBarAboutFadeup",timeout:400},o.a.createElement("li",{onClick:e.scrollToAbout,className:"navBarAbout"},e.showAbout?"About":null)),o.a.createElement(v,{in:e.experienceNav,classNames:"navBarExperienceFadeup",timeout:400},o.a.createElement("li",{onClick:e.scrollToExperience,className:"navBarExperience"},e.showExperience?"Experience":null)),o.a.createElement(v,{in:e.blogNav,classNames:"navBarBlogFadeup",timeout:400},o.a.createElement("li",{onClick:e.scrollToBlog,className:"navBarBlog"},e.showBlog?"Blog":null)))))}var T=a("Wbzz"),C=a("9eSz"),O=a.n(C);function S(e){var t=Object(T.useStaticQuery)("1916003808"),a=Object(s.b)({threshold:20}),n=a[0],r=a[1];return o.a.createElement("div",{className:"bx--row aboutMe",ref:r},o.a.createElement(v,{mountOnEnter:!0,in:n,classNames:"aboutMeTextFadeup",timeout:400},o.a.createElement("div",{className:Object(s.a)({max:{offset:"3",col:"6"},xlg:{offset:"2",col:"7"},lg:{offset:"2",col:"7"},md:{offset:"1",col:"6"},sm:{offset:"0",col:"col"}}),ref:e.navRef},o.a.createElement("p",{className:"aboutMeTitle",ref:e.scrollRef},"About me"),e.contentData.body.map((function(e,t){return o.a.createElement("p",{key:t,className:"aboutMeBody"},e)})),o.a.createElement("div",{className:"aboutMeTechs"},o.a.createElement(N.h,{className:"aboutMeTechIcon"}),o.a.createElement(N.o,{className:"aboutMeTechIcon"}),o.a.createElement(N.n,{className:"aboutMeTechIcon"}),o.a.createElement(N.k,{className:"aboutMeTechIcon"}),o.a.createElement(N.d,{className:"aboutMeTechIcon"}),o.a.createElement(N.m,{className:"aboutMeTechIcon"}),o.a.createElement(N.f,{className:"aboutMeTechIcon"}),o.a.createElement(N.c,{className:"aboutMeTechIcon"}),o.a.createElement(N.p,{className:"aboutMeTechIcon"})))),o.a.createElement(v,{mountOnEnter:!0,in:n,classNames:"aboutMeImageFadeup",timeout:400},o.a.createElement("div",{className:Object(s.a)({md:{offset:"1",col:"6"},lg:{offset:"0",col:"4"}},"aboutMeImage")},o.a.createElement(O.a,{fluid:t.file.childImageSharp.fluid,alt:"me"}))))}function I(e){var t=Object(T.useStaticQuery)("2282337781");console.log("DATA: ",t);var a=Object(s.b)({threshold:90}),n=a[0],r=a[1],i=Object(s.b)({threshold:80}),l=i[0],c=i[1],m={sm:{col:"4"},md:{offset:"1",col:"6"},lg:{offset:"2",col:"8"},xlg:{offset:"2",col:"8"},max:{offset:"3",col:"7"}},u={sm:{col:"col"},md:{offset:"1",col:"6"},lg:{offset:"0",col:"4"},xlg:{col:"4"},max:{col:"3"}},d={sm:{col:"col"},md:{offset:"1",col:"6"},lg:{offset:"2",col:"4"},xlg:{col:"4"},max:{offset:"3",col:"3"}},f={sm:{col:"4"},md:{offset:"1",col:"6"},lg:{offset:"0",col:"8"},xlg:{col:"8"},max:{col:"7"}};return o.a.createElement("div",{className:"thingsIBuild",ref:r},o.a.createElement(v,{mountOnEnter:!0,in:n,classNames:"thingsIBuildTitleFadeup",timeout:400},o.a.createElement("div",{className:"bx--row bx--row--condensed",ref:e.navRef},o.a.createElement("p",{ref:e.scrollRef,className:Object(s.a)({max:{offset:"3",col:"6"},xlg:{offset:"2",col:"7"},lg:{offset:"2",col:"7"},md:{offset:"1",col:"6"},sm:{offset:"0",col:"4"}},"thingsIBuildTitle")},"Things I Build"))),o.a.createElement("div",{ref:c},e.contentData.map((function(e,a){return a%2==0?o.a.createElement(v,{mountOnEnter:!0,in:l,classNames:"thingsIBuildCardFadeup",timeout:400},o.a.createElement("div",{className:"thingsIBuildCardFadeup thingsIBuildCard bx--row bx--row--condensed"},o.a.createElement(O.a,{fluid:t.img1.childImageSharp.fluid,className:Object(s.a)(m,"thigsIBuildImage"),alt:"project thumbnail"}),o.a.createElement("div",{className:Object(s.a)(u,"thingsIBuildText")},o.a.createElement("div",null,o.a.createElement("p",{className:"thingsIBuildTextTitle"},e.title),o.a.createElement("p",{className:"thingsIBuildTextBody"},e.body)),o.a.createElement("p",{className:"thingsIBuildTextFooter"},e.footer),o.a.createElement("div",{className:"thingsIBuildTextButtons"},o.a.createElement(N.e,{className:"thingsIBuildIcon"}),o.a.createElement(N.l,{className:"thingsIBuildIcon"}))))):a%2==1?o.a.createElement(v,{mountOnEnter:!0,in:l,classNames:"thingsIBuildCardFadeup",timeout:600},o.a.createElement("div",{className:"thingsIBuildCard thingsIBuildCardFadeup bx--row bx--row--condensed"},o.a.createElement("div",{className:Object(s.a)(d,"thingsIBuildText")},o.a.createElement("div",null,o.a.createElement("p",{className:"thingsIBuildTextTitle"},e.title),o.a.createElement("p",{className:"thingsIBuildTextBody"},e.body)),o.a.createElement("p",{className:"thingsIBuildTextFooter"},e.footer),o.a.createElement("div",{className:"thingsIBuildTextButtons"},o.a.createElement(N.e,{className:"thingsIBuildIcon"}),o.a.createElement(N.l,{className:"thingsIBuildIcon"}))),o.a.createElement(O.a,{src:e.image,fluid:t.img2.childImageSharp.fluid,className:Object(s.a)(f,"thigsIBuildImage"),alt:"project thumbnail"}))):null}))))}var B={sm:{col:"col"},md:{offset:"1"},lg:{offset:"2"},xlg:{offset:"2"},max:{offset:"3"}},j={sm:{col:"col"},md:{offset:"1",col:"6"},lg:{offset:"2"},xlg:{offset:"2"},max:{offset:"3",col:"11"}},k={sm:{col:"6"},md:{col:"3"},lg:{col:"4"},xlg:{col:"4"},max:{col:"3"}};function F(e){var t=Object(s.b)({threshold:40}),a=t[0],n=t[1];return o.a.createElement("div",{className:"otherProjects",ref:n},o.a.createElement(v,{mountOnEnter:!0,in:a,classNames:"otherProjectsTitleFadeup",timeout:400},o.a.createElement("div",{className:"bx--row"},o.a.createElement("p",{className:Object(s.a)(B,"otherProjectsTitle")},"Other projects"))),o.a.createElement("div",{className:"bx--row"},o.a.createElement("div",{className:Object(s.a)(j)},o.a.createElement("div",{className:"bx--row"},e.contentData.map((function(e,t){return o.a.createElement(v,{mountOnEnter:!0,in:a,classNames:"otherProjectsCardFadeup",timeout:400},o.a.createElement("div",{key:t,className:Object(s.a)(k,"otherProjectsCard"),style:{transitionDelay:t+2+"00ms"}},o.a.createElement("p",{className:"otherProjectsCardTitle"},e.title),o.a.createElement("p",{className:"otherProjectsCardBody"},e.body),o.a.createElement("p",{className:"otherProjectsCardFooter"},e.footer),o.a.createElement("div",{className:"otherProjectsCardButtons"},o.a.createElement(N.e,{className:"otherProjectsCardIcon"}),o.a.createElement(N.l,{className:"otherProjectsCardIcon"}))))}))))))}function M(){var e=Object(n.useState)(!1),t=e[0],a=e[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){return a(!0)}),1400);return function(){return clearTimeout(e)}}),[]),o.a.createElement(v,{mountOnEnter:!0,unmountOnExit:!0,in:t,classNames:"sideGadgetLeftFadeup",timeout:200},o.a.createElement("div",{className:"sideGadgetLeft"},o.a.createElement("a",{title:"Find me on Github",target:"_blank",href:"https://github.com/BrianStefanovich/"},o.a.createElement(N.e,{className:"sideGadgetLeftIcon"})),o.a.createElement("a",{title:"Find me on Twitter",target:"_blank",href:"https://twitter.com/bstefanovich"},o.a.createElement(N.r,{className:"sideGadgetLeftIcon"})),o.a.createElement("a",{title:"Find me on Linked In",target:"_blank",href:"https://www.linkedin.com/in/brian-stefanovich"},o.a.createElement(N.i,{className:"sideGadgetLeftIcon"})),o.a.createElement("a",{title:"Find me on Instagram",target:"_blank",href:"https://www.instagram.com/b_stefanovich/"},o.a.createElement(N.g,{className:"sideGadgetLeftIcon"})),o.a.createElement("div",{className:"sideGadgetLeftLine"})))}function L(){var e=Object(n.useState)(!1),t=e[0],a=e[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){return a(!0)}),1400);return function(){return clearTimeout(e)}}),[]),o.a.createElement(v,{mountOnEnter:!0,unmountOnExit:!0,in:t,classNames:"sideGadgetRigthFadeup ",timeout:200},o.a.createElement("div",{className:"sideGadgetRigth"},o.a.createElement("a",{title:"Write me on WhatsApp",target:"_blank",href:"https://wa.me/59894419518"},o.a.createElement(N.s,{className:"sideGadgetRigthIcon"})),o.a.createElement("a",{title:"Write me on Telegram",target:"_blank",href:"https://t.me/BrianStefanovich"},o.a.createElement(N.q,{className:"sideGadgetRigthIcon"})),o.a.createElement("a",{title:"Send me an eMail",href:"mailto:email@brianstefanovich.com",className:"sideGadgetRigthMail"},"email@brianstefanovich.com"),o.a.createElement("div",{className:"sideGadgetRigthLine"})))}function A(){var e=Object(n.useState)(!1),t=e[0],a=e[1],s={transition:"opacity 100ms ease-in-out",transform:"translate(0px, 0px)",display:"none"},r={entering:{display:"block",opacity:0},entered:{display:"block",opacity:1},exiting:{display:"block",opacity:1},exited:{display:"none",opacity:0}};return o.a.createElement("div",null,o.a.createElement(E,{in:t},(function(e){return o.a.createElement("div",{style:Object.assign({},s,r[e]),className:"mobileGadgetBackdrop"})})),o.a.createElement("div",{className:"mobileGadget"},o.a.createElement(v,{mountOnEnter:!0,unmountOnExit:!0,in:t,classNames:"mobileGadgetIconFadeup",timeout:400},o.a.createElement("a",{target:"_blank",href:"https://t.me/BrianStefanovich",style:{transitionDelay:"200ms"},className:"mobileGadgetIcon"},o.a.createElement("p",null,"Write me on Telegram"),o.a.createElement(N.q,{className:"icon"}))),o.a.createElement(v,{mountOnEnter:!0,unmountOnExit:!0,in:t,classNames:"mobileGadgetIconFadeup",timeout:400},o.a.createElement("a",{style:{transitionDelay:"150ms"},className:"mobileGadgetIcon",target:"_blank",href:"https://wa.me/59894419518"},o.a.createElement("p",null,"Write me on Whats App"),o.a.createElement(N.s,{className:"icon"}))),o.a.createElement(v,{mountOnEnter:!0,unmountOnExit:!0,in:t,classNames:"mobileGadgetIconFadeup",timeout:400},o.a.createElement("a",{href:"https://www.linkedin.com/in/brian-stefanovich",target:"_blank",style:{transitionDelay:"100ms"},className:"mobileGadgetIcon"},o.a.createElement("p",null,"Find me on Linkedin"),o.a.createElement(N.i,{className:"icon"}))),o.a.createElement(v,{mountOnEnter:!0,unmountOnExit:!0,in:t,classNames:"mobileGadgetIconFadeup",timeout:400},o.a.createElement("a",{href:"mailto:email@brianstefanovich.com",style:{transitionDelay:"50ms"},className:"mobileGadgetIcon"},o.a.createElement("p",null,"Send me an eMail"),o.a.createElement(N.b,{className:"icon"}))),o.a.createElement("div",{className:"mobileGadgetButtonIcon",onClick:function(){a(!t)}},o.a.createElement(P,{gadgetOpen:t,className:"icon"}))))}function P(e){var t={transition:"transform 100ms ease-in-out",transform:"translate(0px, 0px)"},a={entering:{transform:"translate(0px, 0px)"},entered:{transform:"translate(0px, 10px)"},exiting:{transform:"translate(0px, 10px)"},exited:{transform:"translate(0px, 0px)"}},n={entering:{transform:"translate(0px, 0px)"},entered:{transform:"translate(0px, -9px)"},exiting:{transform:"translate(0px, -9px)"},exited:{transform:"translate(0px, 0px)"}};return o.a.createElement("svg",{viewBox:"0 0 14 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:e.className},o.a.createElement(E,{in:e.gadgetOpen,classNames:"mobileButtonIconUp"},(function(e){return o.a.createElement("path",{style:Object.assign({},t,a[e]),d:"M7 0L14 7L12.59 8.41L7 2.83L1.41 8.41L0 7L7 0Z",fill:"currentColor"})})),o.a.createElement(E,{in:e.gadgetOpen},(function(e){return o.a.createElement("path",{style:Object.assign({},t,n[e]),d:"M7 22L0 15L1.41 13.59L7 19.17L12.59 13.59L14 15L7 22Z",fill:"currentColor"})})))}var D={sm:{col:"col"},md:{offset:"1"},lg:{offset:"2"},xlg:{offset:"2"},max:{offset:"3"}},G={sm:{col:"4"},md:{offset:"1",col:"3"},lg:{offset:"2",col:"5"},xlg:{offset:"2",col:"4"},max:{offset:"3",col:"3"}},R={sm:{col:"col"},md:{col:"3"},lg:{col:"6"},xlg:{col:"7"},max:{col:"7"}};function H(e){var t=Object(s.b)({threshold:10}),a=t[0],n=t[1];return o.a.createElement("div",{className:"checkMyBlog",ref:n},o.a.createElement("div",{ref:e.navRef}),o.a.createElement(v,{mountOnEnter:!0,in:a,classNames:"checkMyBlogTitleFadeup",timeout:400},o.a.createElement("div",{className:"bx--row"},o.a.createElement("p",{ref:e.scrollRef,className:Object(s.a)(D,"checkMyBlogTitle")},"Check out my blog"))),e.contentData.map((function(e,t){var n=Date.parse(e.node.frontmatter.date),r=new Date(n).toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric",timeZone:"utc"});return o.a.createElement(v,{mountOnEnter:!0,in:a,classNames:"checkMyBlogCardFadeup",timeout:400},o.a.createElement("div",{style:{transitionDelay:3*(t+1)+"00ms"},className:"bx--row blogCard bx--no-gutter",key:t},o.a.createElement(O.a,{fluid:e.node.frontmatter.thumbnail.childImageSharp.fluid,className:Object(s.a)(G,"checkMyBlogImage"),alt:"blog thumbnail"}),o.a.createElement("div",{className:Object(s.a)(R,"blogCardBody")},o.a.createElement("div",null,o.a.createElement("p",{className:"blogCardTitle"},e.node.frontmatter.title),o.a.createElement("p",{className:"blogCardDate"},""+r)),o.a.createElement("p",{className:"blogCardText"},e.node.frontmatter.description),o.a.createElement("a",{href:"https://brianstefanovich.com/blog"+e.node.frontmatter.slug},o.a.createElement(N.a,{className:"blogIcon"})))))})))}function _(){var e=new Date;return o.a.createElement("div",{className:"footer"},o.a.createElement("div",{className:"footerIcons"},o.a.createElement("a",{href:"https://github.com/BrianStefanovich/",target:"_blank"},o.a.createElement(N.e,{className:"footerIcon"})),o.a.createElement("a",{href:"https://www.instagram.com/b_stefanovich/",target:"_blank"},o.a.createElement(N.g,{className:"footerIcon"})),o.a.createElement("a",{href:"https://twitter.com/bstefanovich",target:"_blank"},o.a.createElement(N.r,{className:"footerIcon"}))),o.a.createElement("hr",{className:"footerSeparator"}),o.a.createElement("p",{className:"footerText"},"Designed & Built by Brian Stefanovich © ",e.getFullYear(),". All rights reserved"))}var W={aboutMe:{data:{body:["Hi!, i’m Brian Stefanovich a full stack developer based in Montevideo, Uruguay. From websites, ecommerce platforms and social media integration, I like to develop web based business solutions. My goal is to deliver pixel perfect, reliable and efficient products.","Here are a few technologies I've been working with recently:"],technologies:["Javascript","Node Js","React","Python","PHP","Gatsby Js","Google Cloud Plattaform"]}},checkMyBlog:{data:[{title:"Time to Have More Fun",date:"15 de Noviembre del 1994",text:"Time to Have More Fun A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS\n"},{title:"Time to Have More Fun",date:"15 de Noviembre del 1994",text:"Time to Have More Fun A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS\n"},{title:"Time to Have More Fun",date:"15 de Noviembre del 1994",text:"Time to Have More Fun A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS\n"}]},heroBanner:{data:{preTitle:"Hi, my name is",title:"Brian Stefanovich",subTitle:"I design and develop websites & web applications",body:""}},thingsIBuild:{data:[{title:"WA Connection",body:"A nicer look at your starsrepos by number of stars, forks, and size. A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.\n",footer:"Next.js Tailwind CSS Firebase"},{title:"Octo Profile",body:"A nicer look at your GitHub profile and repository stats with data top repos by number of stars, forks, and size. A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size. A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.\n",footer:"Next.js Tailwind CSS Firebase"}]},otherProjects:{data:[{title:"Time to Have More Fun",body:"A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",footer:"Next.js Tailwind CSS Firebase"},{title:"Time to Have More Fun",body:"A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",footer:"Next.js Tailwind CSS Firebase"},{title:"Time to Have More Fun",body:"A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",footer:"Next.js Tailwind CSS Firebase"},{title:"Time to Have More Fun",body:"A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",footer:"Next.js Tailwind CSS Firebase"},{title:"Time to Have More Fun",body:"A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",footer:"Next.js Tailwind CSS Firebase"},{title:"Time to Have More Fun",body:"A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",footer:"Next.js Tailwind CSS Firebase"}]}},z=a("PCGi"),U=a("vCnt")},OTAv:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useScrollPosition=void 0;var n=a("q1tI"),o=a("4IfK"),s="undefined"!=typeof window,r={x:0,y:0},i=function(e){return null==e?void 0:e.getBoundingClientRect()},l=function(e){var t=e.element,a=e.useWindow,n=e.boundingElement;if(!s)return r;if(a)return{x:window.scrollX,y:window.scrollY};var o=i((null==t?void 0:t.current)||document.body),l=i(null==n?void 0:n.current);return o?l?{x:(l.x||0)-(o.x||0),y:(l.y||0)-(o.y||0)}:{x:o.left,y:o.top}:r};t.useScrollPosition=function(e,t,a,r,i,c){var m=n.useRef(l({useWindow:r,boundingElement:c})),u=null,d=function(){var t=l({element:a,useWindow:r,boundingElement:c});e({prevPos:m.current,currPos:t}),m.current=t,u=null};o.useIsomorphicLayoutEffect((function(){var e;if(s){var t=function(){i?null===u&&(u=setTimeout(d,i)):d()};return c?null===(e=c.current)||void 0===e||e.addEventListener("scroll",t,{passive:!0}):window.addEventListener("scroll",t,{passive:!0}),function(){var e;c?null===(e=c.current)||void 0===e||e.removeEventListener("scroll",t):window.removeEventListener("scroll",t),u&&clearTimeout(u)}}}),t)},t.useScrollPosition.defaultProps={deps:[],element:!1,useWindow:!1,wait:null,boundingElement:!1}},lTFH:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("OTAv");Object.defineProperty(t,"useScrollPosition",{enumerable:!0,get:function(){return n.useScrollPosition}})}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-309493bcfffc1b646675.js.map