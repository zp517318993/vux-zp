!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxXNumber=t():e.vuxXNumber=t()}(this,function(){return function(e){function t(s){if(i[s])return i[s].exports;var u=i[s]={exports:{},id:s,loaded:!1};return e[s].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){e.exports=i(4)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{min:Number,max:Number,step:{type:Number,"default":1},value:{type:Number,"default":0},title:String,fillable:{type:Boolean,"default":!0},width:{type:Number,"default":50}},computed:{disabledMin:function(){return"undefined"!=typeof this.min&&this.value<=this.min},disabledMax:function(){return"undefined"!=typeof this.max&&this.value>=this.max}},ready:function(){},watch:{value:function(e,t){this.min&&this.value<this.min&&(this.value=this.min),this.max&&this.value>this.max&&(this.value=this.max),this.$emit("on-change",this.value)}},methods:{add:function(){this.disabledMax||(this.value+=this.step)},sub:function(){this.disabledMin||(this.value-=this.step)}}}},function(e,t){},function(e,t){e.exports=' <div class=weui_cell> <div class="weui_cell_bd weui_cell_primary"> <p>{{title}}</p> </div> <div class=weui_cell_ft v-show=!readonly style=font-size:0> <a @click=sub() class="vux-number-selector vux-number-selector-sub needsclick" :class="{\'vux-number-disabled\':disabledMin}">-</a> <input v-model=value class=vux-number-input :style="{width: width+\'px\'}" number :readonly=!fillable pattern=[0-9]* /> <a @click=add() class="vux-number-selector vux-number-selector-plus needsclick" :class="{\'vux-number-disabled\':disabledMax}">+</a> </div> <div class=weui_cell_ft v-else> {{value}} </div> </div> '},function(e,t,i){var s,u;i(2),s=i(1),u=i(3),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),u&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=u)}])});