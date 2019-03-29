/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widget.Page.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Page',required:'Uize.Node',builder:function(c_a){'use strict';var c_b=true,c_c=false,c_d=null,c_e,c_f=Uize.Node;var c_g=c_a.subclass(c_d,function(){c_g.xDeferredLinks&&this.wireDeferredLinks()}),c_h=c_g.prototype;function c_i(c_j){return(Uize.isFunction(c_j)&&c_j)||(c_j&&c_j.callback)||Object}c_h.c_k=function(c_l,c_m,c_n){var c_o=this;c_o.useDialog({component:c_o.c_p.component,widgetClassName:c_o.c_p.widgetClassName||'Uize.Widget.Dialog.Confirm',widgetProperties:{name:'confirmDialog',title:c_n.title||'',message:(c_n.message+'').replace(/\n/g,'<br/>'),mode:c_l,state:c_n.state||c_m,okText:c_n.okText||c_d,cancelText:c_n.cancelText||c_d},submitHandler:function(c_q){var c_r=c_n.callback||(c_q?c_n.yesHandler:c_n.noHandler);c_r&&c_r(c_q);}});};c_h.c_s=function(c_t){c_t=c_t||Object;var c_o=this,c_u=c_o.get('idPrefix'),c_v=window;var c_w={},c_x=c_c,c_y='$'+c_u+'_',c_z=c_y.length,c_A;for(var c_B in c_v){if(c_B.charAt(0)=='$'&&c_B.substr(0,c_z)==c_y&&typeof(c_A=c_v[c_B])=='object'&&c_A&&
c_A.widgetClass){c_x=c_b;for(var c_C= -1,c_D=c_w,c_E=c_B.substr(c_z).split('_'),c_F,c_G=c_E.length;++c_C<c_G;){var c_H=c_D[c_F=c_E[c_C]];if(c_C<c_G-1){c_D=(c_H||(c_H=c_D[c_F]={})).children||(c_H.children={});}else{c_H?Uize.mergeInto(c_H,c_A):(c_D[c_F]=c_A);c_v[c_B]=c_e;}}}}if(c_x){var c_I=function(c_J,c_K){function c_L(c_M,c_N,c_O){var c_P=c_O.children,c_Q=c_J(c_M,c_N,c_O);c_P&&c_R(c_Q,c_P);c_K&&c_K(c_Q);}function c_R(c_M,c_S){for(var c_N in c_S)c_L(c_M,c_N,c_S[c_N]);}c_R(c_o,c_w);};var c_T={},c_U=[];c_I(function(c_M,c_N,c_O){var c_V=c_O.widgetClass;if(c_V&& !c_T[c_V]){c_T[c_V]=1;c_U.push(c_V);}});Uize.require(c_U,function(){c_o.set({children:c_w});c_I(function(c_M,c_N,c_O){var c_Q=c_M.children[c_N];if(!c_Q){var c_V=Uize.getModuleByName(c_O.widgetClass)||Uize.Widget;c_Q=c_N.charCodeAt(0)==36&&c_N.charCodeAt(1)==36?c_V.spawn(c_O,c_M):c_M.addChild(c_N,c_V);}return c_Q;},c_o.isWired&&function(c_Q){Uize.callOn(c_Q,'insertOrWireUi')});c_t();});}else{c_t();}};c_h.loadHtmlIntoNode=function(c_W,c_X,c_Y){var c_o=this,
c_Z=c_W.rootNodeId,c_t=c_i(c_Y),c_0={callback:function(c_1){var c_2=document.body,c_3=c_W.node!=undefined?c_o.getNode(c_W.node):(c_Z?c_f.getById(c_Z+'-shell'):c_d)||c_2;c_f.injectHtml(c_3,c_1,c_W.injectMode||(c_3==c_2?'inner bottom':'inner replace'));c_o.c_s(c_t);}};c_W.alwaysReplace===c_c&&c_Z&&c_f.getById(c_Z)?c_t():c_o.loadHtml(c_X,typeof c_Y=='object'&&c_Y?Uize.copy(c_Y,c_0):c_0);};c_h.performAjax=function(){};c_h.useDialog=function(c_n){var c_o=this,c_4=Uize.copy(c_o.c_5,c_n.widgetProperties),c_6=c_4.parent||c_o,c_7=c_4.name,c_8=c_6.children[c_7],c_9=c_n.component,c_ba;if(c_9){var c_Z=c_4.idPrefix||(c_6.get('idPrefix')+'_'+c_7);c_ba={name:c_9.name,rootNodeId:c_Z,params:Uize.copyInto({idPrefix:c_Z},c_9.params)};}function c_bb(c_bc){setTimeout(function(){function c_bd(c_be,c_bf){var c_r=c_n[c_be];c_r&&c_r.apply(0,c_bf);}function c_bg(c_bh){var c_bf=[c_bh];c_bd(c_bh.name.toLowerCase()+'Handler',c_bf);c_bd('dismissHandler',c_bf);}function c_bi(c_bh){c_o.fire({name:'Dialog '+c_bh.name,dialogWidget:c_bh.source
})}c_8.unwire(c_8.eventHandlersForUseDialog||{});c_8.eventHandlersForUseDialog={'Submission Complete':function(c_bh){c_bd('submitHandler',[c_bh.result,c_bh])},Close:c_bg,Cancel:c_bg,'Before Show':c_bi,'After Show':c_bi,'Before Hide':c_bi,'After Hide':c_bi};c_8.wire(c_8.eventHandlersForUseDialog);c_8.set(c_4);c_8.set({shown:c_b});},0);}if(c_8&&(c_8.componentProfile==c_ba||Uize.Data.identical(c_8.componentProfile,c_ba))){c_bb('subsequent');}else{var c_bj=c_ba&& !!c_8;if(c_bj){c_8.removeUi();c_6.removeChild(c_7);}var c_bk=function(){var c_bl=c_n.widgetClassName;Uize.require(c_bl,function(c_bm){(c_8=c_6.children[c_7])?c_8.set(c_4):(c_8=c_6.addChild(c_7,c_bm,c_4));c_8.componentProfile=c_ba;c_8.wire(c_n.widgetEventHandlers);c_8.insertOrWireUi();c_bb(c_bj?'refetched':'initial');});};c_ba?c_o.loadHtmlIntoNode({rootNodeId:c_ba.rootNodeId,injectMode:'inner bottom',alwaysReplace:c_c},Uize.copyInto({cp:c_ba.name},c_ba.params),{cache:'memory',callback:c_bk}):c_bk();}};c_h.wireUi=function(){var c_o=this;if(!c_o.isWired){
c_o.c_s();c_a.doMy(c_o,'wireUi');}};var c_bn={yes:1,on:1,1:1,'true':1};c_g.launchPopup=c_h.launchPopup=function(c_n){if(!c_n)c_n={};if(c_n.width==c_e)c_n.width=850;if(c_n.height==c_e)c_n.height=600;var c_bo=window.screen;if(c_n.left==c_e)c_n.left=Math.max((c_bo.width-c_n.width-10)>>1,0);if(c_n.top==c_e)c_n.top=Math.max((c_bo.height-c_n.height-40)>>1,0);function c_bp(c_bq){return c_bq+'='+c_n[c_bq];}function c_br(c_bq,c_bs){return(c_bq+'='+(c_bn[c_n[c_bq]==c_e?c_bs:c_n[c_bq]+'']?'yes':'no'));}var c_bt=window.open(c_n.url||'',c_n.name==c_e?'popupWindow':c_n.name,[c_bp('width'),c_bp('height'),c_bp('top'),c_bp('left'),c_br('toolbar',0),c_br('location',0),c_br('directories',0),c_br('status',0),c_br('menubar',0),c_br('scrollbars',1),c_br('resizable',1)].join(','));c_bt&&c_bt.focus();return c_bt;};c_g.stateProperties({c_p:{name:'confirmDialog',value:{}},c_5:'dialogProperties'});c_g.set({idPrefix:'page'});c_h.loadHtml=function(c_X,c_j){c_i(c_j)('');};c_h.showConfirm=function(c_n){this.c_k('confirm','confirm',c_n);};
c_h.showInform=function(c_n){this.c_k('alert','info',c_n);};return c_g;}});