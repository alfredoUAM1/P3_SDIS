(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{364:function(e,t,r){"use strict";r.r(t);var n={name:"Formulario",data:function(){return{abierto:!1,valid:!0,val:0,select:"",date:"",checkbox:!1,items:["compras","gastos de administracion","alquiler de oficina","salarios","gastos de produccion"]}},methods:{required:function(e){return!!e||"required value"},add:function(){this.$emit("input",{Gasto:this.val,Categoria:this.select,Fecha:this.date})}}},o=r(75),l=r(109),c=r.n(l),d=r(180),v=r(433),f=r(432),m=r(361),h=r(354),O=r(362),_=r(337),k=r(423),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{align:"left",label:"Gastos",rules:[e.required]},model:{value:e.val,callback:function(t){e.val=e._n(t)},expression:"val"}}),e._v(" "),r("br"),e._v(" "),r("v-select",{attrs:{align:"left",items:e.items,rules:[e.required],label:"Categoria",required:""},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}}),e._v(" "),r("br"),e._v(" "),r("v-menu",{attrs:{align:"left","close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-text-field",e._g(e._b({attrs:{label:"Picker without buttons","prepend-icon":"mdi-calendar",rules:[e.required],readonly:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",o,!1),n))]}}]),model:{value:e.abierto,callback:function(t){e.abierto=t},expression:"abierto"}},[e._v(" "),r("v-date-picker",{on:{input:function(t){e.abierto=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),e._v(" "),r("v-row",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{disabled:!e.valid,color:"success"},on:{click:e.add}},[e._v(" Submit ")]),e._v(" "),r("v-spacer")],1)],1)}),[],!1,null,"2d4806a7",null);t.default=component.exports;c()(component,{VBtn:d.a,VDatePicker:v.a,VForm:f.a,VMenu:m.a,VRow:h.a,VSelect:O.a,VSpacer:_.a,VTextField:k.a})},365:function(e,t,r){"use strict";r.r(t);var n={name:"Tabla",props:{items:{type:Array,value:function(){return[]}}},data:function(){return{singleSelect:!1,valid:!1,selected:[],headers:[{text:"Gasto",value:"Gasto"},{text:"Categoria",value:"Categoria"},{text:"Fecha",value:"Fecha"}]}},methods:{remove:function(){this.$emit("output",this.selected[0])}}},o=r(75),l=r(109),c=r.n(l),d=r(180),v=r(434),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,"items-per-page":5,"item-key":"key","show-select":""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),r("v-btn",{attrs:{disabled:e.valid,color:"success"},on:{click:e.remove}},[e._v("Eliminar")])],1)}),[],!1,null,"58394846",null);t.default=component.exports;c()(component,{VBtn:d.a,VDataTable:v.a})},436:function(e,t,r){"use strict";r.r(t);r(51);var n=r(7),o=r(2),l=r(101),c=r(364),d=r(365);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"pruebaFormulario",components:{Formulario:c.default,Tabla:d.default},data:function(){return{}},computed:f({},Object(l.c)("store",["items"])),methods:f({},Object(l.b)("store",["add","remove","initialize"])),fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.initialize();case 2:case"end":return t.stop()}}),t)})))()}},h=r(75),O=r(109),_=r.n(O),k=r(351),component=Object(h.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("v-card",[t("formulario",{on:{input:this.add}})],1),this._v(" "),t("tabla",{staticClass:"mt-5",attrs:{items:this.items},on:{output:this.remove}})],1)}),[],!1,null,"52c3f8ed",null);t.default=component.exports;_()(component,{Formulario:r(364).default,Tabla:r(365).default}),_()(component,{VCard:k.a})}}]);