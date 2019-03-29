/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Comm.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Comm',superclass:'Uize.Class',required:'Uize.Url',builder:function(b_a){'use strict';var b_b=true,b_c=false,b_d;var b_e=b_a.subclass(function(){var b_f=this;b_f.b_g=[];b_f.b_h={};b_f.requestQueue=b_f.b_g;}),b_i=b_e.prototype;function b_j(b_k){return'response'+Uize.capFirstChar(b_k.returnType);}function b_l(b_k){b_k.url=Uize.Url.resolve(b_k.url)}b_i.b_m=function(b_k){return b_k.cache=='memory'?this.b_h[b_k.url]:null};b_i.b_n=function(b_k){var b_o=b_k.returnType,b_p=b_k.callback,b_q=this.b_m(b_k);if(b_q){var b_r=b_o=='object';if(b_p){b_k.responseText='';b_k.responseJson=b_k.responseXml=null;if(b_r||b_o=='xml')b_k.responseXml=Uize.clone(b_q.responseXml);if(b_r||b_o=='text')b_k.responseText=b_q.responseText;if(b_r||b_o=='json')b_k.responseJson=Uize.clone(b_q.responseJson);}}else{if(b_k.cache=='memory')this.b_h[b_k.url]={responseXml:Uize.clone(b_k.responseXml),responseJson:Uize.clone(b_k.responseJson),responseText:b_k.responseText};}b_p&&b_p(b_o=='object'?b_k:b_k[b_j(b_k)]);};
b_i.b_s=function(){this.fire('Request Queue Updated');};b_i.performRequest=function(b_k,b_t){b_t();};b_i.flush=function(){this.b_g.length=0;this.b_s();};b_i.flushCache=function(b_u){arguments.length?delete this.b_h[typeof b_u=='string'?b_u:b_u.url]:(this.b_h={});};b_i.request=function(b_k){var b_f=this;b_l(b_k);if(b_f.b_m(b_k)){setTimeout(function(){b_f.b_n(b_k)},0);}else{b_f.queueRequest(b_k);b_f.useQueue();}};b_i.queueRequest=function(b_k){var b_f=this;b_l(b_k);delete b_k.completed;if(!b_k.requestMethod)b_k.requestMethod='GET';if(!b_k.returnType)b_k.returnType='object';if(typeof b_k.cache!='string')b_k.cache=b_k.cache?'memory':'never';b_f.b_g[b_k.cutToHead?'unshift':'push'](b_k);b_f.b_s();};b_i.useQueue=function(){var b_f=this,b_g=b_f.b_g,b_v=b_g.length;if(!b_f.b_w&&b_v){b_f.b_w=b_b;var b_x=function(){var b_k;while((b_k=b_g[0])&&(b_f.b_m(b_k)||b_k.completed))b_f.b_n(b_g.shift());b_f.b_w=b_c;b_f.b_s();b_g.length&&setTimeout(function(){b_f.useQueue()},1);},b_y=function(b_k){if(b_f.b_m(b_k)){b_x();}else{
b_f.fire({name:'Perform Request',request:b_k});b_f.performRequest(b_k,function(){b_k.completed=b_b;b_x();});}};if(b_v==1){b_y(b_g[0]);}else{var b_z=[];var b_A;for(var b_B= -1;++b_B<b_v;){var b_k=b_g[b_B],b_C=b_k.batchingAgent;if(!b_C||(b_A&&b_C!=b_A)||b_k.cache=='browser'){break;}else{if(!b_A)b_A=b_C;b_z.push(b_k);}}var b_D=b_z.length;if(b_D>1){var b_E=[];for(var b_B= -1;++b_B<b_D;){var b_k=b_z[b_B];if(!b_f.b_m(b_k)){b_k.completed=b_c;b_E.push(b_k);}}var b_F=b_E.length;if(b_F){if(b_F==1){b_y(b_E[0]);}else{var b_G=b_A.buildRequest(b_E);b_f.fire({name:'Perform Request',request:b_G});b_f.performRequest(b_G,function(){var b_H=b_A.responseParser(b_G),b_I=0;for(var b_B= -1;++b_B<b_D;){var b_k=b_z[b_B];if(b_k.completed!==b_d){b_k[b_j(b_k)]=b_H[b_I++];b_k.completed=b_b;}}b_x();});}}else{b_x();}}else{b_y(b_g[0]);}}}};b_e.processArrayAsync=function(b_J,b_K,b_L,b_M){if(!b_M)b_M=1;var b_N=b_J.length-1,b_O=(b_M>0?0:b_N)-b_M;function b_P(b_Q){(b_O+=b_M)>=0&&b_O<=b_N&&b_Q!==b_c?b_K(b_J[b_O],b_P,b_O):b_L?b_L(b_N+1):0}b_P();
};return b_e;}});