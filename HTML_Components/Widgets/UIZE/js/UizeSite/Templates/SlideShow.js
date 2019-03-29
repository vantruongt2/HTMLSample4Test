/*
	UIZE Web Site

	http://www.uize.com/reference/UizeSite.Templates.SlideShow.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeSite.Templates.SlideShow',required:[],builder:function(){'use strict';var _a=function(){};_a.process=function(input){var output=[];
output.push('\n<table class="slideshow" cellspacing="0" cellpadding="0" style="margin:auto;">\n	<tr class="slideshowHeader" valign="top">\n		<td align="left">\n			<table border="0" cellspacing="0" cellpadding="0">\n				<tr valign="top">\n					<td><a id="',input.idPrefix,'_first" class="navButton" href="javascript://"><div class="arrow towardsFirst gotoFirst"></div></a></td>\n					<td><a id="',input.idPrefix,'_previous" class="navButton" href="javascript://"><div class="arrow towardsFirst gotoPrevious"></div></a></td>\n				</tr>\n			</table>\n		</td>\n		<td align="center">\n			<span id="',input.idPrefix,'-slide_title" class="slideshowTitle"></span><br/>\n			<span class="slideshowSubtitle">(<span id="',input.idPrefix,'-slideNumber"></span> of <span id="',input.idPrefix,'-totalSlides"></span>)</span>\n		</td>\n		<td align="right">\n			<table border="0" cellspacing="0" cellpadding="0">\n				<tr valign="top">\n					<td><a id="',input.idPrefix,'_next" class="navButton" href="javascript://"><div class="arrow towardsLast gotoNext"></div></a></td>\n					<td><a id="',input.idPrefix,'_last" class="navButton" href="javascript://"><div class="arrow towardsLast gotoLast"></div></a></td>\n				</tr>\n			</table>\n		</td>\n	</tr>\n	<tr>\n		<td colspan="3" align="center" valign="center">',input.viewHtml,'</td>\n	</tr>\n</table>\n\n');
return output.join('');};_a.input={idPrefix:'string',viewHtml:'string'};return _a;}});