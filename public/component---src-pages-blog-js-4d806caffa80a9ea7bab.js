(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6Gk8":function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l),o=t("Wbzz"),r=t("9eSz"),c=t.n(r);a.a=function(){var e,a,t,l,r=Object(o.useStaticQuery)("916993862"),i=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author,s=null===(a=r.site.siteMetadata)||void 0===a?void 0:a.social,m=null==r||null===(t=r.avatar)||void 0===t||null===(l=t.childImageSharp)||void 0===l?void 0:l.fixed;return n.a.createElement("div",{className:"bio"},m&&n.a.createElement(c.a,{fixed:m,alt:(null==i?void 0:i.name)||"",className:"bio-avatar",imgStyle:{borderRadius:"50%"}}),(null==i?void 0:i.name)&&n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,i.name)," ",(null==i?void 0:i.summary)||null," ",n.a.createElement("a",{href:"https://twitter.com/"+((null==s?void 0:s.twitter)||"")},"You should follow them on Twitter")))}},Bl7J:function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l),o=t("Wbzz");a.a=function(e){var a,t=e.location,l=e.title,r=e.children,c="/"===t.pathname;return a=c?n.a.createElement("h1",{className:"main-heading"},n.a.createElement(o.Link,{to:"/"},l)):n.a.createElement(o.Link,{className:"header-link-home",to:"/"},l),n.a.createElement("div",{className:"global-wrapper","data-is-root-path":c},n.a.createElement("header",{className:"global-header"},a),n.a.createElement("main",null,r),n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},vx99:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),o=t("Wbzz"),r=t("A9nh"),c=t("6Gk8"),i=(t("Bl7J"),t("vrFN")),s=t("vCnt"),m=t("PCGi"),d=t("9eSz"),u=t.n(d),g={sm:{col:"4"},md:{offset:"1",col:"6"},lg:{offset:"2",col:"12"},xlg:{offset:"2",col:"12"},max:{offset:"3",col:"10"}},b={sm:{col:"4"},md:{col:"4"},lg:{col:"8"},xlg:{col:"4"},max:{col:"4"}};a.default=function(e){var a=e.data,t=(e.location,a.allMarkdownRemark.nodes);return 0===t.length?n.a.createElement("div",{className:"blog"},n.a.createElement(i.a,{title:"Blog"}),n.a.createElement(c.a,null),n.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.a.createElement("div",{className:"blog"},n.a.createElement(s.a,null),n.a.createElement(i.a,{title:"Blog"}),n.a.createElement("div",{className:"bx--grid bx--grid--condensed"},n.a.createElement("div",{className:"box-row"},n.a.createElement("div",{className:Object(r.a)(g,"bx--no-gutter")},n.a.createElement("div",{className:"blogIndex bx--row bx--no-gutter"},t.map((function(e,a){var t=e.frontmatter.title;return console.log(e),n.a.createElement("div",{className:Object(r.a)(b,"blogIndexCard bx--no-gutter"),onClick:function(){Object(o.navigate)(e.frontmatter.slug)}},n.a.createElement(u.a,{className:"blogIndexCardImage",fluid:e.frontmatter.thumbnail.childImageSharp.fluid}),n.a.createElement("h2",{className:"blogIndexCardTitle"},t),n.a.createElement("small",{className:"blogIndexCardDate"},e.frontmatter.date),n.a.createElement("p",{className:"blogIndexCardBody"},e.frontmatter.description))}))))),n.a.createElement(m.a,null)))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-4d806caffa80a9ea7bab.js.map