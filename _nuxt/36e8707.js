(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{310:function(t,e,r){var n=r(348);t.exports=n.createClient({space:"bz73q1c2zfi6",accessToken:"BhKQunLf30OZXZUfoRsIwrnCRT7RyoxTqGPTfzinwps"})},345:function(t,e){},346:function(t,e,r){var content=r(431);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("6799c485",content,!0,{sourceMap:!1})},430:function(t,e,r){"use strict";r(346)},431:function(t,e,r){(e=r(30)(!1)).push([t.i,"article{max-width:620px;margin:auto;padding:10px 0}.p-article-avatar{display:flex;align-items:center;margin-bottom:20px}.p-article-avatar__thumb{position:relative;width:45px;height:45px;overflow:hidden;border-radius:50%;margin-right:10px}.p-article-avatar__thumb img{position:absolute;width:45px;height:45px}.p-article-avatar__name{margin-bottom:4px}.p-article-avatar__date,.p-article-avatar__name{display:block;font-size:1rem}.p-article-title{font-size:2rem;margin-bottom:15px}.p-article-thumb{margin-bottom:30px}.p-article-content h1{font-size:3rem;margin-bottom:20px}.p-article-content h2{font-size:2rem;margin-bottom:20px}.p-article-content p{margin:0 0 20px;font-size:1.2rem;line-height:1.8}.p-article-content img{max-width:100%;border:1px solid #000}",""]),t.exports=e},435:function(t,e,r){"use strict";r.r(e);r(78),r(15),r(324),r(29);var n=r(325),c=r(326),o=r(349),l=r(350),f=r(327),d=r(39),v=r(328),m=r(310),h=r.n(m);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var x=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},y=function(t){Object(o.a)(r,t);var e=_(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).post=null,t}return Object(c.a)(r,[{key:"asyncData",value:function(t){var e=t.env,r=t.params,n=t.payload;return n?{post:n}:h.a.getEntries({content_type:e.CTF_POST_TYPE_ID,"fields.slug":r.slug}).then((function(t){return{post:t.items[0]}})).catch((function(t){return console.log(t)}))}},{key:"head",value:function(){return this.post?{title:this.post.fields.title}:{}}}]),r}(v.Vue),w=y=x([v.Component],y),C=(r(430),r(20)),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"l-container"},[r("article",[r("div",{staticClass:"p-article-header"},[r("div",{staticClass:"p-article-avatar"},[r("div",{staticClass:"p-article-avatar__thumb"},[r("img",{attrs:{src:t.post.fields.author.fields.avatar.fields.file.url}})]),t._v(" "),r("div",{staticClass:"p-article-avatar__content"},[r("span",{staticClass:"p-article-avatar__name"},[t._v("著者: "+t._s(t.post.fields.author.fields.name)+"/"+t._s(t.post.fields.author.fields.job))]),t._v(" "),r("span",{staticClass:"p-article-avatar__date"},[t._v(t._s(t.post.sys.updatedAt))])])]),t._v(" "),r("h1",{staticClass:"p-article-title"},[t._v(t._s(t.post.fields.title))])]),t._v(" "),r("div",{staticClass:"p-article-thumb"},[r("img",{attrs:{src:t.post.fields.thumbnail.fields.file.url}})]),t._v(" "),r("div",{staticClass:"p-article-content",domProps:{innerHTML:t._s(t.$md.render(t.post.fields.content))}})])])}),[],!1,null,null,null);e.default=component.exports}}]);