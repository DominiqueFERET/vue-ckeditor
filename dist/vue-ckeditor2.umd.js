!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).VueCkeditor=n()}(this,function(){"use strict";var t=(new Date).getTime();return function(t,n,e,i,o,s,a,c,r,d){"boolean"!=typeof a&&(r=c,c=a,a=!1);var u,f="function"==typeof e?e.options:e;if(t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),i&&(f._scopeId=i),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,r(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},f._ssrRegister=u):n&&(u=a?function(){n.call(this,d(this.$root.$options.shadowRoot))}:function(t){n.call(this,c(t))}),u)if(f.functional){var h=f.render;f.render=function(t,n){return u.call(n),h(t,n)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,u):[u]}return e}({render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"ckeditor"},[n("textarea",{attrs:{name:this.name,id:this.id,types:this.types,config:this.config,disabled:this.readOnlyMode},domProps:{value:this.value}})])},staticRenderFns:[]},void 0,{name:"VueCkeditor",props:{name:{type:String,default:function(){return"editor-".concat(++t)}},value:{type:String},id:{type:String,default:function(){return"editor-".concat(t)}},types:{type:String,default:function(){return"classic"}},config:{type:Object,default:function(){}},instanceReadyCallback:{type:Function},readOnlyMode:{type:Boolean,default:function(){return!1}}},data:function(){return{instanceValue:""}},computed:{instance:function(){return CKEDITOR.instances[this.id]}},watch:{value:function(t){try{this.instance&&this.update(t)}catch(t){}},readOnlyMode:function(t){this.instance.setReadOnly(t)}},mounted:function(){this.create()},methods:{create:function(){var t=this;"undefined"==typeof CKEDITOR?console.log("CKEDITOR is missing (http://ckeditor.com/)"):("inline"===this.types?CKEDITOR.inline(this.id,this.config):CKEDITOR.replace(this.id,this.config),this.instance.setData(this.value),this.instance.on("instanceReady",function(){t.instance.setData(t.value)}),this.instance.on("change",this.onChange),this.instance.on("mode",this.onMode),this.instance.on("blur",function(n){t.$emit("blur",n)}),this.instance.on("focus",function(n){t.$emit("focus",n)}),this.instance.on("contentDom",function(n){t.$emit("contentDom",n)}),CKEDITOR.on("dialogDefinition",function(n){t.$emit("dialogDefinition",n)}),this.instance.on("fileUploadRequest",function(n){t.$emit("fileUploadRequest",n)}),this.instance.on("fileUploadResponse",function(n){setTimeout(function(){t.onChange()},0),t.$emit("fileUploadResponse",n)}),void 0!==this.instanceReadyCallback&&this.instance.on("instanceReady",this.instanceReadyCallback),this.$once("hook:beforeDestroy",function(){t.destroy()}))},update:function(t){this.instanceValue!==t&&(this.instance.setData(t,{internal:!1}),this.instanceValue=t)},destroy:function(){try{var t=window.CKEDITOR;t.instances&&t.instances[this.id]&&t.instances[this.id].destroy()}catch(t){}},onMode:function(){var t=this;if("source"===this.instance.mode){var n=this.instance.editable();n.attachListener(n,"input",function(){t.onChange()})}},onChange:function(){var t=this.instance.getData();t!==this.value&&(this.$emit("input",t),this.instanceValue=t)}}},void 0,!1,void 0,void 0,void 0)});
