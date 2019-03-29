/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Node.Tree.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Node.Tree',builder:function(){'use strict';var _a=function(){},_b=Uize.Node;function _c(_d,_e){if(!_e)_d.expanded=false}function _f(_g){return _g&&(_g.tagName=='UL'||_g.tagName=='OL')}_a.getTreeFromList=function(_g){function _h(_g){var _i='';if(_g){if(_g.nodeType==3)_i=_g.data;var _j=_g.childNodes;if(_j){for(var _k= -1,_l=_j.length,_m;++_k<_l;){if(_f(_m=_j[_k])){break;}else{_i+=_h(_m);}}}}return _i.replace(/^\s*/,'').replace(/\s*$/,'');}function _n(_g){var _d=null;if(_g){_d={title:_h(_g)};var _j=_g.childNodes;for(var _o= -1;++_o<_j.length;){_g=_j[_o];if(_f(_g)){_c(_d,_g.style.display!='none');var _j=_g.childNodes;for(var _k= -1;++_k<_j.length;){var _m=_j[_k];_m.tagName=='LI'&&(_d.items||(_d.items=[])).push(_n(_m));}}else if(_g.tagName=='A'){_d.link=_g.getAttribute('href');if(_g.title)_d.description=_g.title;}}}return _d;}var _d=_n(_f(_g=_b.getById(_g))?_g.parentNode:_g);return(_d&&(/\S/.test(_d.title)?[_d]:_d.items))||[];};_a.getTreeFromPage=function(_p,_q){var _r={},_s=[],
_t={title:'Contents'};_q=Uize.toNumber(_q,1);for(var _u= -1,_v;++_u<_p.length;){_r[_v=_p[_u]]=_u;_s.push('\\b'+_v+'\\b');}_s=new RegExp(_s.join('|'));for(var _o= -1,_w=document.all||document.getElementsByTagName('*'),_x=_w.length,_g,_y,_z=_t,_A=0,_B=[_t],_C='Uize_Node_Tree_',_D=[],_E=location.href.replace(/#[^#]*$/,'')+'#',_F;++_o<_x;){if(_y=(_g=_w[_o]).className){if(_F=_y.match(_s)){var _G=_r[_F[0]];if(_G>_A){_B[_G]=_z.items[_z.items.length-1];_A=_G;_z=_B[_A];}else if(_G<_A){_A=_G;_z=_B[_A];}_D.length=_A;if(!_z.items){_z.items=[];_c(_z,_A<_q);}_D.push(_z.items.length+1);var _d={title:_b.getText(_g).replace(/^\s+/,'').replace(/\s+$/,''),link:_E+(_g.id||(_g.id=_C+_D.join('_')))};if(_g.title)_d.description=_g.title;_z.items.push(_d);}}}return[_t];};return _a;}});