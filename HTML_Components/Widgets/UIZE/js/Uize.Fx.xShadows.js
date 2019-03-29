/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Fx.xShadows.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Fx.xShadows',required:['Uize.Color','Uize.Node'],builder:function(_a){'use strict';var _b=function(){},_c,_d='Uize.Fx.xShadows.toShadow(VALUE)';function _e(){if(_c){_c.lastIndex=0;}else{var _f='(#[0-9a-f]{1,6}|(?:rgba?|hsla?)\\s*\\(.+?\\)|[a-z]+)?',_g='(?:(-?(?:\\d\\.?|\\.\\d)\\d*)(em|ex|px|in|cm|mm|pt|pc|))',_h='\\s+',_i='\\s*';_c=new RegExp('(?:^|)'+_i+'(?:'+_f+_h+_g+_h+_g+'(?:'+_h+_g+')?'+'|'+_g+_h+_g+'(?:'+_h+_g+')?'+'(?:'+_h+_f+')?'+')'+_i+'(?:$|,)','g');}}function _j(_k){if(Uize.isArray(_k))_k=_k.join(',');var _l=[],_m;_e();while(_m=_c.exec(_k)){var _n=_m[8],_o=_n?8:2,_p={offsetX:+_m[_o],offsetXUnit:_m[_o+1]||'px',offsetY:+_m[_o+2],offsetYUnit:_m[_o+3]||'px'},_q=_m[_n?14:1],_r=_m[_o+4];if(_q)_p.color=Uize.Color.to(_q,'RGB array');if(_r){_p.blurRadius= +_r;_p.blurRadiusUnit=_m[_o+5]||'px';}_l.push(_p);}return _l;}_b.toShadow=function(_s){var _t=[];for(var _u= -1,_v=_s.length,_p;++_u<_v;)_t.push((_p=_s[_u]).offsetX+_p.offsetXUnit+' '+_p.offsetY+_p.offsetYUnit+
('blurRadius'in _p?(' '+_p.blurRadius+_p.blurRadiusUnit):'')+('color'in _p?(' '+Uize.Color.to(_p.color,'#hex')):''));return _t.join(',');};_a.defineStylePropertiesProfile({test:'boxShadow',remappedProperty:Uize.Node.isSafari?'WebkitBoxShadow':Uize.Node.isMozilla?'MozBoxShadow':'boxShadow',decoder:_j,encoderExpression:_d});_a.defineStylePropertiesProfile({test:'textShadow',decoder:_j,encoderExpression:_d});return _b;}});