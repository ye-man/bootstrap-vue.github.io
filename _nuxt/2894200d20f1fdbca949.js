(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{307:function(t,e,n){var o={"./alert/README.md":[374,53],"./badge/README.md":[373,52],"./breadcrumb/README.md":[372,51],"./button-group/README.md":[370,49],"./button-toolbar/README.md":[369,48],"./button/README.md":[371,50],"./card/README.md":[368,47],"./carousel/README.md":[367,46],"./collapse/README.md":[366,45],"./dropdown/README.md":[365,44],"./embed/README.md":[364,43],"./form-checkbox/README.md":[362,41],"./form-file/README.md":[361,40],"./form-group/README.md":[360,39],"./form-input/README.md":[359,38],"./form-radio/README.md":[358,37],"./form-select/README.md":[357,36],"./form-textarea/README.md":[356,35],"./form/README.md":[363,42],"./image/README.md":[355,34],"./input-group/README.md":[354,33],"./jumbotron/README.md":[353,32],"./layout/README.md":[352,31],"./link/README.md":[351,30],"./list-group/README.md":[350,29],"./media/README.md":[349,28],"./modal/README.md":[348,27],"./nav/README.md":[347,26],"./navbar/README.md":[346,25],"./pagination-nav/README.md":[344,23],"./pagination/README.md":[345,24],"./popover/README.md":[343,22],"./progress/README.md":[342,21],"./table/README.md":[341,20],"./tabs/README.md":[340,19],"./tooltip/README.md":[339,18]};function r(t){var e=o[t];return e?n.e(e[1]).then(function(){var t=n(e[0]);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})}):Promise.resolve().then(function(){var e=new Error('Cannot find module "'+t+'".');throw e.code="MODULE_NOT_FOUND",e})}r.keys=function(){return Object.keys(o)},r.id=307,t.exports=r},309:function(t,e,n){},499:function(t,e,n){"use strict";var o=n(309);n.n(o).a},522:function(t,e,n){"use strict";n.r(e);var o=n(4),r=n.n(o),a=n(9),s=n.n(a),i=n(21),l=n.n(i),c=n(19),u=n.n(c),m=n(3),p=n.n(m),d=n(377),v=n.n(d),f={props:{component:{},slots:{type:Array,default:function(){return[]}},events:{type:Array,default:function(){return[]}}},computed:{componentOptions:function(){var t=p.a.options.components[this.component];return t&&t.options?t.options:{}},props_fields:function(){var t=p.a.options.components[this.component],e=[];t&&(e=t.options.props);var n={prop:{label:"Property"},type:{label:"Type"},default:{label:"Default Value"}};return e.length>0&&e.filter(function(t){return t.required}).length>0&&(n.required={label:"Required"}),n},events_fields:function(){return{event:{label:"Event"},args:{label:"Arguments"},description:{label:"Description"}}},slots_fields:function(){return{name:{label:"Slot"},description:{label:"Description"}}},props_items:function(){var t=p.a.options.components[this.component];if(!t)return{};var e=t.options.props;return u()(e).map(function(t){var n=e[t],o=n.type||Object,r=String;Array.isArray(o)?(r=o[0],o=o.map(function(t){return t.name}).join(" or ")):(r=o,o=o.name);var a=n.default;a instanceof Function&&!Array.isArray(a)&&(a=a()),"string"!=typeof a&&(a=l()(a)),""!==a&&null!==a&&"null"!==a||(a=""),a=(a||"").replace(/"/g,"'");var s=n.required?"Yes":"";return{prop:v()(t),type:o,required:s,typeClass:r,default:a}})},componentName:function(){return v()(this.component)},tag:function(){return"<"+this.componentName+">"},githubURL:function(){return"https://github.com/bootstrap-vue/bootstrap-vue/tree/dev/src/components/"+this.$route.params.slug+"/"+v()(this.component).replace(/^b-/,"")+".js"}}},E=(n(499),n(7)),_=Object(E.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.component?n("section",{staticClass:"bd-content"},[n("b-row",{attrs:{tag:"header","align-v":"center"}},[n("b-col",{attrs:{sm:"9"}},[n("h2",[n("code",[t._v(t._s(t.tag))])])]),t._v(" "),n("b-col",{staticClass:"text-sm-right",attrs:{sm:"3"}},[n("b-btn",{attrs:{variant:"outline-secondary",size:"sm",href:t.githubURL,target:"_blank"}},[t._v("view source")])],1)],1),t._v(" "),t.props_items&&t.props_items.length>0?n("article",[n("h4",[t._v("Properties")]),t._v(" "),n("b-table",{attrs:{items:t.props_items,fields:t.props_fields,small:"","head-variant":"default",striped:""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.value?n("code",[t._v(t._s(e.value))]):t._e()]}}])})],1):t._e(),t._v(" "),t.slots&&t.slots.length>0?n("article",[n("h4",[t._v("Slots")]),t._v(" "),n("b-table",{attrs:{items:t.slots,fields:t.slots_fields,small:"","head-variant":"default",striped:""}})],1):t._e(),t._v(" "),t.events&&t.events.length>0?n("article",[n("h4",[t._v("Events")]),t._v(" "),n("b-table",{attrs:{items:t.events,fields:t.events_fields,small:"","head-variant":"default",striped:""},scopedSlots:t._u([{key:"args",fn:function(e){return t._l(e.value,function(o){return n("div",{key:"event-"+e.item.event+"-"+(o.arg?o.arg:"none")},[o.arg?n("code",[t._v(t._s(o.arg))]):t._e(),t._v(" "),n("span",{domProps:{innerHTML:t._s(o.description)}})])})}}])})],1):t._e()],1):t._e()},[],!1,null,"691193b0",null).exports,b=n(314),g=n(40),A=n(288),h={components:{componentdoc:_,importdoc:b.a},mixins:[A.a],layout:"docs",validate:function(t){var e=t.params;return Boolean(g.a[e.slug])},asyncData:function(){var t=s()(r.a.mark(function t(e){var o,a,s=e.params;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e=s.slug,n(307)("./"+e+"/README.md");case 2:return o=t.sent,a=g.a[s.slug],t.abrupt("return",{readme:o.default,meta:a});case 5:case"end":return t.stop()}var e},t,this)}));return function(e){return t.apply(this,arguments)}}()},D=Object(E.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{directives:[{name:"play",rawName:"v-play"}],staticClass:"bd-content",domProps:{innerHTML:t._s(t.readme)}}),t._v(" "),n("componentdoc",{attrs:{component:t.meta.component,events:t.meta.events,slots:t.meta.slots}}),t._v(" "),n("b-card",{staticClass:"my-4"},[n("small",{staticClass:"font-italic"},[t._v("\n            Trying to get native browser events working on your component? Use the\n            "),n("code",[t._v(".native")]),t._v("\n            modifier to capture browser native events such as:\n            "),n("code",[t._v('@click.native="..."')]),t._v(",\n            "),n("code",[t._v('@mouseover.native="..."')]),t._v(", etc. See the the official\n            "),n("a",{attrs:{href:"https://vuejs.org/v2/guide/components.html#Binding-Native-Events-to-Components"}},[t._v("Vue.js documentation")]),t._v("\n            for more information.\n        ")])]),t._v(" "),t._l(t.meta.components,function(t){return n("componentdoc",{key:t,attrs:{component:t}})}),t._v(" "),n("importdoc",{attrs:{meta:t.meta}})],2)},[],!1,null,null,null);e.default=D.exports}}]);