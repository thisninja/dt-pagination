!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vuejs-uib-pagination"]=t():e["vuejs-uib-pagination"]=t()}(this,function(){return function(e){function t(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,a){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,i){"use strict";t.a=function(e){return e},t.b=function(e){return void 0!==e}},function(e,t,i){"use strict";function a(e,t){e.component("uib-pagination",{data:n.a,props:o,watch:r.a,methods:l,template:u.a,computed:c,directives:d})}Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"install",function(){return a});var n=i(2),r=i(3),s=i(4),u=i.n(s),o=i(5),l=i(6),c=i(7),d=i(8);t.default=a,"undefined"!=typeof window&&window.Vue&&window.Vue.use(a)},function(e,t,i){"use strict";var a=i(0);t.a=function(){return{currentPage:a.b(this.value.currentPage)?this.value.currentPage:1,href:location.href}}},function(e,t,i){"use strict";t.a={"value.currentPage":function(e,t){this.currentPage=e,null!=t&&this.$emit("change")}}},function(e,t){e.exports='<ul class=pagination role=menu> <li role=menuitem v-if=boundaryLinks :class="{ disabled: isNoPreviousOrDisabled }" class=pagination-first> <a :href="`${href}?page=1`" @click="selectPage(1, $event)" :disabled=isNoPreviousOrDisabled v-uib-tabindex-toggle=isNoPreviousOrDisabled>{{ getText(\'first\') }}</a> </li> <li role=menuitem v-if=directionLinks :class="{ disabled: isNoPreviousOrDisabled }" class=pagination-prev> <a :href="`${href}?page=${currentPage - 1}`" @click="selectPage(currentPage - 1, $event)" :disabled=isNoPreviousOrDisabled v-uib-tabindex-toggle=isNoPreviousOrDisabled>{{ getText(\'previous\') }}</a> </li> <li role=menuitem v-for="(page, index) in pages" :key=index :class="{ active: page.active, disabled: disabled && !page.active }" class=pagination-page> <a :href="`${href}?page=${page.number}`" @click="selectPage(page.number, $event)" :disabled="disabled && !page.active" v-uib-tabindex-toggle="disabled && !page.active" v-html=page.text></a> </li> <li role=menuitem v-if=directionLinks :class="{ disabled: isNoNextOrDisabled }" class=pagination-next> <a :href="`${href}?page=${currentPage + 1}`" @click="selectPage(currentPage + 1, $event)" :disabled=isNoNextOrDisabled v-uib-tabindex-toggle=isNoNextOrDisabled>{{ getText(\'next\') }}</a> </li> <li role=menuitem v-if=boundaryLinks :class="{ disabled: isNoNextOrDisabled }" class=pagination-last> <a :href="`${href}?page=${totalPages}`" @click="selectPage(totalPages, $event)" :disabled=isNoNextOrDisabled v-uib-tabindex-toggle=isNoNextOrDisabled>{{ getText(\'last\') }}</a> </li> </ul>'},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"boundaryLinks",function(){return n}),i.d(t,"boundaryLinkNumbers",function(){return r}),i.d(t,"directionLinks",function(){return s}),i.d(t,"disabled",function(){return u}),i.d(t,"firstText",function(){return o}),i.d(t,"forceEllipses",function(){return l}),i.d(t,"itemsPerPage",function(){return c}),i.d(t,"lastText",function(){return d}),i.d(t,"maxSize",function(){return f}),i.d(t,"nextText",function(){return g}),i.d(t,"value",function(){return h}),i.d(t,"pageLabel",function(){return b}),i.d(t,"previousText",function(){return p}),i.d(t,"rotate",function(){return P}),i.d(t,"totalItems",function(){return v});var a=i(0),n={type:Boolean,default:!1},r={type:Boolean,default:!1},s={type:Boolean,default:!0},u={type:Boolean,default:!1},o={type:String,default:"First"},l={type:Boolean,default:!1},c={type:Number,default:10},d={type:String,default:"Last"},f={type:Number,default:void 0},g={type:String,default:"Next"},h={type:Object,required:!0,validator:function(e){return!a.b(e.currentPage)||"number"==typeof e.currentPage}},b={type:Function,default:a.a},p={type:String,default:"Previous"},P={type:Boolean,default:!0},v={type:Number,default:0}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getText=function(e){return this[e+"Text"]},t.selectPage=function(e,t){t&&t.preventDefault(),(!this.disabled||!t)&&this.currentPage!==e&&e>0&&e<=this.totalPages&&(t&&t.target&&t.target.blur(),this.currentPage=e)},t.makePage=function(e,t,i){return{number:e,text:t,active:i}},t.createDataForModel=function(e,t){var i={currentPage:e,numPages:t};return Object.defineProperties(i,{numPages:{get:function(){return t}}}),i}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isNoPreviousOrDisabled=function(){return this.noPrevious||this.disabled},t.isNoNextOrDisabled=function(){return this.noNext||this.disabled},t.noNext=function(){return this.value.currentPage===this.totalPages},t.noPrevious=function(){return 1===this.value.currentPage},t.totalPages=function(){var e=this.itemsPerPage<1?1:Math.ceil(this.totalItems/this.itemsPerPage);return Math.max(e||0,1)},t.pages=function(){var e=[];if(this.currentPage<=0||this.currentPage>this.totalPages)return e;var t=1,i=this.totalPages,n=a.b(this.maxSize)&&this.maxSize<this.totalPages;n&&(this.rotate?(i=(t=Math.max(this.currentPage-Math.floor(this.maxSize/2),1))+this.maxSize-1)>this.totalPages&&(t=(i=this.totalPages)-this.maxSize+1):(t=(Math.ceil(this.currentPage/this.maxSize)-1)*this.maxSize+1,i=Math.min(t+this.maxSize-1,this.totalPages)));for(var r=t;r<=i;r++){var s=this.makePage(r,this.pageLabel(r),r===this.currentPage);e.push(s)}if(n&&this.maxSize>0&&(!this.rotate||this.forceEllipses||this.boundaryLinkNumbers)){if(t>1){if(!this.boundaryLinkNumbers||t>3){var u=this.makePage(t-1,"...",!1);e.unshift(u)}if(this.boundaryLinkNumbers){if(3===t){var o=this.makePage(2,"2",!1);e.unshift(o)}var l=this.makePage(1,"1",!1);e.unshift(l)}}if(i<this.totalPages){if(!this.boundaryLinkNumbers||i<this.totalPages-2){var c=this.makePage(i+1,"...",!1);e.push(c)}if(this.boundaryLinkNumbers){if(i===this.totalPages-2){var d=this.makePage(this.totalPages-1,this.totalPages-1,!1);e.push(d)}var f=this.makePage(this.totalPages,this.totalPages,!1);e.push(f)}}}return this.$emit("input",this.createDataForModel(this.currentPage,this.totalPages)),e};var a=i(0)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.uibTabindexToggle=function(e,t){t.value?e.setAttribute("tabindex","-1"):e.removeAttribute("tabindex")}}])});
//# sourceMappingURL=vuejs-uib-pagination.js.map