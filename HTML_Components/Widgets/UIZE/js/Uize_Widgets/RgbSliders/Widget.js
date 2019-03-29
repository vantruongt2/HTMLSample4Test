/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.RgbSliders.Widget.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.RgbSliders.Widget',superclass:'Uize.Widget.V2',required:['Uize.Color','Uize.Widgets.Slider.Widget','Uize.Widgets.RgbSliders.Html','Uize.Widgets.RgbSliders.Css'],builder:function(d_a){'use strict';var d_b,d_c=true,d_d=false;return d_a.subclass({alphastructor:function(){var d_e=this;d_e.d_f=Uize.Color();function d_g(d_h,d_i){var d_j=d_e.addChild(d_h,Uize.Widgets.Slider.Widget,{minValue:0,maxValue:255,orientation:'vertical',emptyColor:'#fff',fullColor:d_i});d_j.wire('Changed.value',function(){d_e.d_k||d_e.set({d_l:d_e.d_f.from(d_e.d_m).to('hex')});});return d_j;}d_e.d_m=[d_g('sliderR','#f00'),d_g('sliderG','#0f0'),d_g('sliderB','#00f')];},instanceMethods:{d_n:function(){var d_e=this;if(d_e.isWired){var d_l=d_e.d_l;d_e.setNodeStyle('swatch',{background:'#'+d_l});d_e.setNodeInnerHtml('swatch','#'+d_l);}},updateUi:function(){var d_e=this;if(d_e.isWired){Uize.callOn(d_e.children,'updateUi');d_e.d_n();}}},stateProperties:{d_o:'sliderHeight',d_p:{name:'size',value:'medium'},d_l:{
name:'value',conformer:function(d_l){return Uize.Color.to(d_l,'hex')},onChange:function(){var d_e=this,d_q=d_e.children,d_r=d_e.d_f.from(this.d_l).tuple;d_e.d_k=d_c;d_q.sliderR.set({value:d_r[0]});d_q.sliderG.set({value:d_r[1]});d_q.sliderB.set({value:d_r[2]});d_e.d_k=d_d;d_e.d_n();},value:'000000'}},set:{html:Uize.Widgets.RgbSliders.Html},staticProperties:{cssModule:Uize.Widgets.RgbSliders.Css},stateToCssBindings:{size:'value'}});}});