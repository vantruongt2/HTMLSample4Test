/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widget.Bar.Slider.Plus.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Bar.Slider.Plus',required:'Uize.Widget.Button',builder:function(f_a){'use strict';var f_b=true,f_c=false;var f_d=f_a.subclass(null,function(){var f_e=this;function f_f(f_g){function f_h(f_i){return Math.round(f_i*Math.pow(10,14))/Math.pow(10,14);}var f_j=f_g.domEvent,f_k=f_j.shiftKey?f_e.f_l:(f_j.ctrlKey?f_e.f_m:f_e.f_n),f_o=f_e.get('minValue'),f_p=(f_e.get('maxValue')-f_o)/f_k,f_q=f_g.source.get('name')=='stepToMin'? -1:1;f_e.set({value:(Math[f_q<0?'ceil':'floor'](f_h((f_e-f_o)/f_p))+f_q)*f_p+f_o});}f_e.f_r('setToMin',function(){f_e.set({value:f_e.get('minValue')})});f_e.f_r('setToMax',function(){f_e.set({value:f_e.get('maxValue')})});f_e.f_r('stepToMin',f_f);f_e.f_r('stepToMax',f_f);f_e.wire('Changed.value',function(){f_e.f_s()});f_e.f_s();}),f_t=f_d.prototype;f_t.f_r=Uize.Widget.Button.addChildButton;f_t.f_s=function(){var f_e=this,f_u=f_e.children,f_i= +f_e,f_v=f_i!=f_e.get('minValue')?'inherit':false,f_w=f_i!=f_e.get('maxValue')?'inherit':false;
f_u.setToMin.set({enabled:f_v});f_u.setToMax.set({enabled:f_w});f_u.stepToMin.set({enabled:f_v});f_u.stepToMax.set({enabled:f_w});};f_d.stateProperties({f_l:{name:'stepsCoarse',value:2},f_m:{name:'stepsFine',value:25},f_n:{name:'stepsNormal',value:5}});return f_d;}});