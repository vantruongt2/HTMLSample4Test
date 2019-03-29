/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Templates.ParamsInspector.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Templates.ParamsInspector',required:['UizeSite.Templates.ParamsTable'],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];output.push('\n<div class="tabShell">\n	<div class="tabStubShell">\n		<a id="',input.idPrefix,'_tabs_option0" class="tabStub" href="javascript://">PRESETS</a>\n		<a id="',input.idPrefix,'_tabs_option1" class="tabStub" href="javascript://">PARAMS</a>\n		<br style="clear:left;"/>\n	</div>\n	<div class="tabBodyShell">\n		<div id="',input.idPrefix,'_tabs-option0TabBody" class="tabBodyInactive">\n			<div id="',input.idPrefix,'-presets" class="selectorLinks">');for(var _b in input.presets){output.push('\n				<a href="javascript://" onfocus="this.blur ()" class="buttonLink">',_b,'</a>');}
output.push('\n			</div>\n		</div>\n		<div id="',input.idPrefix,'_tabs-option1TabBody" class="tabBodyInactive" style="overflow:auto;">\n			',UizeSite.Templates.ParamsTable.process({idPrefix:input.idPrefix,params:input.params}),'\n		</div>\n	</div>\n</div>\n<div id="',input.idPrefix,'_preview" class="button">',input.previewButtonText,'</div>\n\n');return output.join('');};_a.input={idPrefix:'string',params:'object',presets:'object',previewButtonText:'string'};return _a;}});