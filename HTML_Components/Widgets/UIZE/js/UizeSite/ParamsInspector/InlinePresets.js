/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.ParamsInspector.InlinePresets.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.ParamsInspector.InlinePresets',required:'Uize.Data.Simple',builder:function(d_a){'use strict';var d_b=d_a.subclass(null,function(){var d_c=this;var d_d=Uize.Data.Simple.parse({simple:d_c.getNode('inlinePresets').innerHTML,collapseChildren:true});d_c.setNodeInnerHtml('inlinePresets','');var d_e=d_c.d_e;for(var d_f in d_d){var d_g=d_d[d_f];d_g[d_e]=d_g[d_e].replace(/\t/g,'   ');}d_c.set({presets:d_d});}),d_h=d_b.prototype;d_b.stateProperties({d_e:'settingsPropertyName'});return d_b;}});