webpackJsonp([17],{196:function(s,a,t){var l=t(0)(t(221),t(246),null,null);s.exports=l.exports},221:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={components:{"collapse-example":{template:'<div class="markdown-live-example">\n  <section>\n    <div>\n      <btn type="primary" @click="show=!show">Click me!</btn>\n    </div>\n    <br/>\n    <collapse v-model="show">\n      <div class="well" style="margin-bottom: 0">Hi there.</div>\n    </collapse>\n  </section>\n</div>',data:function(){return{show:!1}}},"collapse-accordion":{template:'<div class="markdown-live-example">\n  <div class="panel-group">\n    <div class="panel panel-default">\n      <div class="panel-heading" role="button" @click="toggleAccordion(0)">\n        <h4 class="panel-title">Collapsible Group Item #1</h4>\n      </div>\n      <collapse v-model="showAccordion[0]">\n        <div class="panel-body">\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n          moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n        </div>\n      </collapse>\n    </div>\n    <div class="panel panel-default">\n      <div class="panel-heading" role="button" @click="toggleAccordion(1)">\n        <h4 class="panel-title">Collapsible Group Item #2</h4>\n      </div>\n      <collapse v-model="showAccordion[1]">\n        <div class="panel-body">\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n          moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n        </div>\n      </collapse>\n    </div>\n    <div class="panel panel-info">\n      <div class="panel-heading" role="button" @click="toggleAccordion(2)">\n        <h4 class="panel-title">Collapsible Group Item #3</h4>\n      </div>\n      <collapse v-model="showAccordion[2]">\n        <div class="panel-body">\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n          moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n        </div>\n      </collapse>\n    </div>\n  </div>\n</div>',data:function(){return{showAccordion:[!0,!1,!1]}},methods:{toggleAccordion:function(s){this.showAccordion[s]?this.$set(this.showAccordion,s,!1):this.showAccordion=this.showAccordion.map(function(a,t){return t===s})}}},"collapse-navbar":{template:'<div class="markdown-live-example">\n  <nav class="navbar navbar-default">\n    <div class="container-fluid">\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" @click="showNavbar=!showNavbar">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" role="button">Brand</a>\n      </div>\n      <collapse class="navbar-collapse" v-model="showNavbar">\n        <ul class="nav navbar-nav">\n          <li class="active"><a role="button">Link <span class="sr-only">(current)</span></a></li>\n          <li><a role="button">Link</a></li>\n        </ul>\n        <form class="navbar-form navbar-left">\n          <div class="form-group">\n            <input type="text" class="form-control" placeholder="Search">\n          </div>\n          <btn native-type="submit">Submit</btn>\n        </form>\n        <ul class="nav navbar-nav navbar-right">\n          <li><a role="button">Link</a></li>\n          <dropdown tag="li">\n            <a class="dropdown-toggle" role="button">Dropdown <span class="caret"></span></a>\n            <template slot="dropdown">\n              <li><a role="button">Action</a></li>\n              <li><a role="button">Another action</a></li>\n              <li><a role="button">Something else here</a></li>\n              <li role="separator" class="divider"></li>\n              <li><a role="button">Separated link</a></li>\n            </template>\n          </dropdown>\n        </ul>\n      </collapse>\n    </div>\n  </nav>\n</div>',data:function(){return{showNavbar:!1}}}}}},246:function(s,a){s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("markdown-wrapper",[t("h1",{attrs:{id:"collapse"}},[s._v("Collapse "),t("a",{staticClass:"header-anchor",attrs:{href:"#collapse","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("blockquote",[t("p",[s._v("Flexible plugin for easy toggle behavior.")])]),s._v(" "),t("h2",{attrs:{id:"example"}},[s._v("Example "),t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("p",[s._v("Click the button below to show and hide another element.")]),s._v(" "),t("collapse-example",{ref:"collapse-example"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"show=!show"')]),s._v(">")]),s._v("Click me!"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v("/>")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("collapse")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"show"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"well"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"margin-bottom: 0"')]),s._v(">")]),s._v("Hi there."),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("collapse")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("show")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- collapse-example.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"accordion"}},[s._v("Accordion "),t("a",{staticClass:"header-anchor",attrs:{href:"#accordion","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("p",[s._v("Extend the default collapse behavior to create an accordion with the panel component.")]),s._v(" "),t("collapse-accordion",{ref:"collapse-accordion"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"panel-group"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"panel panel-default"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"panel-heading"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("role")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"button"')]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"toggleAccordion(0)"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("h4")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"panel-title"')]),s._v(">")]),s._v("Collapsible Group Item #1"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("h4")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("collapse")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"showAccordion[0]"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"panel-body"')]),s._v(">")]),s._v("\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n          moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("collapse")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"panel panel-default"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"panel-heading"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("role")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"button"')]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"toggleAccordion(1)"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("h4")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"panel-title"')]),s._v(">")]),s._v("Collapsible Group Item #2"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("h4")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("collapse")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"showAccordion[1]"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"panel-body"')]),s._v(">")]),s._v("\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n          moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("collapse")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"panel panel-info"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"panel-heading"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("role")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"button"')]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"toggleAccordion(2)"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("h4")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"panel-title"')]),s._v(">")]),s._v("Collapsible Group Item #3"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("h4")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("collapse")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"showAccordion[2]"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"panel-body"')]),s._v(">")]),s._v("\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n          moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("collapse")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("showAccordion")]),s._v(": ["),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(", "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(", "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("]\n      }\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      toggleAccordion (index) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".showAccordion[index]) {\n          "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$set("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".showAccordion, index, "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(")\n        } "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" {\n          "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".showAccordion = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".showAccordion.map("),t("span",{attrs:{class:"hljs-function"}},[s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("v, i")]),s._v(") =>")]),s._v(" i === index)\n        }\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- collapse-accordion.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"navbar"}},[s._v("Navbar "),t("a",{staticClass:"header-anchor",attrs:{href:"#navbar","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("p",[t("strong",[s._v("Note")]),s._v(":")]),s._v(" "),t("ul",[t("li",[s._v("Change viewport to "),t("strong",[s._v("mobile size")]),s._v(" to view the collapse part.")]),s._v(" "),t("li",[s._v("Remember to add "),t("code",{pre:!0},[s._v('class="navbar-collapse"')]),s._v(" to the collapse component.")])]),s._v(" "),t("collapse-navbar",{ref:"collapse-navbar"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("nav")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"navbar navbar-default"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"container-fluid"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"navbar-header"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("button")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"button"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"navbar-toggle collapsed"')]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"showNavbar=!showNavbar"')]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"sr-only"')]),s._v(">")]),s._v("Toggle navigation"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"icon-bar"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"icon-bar"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"icon-bar"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("button")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"navbar-brand"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("role")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"button"')]),s._v(">")]),s._v("Brand"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("collapse")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"navbar-collapse"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"showNavbar"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("ul")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"nav navbar-nav"')]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"active"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("role")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"button"')]),s._v(">")]),s._v("Link "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"sr-only"')]),s._v(">")]),s._v("(current)"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("role")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"button"')]),s._v(">")]),s._v("Link"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("ul")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("form")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"navbar-form navbar-left"')]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"form-group"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"form-control"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"Search"')]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("native-type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"submit"')]),s._v(">")]),s._v("Submit"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("form")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("ul")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"nav navbar-nav navbar-right"')]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("role")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"button"')]),s._v(">")]),s._v("Link"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("dropdown")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("tag")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"li"')]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"dropdown-toggle"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("role")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"button"')]),s._v(">")]),s._v("Dropdown "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"caret"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"dropdown"')]),s._v(">")]),s._v("\n              "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("role")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"button"')]),s._v(">")]),s._v("Action"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),s._v("\n              "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("role")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"button"')]),s._v(">")]),s._v("Another action"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),s._v("\n              "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("role")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"button"')]),s._v(">")]),s._v("Something else here"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),s._v("\n              "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("role")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"separator"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"divider"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),s._v("\n              "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("role")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"button"')]),s._v(">")]),s._v("Separated link"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),s._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("dropdown")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("ul")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("collapse")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("nav")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("showNavbar")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- collapse-navbar.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h1",{attrs:{id:"api-reference"}},[s._v("API Reference "),t("a",{staticClass:"header-anchor",attrs:{href:"#api-reference","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("h2",{attrs:{id:"collapsevue"}},[t("a",{attrs:{href:"https://github.com/wxsms/uiv/blob/release/src/components/collapse/Collapse.vue"}},[s._v("Collapse.vue")]),s._v(" "),t("a",{staticClass:"header-anchor",attrs:{href:"#collapsevue","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("h3",{attrs:{id:"props"}},[s._v("Props "),t("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered table-hover"},[t("thead",[t("tr",[t("th",[s._v("Name")]),s._v(" "),t("th",[s._v("Type")]),s._v(" "),t("th",[s._v("Default")]),s._v(" "),t("th",[s._v("Required")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("v-model")])]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("false")]),s._v(" "),t("td",[s._v("✔")]),s._v(" "),t("td",[s._v("Show / hide the component.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("tag")])]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("div")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("The HTML tag that render the collapse component.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("transition-duration")])]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("350")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Collapse transition speed. Use 0 to disable transition.")])])])])]),t("h3",{attrs:{id:"slots"}},[s._v("Slots "),t("a",{staticClass:"header-anchor",attrs:{href:"#slots","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered table-hover"},[t("thead",[t("tr",[t("th",[s._v("Name")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("default")])]),s._v(" "),t("td",[s._v("Replace as the collapse body.")])])])])]),t("h3",{attrs:{id:"events"}},[s._v("Events "),t("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered table-hover"},[t("thead",[t("tr",[t("th",[s._v("Name")]),s._v(" "),t("th",[s._v("Params")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("show")])]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("This event fires immediately when the v-model prop is set to true.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("shown")])]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("hide")])]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("This event is fired immediately when the v-model prop is set to false.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("hidden")])]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).")])])])])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=17.c7c31734c1f0437fdcf9.js.map