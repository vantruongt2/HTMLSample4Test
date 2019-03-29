/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widgets.Buttons.Directional.Css.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widgets.Buttons.Directional.Css',superclass:'Uize.Node.CssModule',builder:function(c_a){'use strict';return c_a.subclass({staticProperties:{css:function(c_b){
return'\n\n.Uize_Widgets_Buttons_Directional_Css-arrowCenterPin {\n	display: block;\n	position: absolute;\n	width: 0;\n	height: 0;\n	top: 50%;\n	left: 50%;\n}\n\n.Uize_Widgets_Buttons_Directional_Css-arrow {\n	display: block;\n	position: absolute;\n	border: 20px;\n	border-style: solid;\n	border-color: #666;\n	opacity: .8;\n}\n\n/*** styling for different flavors ***/\n.Uize_Widgets_Buttons_Directional_Css-positive .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-positive-over .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-positive-active .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-positive-disabled .Uize_Widgets_Buttons_Directional_Css-arrow {\n			border-color: #fff;\n		}.Uize_Widgets_Buttons_Directional_Css-negative .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-negative-over .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-negative-active .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-negative-disabled .Uize_Widgets_Buttons_Directional_Css-arrow {\n			border-color: #fff;\n		}.Uize_Widgets_Buttons_Directional_Css-primary .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-primary-over .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-primary-active .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-primary-disabled .Uize_Widgets_Buttons_Directional_Css-arrow {\n			border-color: #fff;\n		}\n\n/*** styling for different directions ***/\n	.Uize_Widgets_Buttons_Directional_Css-right .Uize_Widgets_Buttons_Directional_Css-arrow,\n	.Uize_Widgets_Buttons_Directional_Css-up .Uize_Widgets_Buttons_Directional_Css-arrow,\n	.Uize_Widgets_Buttons_Directional_Css-down .Uize_Widgets_Buttons_Directional_Css-arrow,\n	.Uize_Widgets_Buttons_Directional_Css-upLeft .Uize_Widgets_Buttons_Directional_Css-arrow,\n	.Uize_Widgets_Buttons_Directional_Css-downLeft .Uize_Widgets_Buttons_Directional_Css-arrow {\n		border-right-color: transparent;\n	}\n	.Uize_Widgets_Buttons_Directional_Css-left .Uize_Widgets_Buttons_Directional_Css-arrow,\n	.Uize_Widgets_Buttons_Directional_Css-right .Uize_Widgets_Buttons_Directional_Css-arrow,\n	.Uize_Widgets_Buttons_Directional_Css-down .Uize_Widgets_Buttons_Directional_Css-arrow,\n	.Uize_Widgets_Buttons_Directional_Css-upLeft .Uize_Widgets_Buttons_Directional_Css-arrow,\n	.Uize_Widgets_Buttons_Directional_Css-upRight .Uize_Widgets_Buttons_Directional_Css-arrow {\n		border-bottom-color: transparent;\n	}\n	.Uize_Widgets_Buttons_Directional_Css-left .Uize_Widgets_Buttons_Directional_Css-arrow,\n	.Uize_Widgets_Buttons_Directional_Css-up .Uize_Widgets_Buttons_Directional_Css-arrow,\n	.Uize_Widgets_Buttons_Directional_Css-down .Uize_Widgets_Buttons_Directional_Css-arrow,\n	.Uize_Widgets_Buttons_Directional_Css-upRight .Uize_Widgets_Buttons_Directional_Css-arrow,\n	.Uize_Widgets_Buttons_Directional_Css-downRight .Uize_Widgets_Buttons_Directional_Css-arrow {\n		border-left-color: transparent;\n	}\n	.Uize_Widgets_Buttons_Directional_Css-left .Uize_Widgets_Buttons_Directional_Css-arrow,\n	.Uize_Widgets_Buttons_Directional_Css-right .Uize_Widgets_Buttons_Directional_Css-arrow,\n	.Uize_Widgets_Buttons_Directional_Css-up .Uize_Widgets_Buttons_Directional_Css-arrow,\n	.Uize_Widgets_Buttons_Directional_Css-downLeft .Uize_Widgets_Buttons_Directional_Css-arrow,\n	.Uize_Widgets_Buttons_Directional_Css-downRight .Uize_Widgets_Buttons_Directional_Css-arrow {\n		border-top-color: transparent;\n	}\n\n/*** styling for different states ***/\n.Uize_Widgets_Buttons_Directional_Css-normal-over .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-positive-over .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-negative-over .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-primary-over .Uize_Widgets_Buttons_Directional_Css-arrow {\n			opacity: 0.9;\n		}.Uize_Widgets_Buttons_Directional_Css-normal-active .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-positive-active .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-negative-active .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-primary-active .Uize_Widgets_Buttons_Directional_Css-arrow {\n			opacity: 1;\n		}.Uize_Widgets_Buttons_Directional_Css-normal-disabled .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-positive-disabled .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-negative-disabled .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-primary-disabled .Uize_Widgets_Buttons_Directional_Css-arrow {\n			opacity: 0.4;\n		}\n\n/*** styling for different sizes ***/\n.Uize_Widgets_Buttons_Directional_Css-tiny .Uize_Widgets_Buttons_Directional_Css-arrow {\n			border-width: 7.35px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-tiny.Uize_Widgets_Buttons_Directional_Css-left .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-tiny.Uize_Widgets_Buttons_Directional_Css-right .Uize_Widgets_Buttons_Directional_Css-arrow {\n			top: -7.35px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-tiny.Uize_Widgets_Buttons_Directional_Css-left .Uize_Widgets_Buttons_Directional_Css-arrow {\n			left: -11.024999999999999px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-tiny.Uize_Widgets_Buttons_Directional_Css-right .Uize_Widgets_Buttons_Directional_Css-arrow {\n			left: -3.675px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-tiny.Uize_Widgets_Buttons_Directional_Css-up .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-tiny.Uize_Widgets_Buttons_Directional_Css-down .Uize_Widgets_Buttons_Directional_Css-arrow {\n			left: -7.35px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-tiny.Uize_Widgets_Buttons_Directional_Css-up .Uize_Widgets_Buttons_Directional_Css-arrow {\n			top: -11.024999999999999px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-tiny.Uize_Widgets_Buttons_Directional_Css-down .Uize_Widgets_Buttons_Directional_Css-arrow {\n			top: -3.675px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-tiny.Uize_Widgets_Buttons_Directional_Css-upLeft .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-tiny.Uize_Widgets_Buttons_Directional_Css-upRight .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-tiny.Uize_Widgets_Buttons_Directional_Css-downLeft .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-tiny.Uize_Widgets_Buttons_Directional_Css-downRight .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-tiny.Uize_Widgets_Buttons_Directional_Css-center .Uize_Widgets_Buttons_Directional_Css-arrow {\n			border-width: 5.197234841721124px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-tiny.Uize_Widgets_Buttons_Directional_Css-upLeft .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-tiny.Uize_Widgets_Buttons_Directional_Css-upRight .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-tiny.Uize_Widgets_Buttons_Directional_Css-downLeft .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-tiny.Uize_Widgets_Buttons_Directional_Css-downRight .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-tiny.Uize_Widgets_Buttons_Directional_Css-center .Uize_Widgets_Buttons_Directional_Css-arrow {\n			top: -5.197234841721124px;\n			left: -5.197234841721124px;\n		}.Uize_Widgets_Buttons_Directional_Css-small .Uize_Widgets_Buttons_Directional_Css-arrow {\n			border-width: 9.1px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-small.Uize_Widgets_Buttons_Directional_Css-left .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-small.Uize_Widgets_Buttons_Directional_Css-right .Uize_Widgets_Buttons_Directional_Css-arrow {\n			top: -9.1px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-small.Uize_Widgets_Buttons_Directional_Css-left .Uize_Widgets_Buttons_Directional_Css-arrow {\n			left: -13.649999999999999px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-small.Uize_Widgets_Buttons_Directional_Css-right .Uize_Widgets_Buttons_Directional_Css-arrow {\n			left: -4.55px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-small.Uize_Widgets_Buttons_Directional_Css-up .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-small.Uize_Widgets_Buttons_Directional_Css-down .Uize_Widgets_Buttons_Directional_Css-arrow {\n			left: -9.1px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-small.Uize_Widgets_Buttons_Directional_Css-up .Uize_Widgets_Buttons_Directional_Css-arrow {\n			top: -13.649999999999999px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-small.Uize_Widgets_Buttons_Directional_Css-down .Uize_Widgets_Buttons_Directional_Css-arrow {\n			top: -4.55px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-small.Uize_Widgets_Buttons_Directional_Css-upLeft .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-small.Uize_Widgets_Buttons_Directional_Css-upRight .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-small.Uize_Widgets_Buttons_Directional_Css-downLeft .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-small.Uize_Widgets_Buttons_Directional_Css-downRight .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-small.Uize_Widgets_Buttons_Directional_Css-center .Uize_Widgets_Buttons_Directional_Css-arrow {\n			border-width: 6.434671708797582px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-small.Uize_Widgets_Buttons_Directional_Css-upLeft .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-small.Uize_Widgets_Buttons_Directional_Css-upRight .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-small.Uize_Widgets_Buttons_Directional_Css-downLeft .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-small.Uize_Widgets_Buttons_Directional_Css-downRight .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-small.Uize_Widgets_Buttons_Directional_Css-center .Uize_Widgets_Buttons_Directional_Css-arrow {\n			top: -6.434671708797582px;\n			left: -6.434671708797582px;\n		}.Uize_Widgets_Buttons_Directional_Css-medium .Uize_Widgets_Buttons_Directional_Css-arrow {\n			border-width: 12.6px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-medium.Uize_Widgets_Buttons_Directional_Css-left .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-medium.Uize_Widgets_Buttons_Directional_Css-right .Uize_Widgets_Buttons_Directional_Css-arrow {\n			top: -12.6px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-medium.Uize_Widgets_Buttons_Directional_Css-left .Uize_Widgets_Buttons_Directional_Css-arrow {\n			left: -18.9px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-medium.Uize_Widgets_Buttons_Directional_Css-right .Uize_Widgets_Buttons_Directional_Css-arrow {\n			left: -6.3px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-medium.Uize_Widgets_Buttons_Directional_Css-up .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-medium.Uize_Widgets_Buttons_Directional_Css-down .Uize_Widgets_Buttons_Directional_Css-arrow {\n			left: -12.6px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-medium.Uize_Widgets_Buttons_Directional_Css-up .Uize_Widgets_Buttons_Directional_Css-arrow {\n			top: -18.9px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-medium.Uize_Widgets_Buttons_Directional_Css-down .Uize_Widgets_Buttons_Directional_Css-arrow {\n			top: -6.3px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-medium.Uize_Widgets_Buttons_Directional_Css-upLeft .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-medium.Uize_Widgets_Buttons_Directional_Css-upRight .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-medium.Uize_Widgets_Buttons_Directional_Css-downLeft .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-medium.Uize_Widgets_Buttons_Directional_Css-downRight .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-medium.Uize_Widgets_Buttons_Directional_Css-center .Uize_Widgets_Buttons_Directional_Css-arrow {\n			border-width: 8.909545442950499px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-medium.Uize_Widgets_Buttons_Directional_Css-upLeft .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-medium.Uize_Widgets_Buttons_Directional_Css-upRight .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-medium.Uize_Widgets_Buttons_Directional_Css-downLeft .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-medium.Uize_Widgets_Buttons_Directional_Css-downRight .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-medium.Uize_Widgets_Buttons_Directional_Css-center .Uize_Widgets_Buttons_Directional_Css-arrow {\n			top: -8.909545442950499px;\n			left: -8.909545442950499px;\n		}.Uize_Widgets_Buttons_Directional_Css-large .Uize_Widgets_Buttons_Directional_Css-arrow {\n			border-width: 17.15px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-large.Uize_Widgets_Buttons_Directional_Css-left .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-large.Uize_Widgets_Buttons_Directional_Css-right .Uize_Widgets_Buttons_Directional_Css-arrow {\n			top: -17.15px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-large.Uize_Widgets_Buttons_Directional_Css-left .Uize_Widgets_Buttons_Directional_Css-arrow {\n			left: -25.724999999999998px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-large.Uize_Widgets_Buttons_Directional_Css-right .Uize_Widgets_Buttons_Directional_Css-arrow {\n			left: -8.575px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-large.Uize_Widgets_Buttons_Directional_Css-up .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-large.Uize_Widgets_Buttons_Directional_Css-down .Uize_Widgets_Buttons_Directional_Css-arrow {\n			left: -17.15px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-large.Uize_Widgets_Buttons_Directional_Css-up .Uize_Widgets_Buttons_Directional_Css-arrow {\n			top: -25.724999999999998px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-large.Uize_Widgets_Buttons_Directional_Css-down .Uize_Widgets_Buttons_Directional_Css-arrow {\n			top: -8.575px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-large.Uize_Widgets_Buttons_Directional_Css-upLeft .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-large.Uize_Widgets_Buttons_Directional_Css-upRight .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-large.Uize_Widgets_Buttons_Directional_Css-downLeft .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-large.Uize_Widgets_Buttons_Directional_Css-downRight .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-large.Uize_Widgets_Buttons_Directional_Css-center .Uize_Widgets_Buttons_Directional_Css-arrow {\n			border-width: 12.12688129734929px;\n		}\n		.Uize_Widgets_Buttons_Directional_Css-large.Uize_Widgets_Buttons_Directional_Css-upLeft .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-large.Uize_Widgets_Buttons_Directional_Css-upRight .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-large.Uize_Widgets_Buttons_Directional_Css-downLeft .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-large.Uize_Widgets_Buttons_Directional_Css-downRight .Uize_Widgets_Buttons_Directional_Css-arrow,\n		.Uize_Widgets_Buttons_Directional_Css-large.Uize_Widgets_Buttons_Directional_Css-center .Uize_Widgets_Buttons_Directional_Css-arrow {\n			top: -12.12688129734929px;\n			left: -12.12688129734929px;\n		}\n\n';
}}});}});