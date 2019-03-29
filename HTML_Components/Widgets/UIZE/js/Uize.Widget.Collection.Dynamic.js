/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Widget.Collection.Dynamic.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Collection.Dynamic',required:['Uize.Node','Uize.Widget.Drag','Uize.Tooltip'],builder:function(d_a){'use strict';var d_b=true,d_c=false,d_d=null,d_e='',d_f=Uize.Node,d_g=Uize.Tooltip;var d_h=d_a.subclass(d_d,function(){var d_i=this;var d_j,d_k,d_l,d_m,d_n,d_o,d_p,d_q,d_r,d_s,d_t,d_u,d_v,d_w,d_x,d_y,d_z,d_A=d_i.addChild('drag',Uize.Widget.Drag,{nodeMap:{'':d_d}});function d_B(d_C){var d_D=d_C?d_i.d_E:1,d_F=d_i.getNode('tooltipDragging');for(var d_G=d_m;--d_G> -1;)d_l[d_G].setNodeOpacity('',d_D);d_C&&d_f.setInnerHtml(d_F,d_i.localize('draggingToReorder'+(d_m>1?'Plural':'Singular'),{totalItems:d_m}));d_g.showTooltip(d_F,d_C,d_b);}d_A.wire({'Drag Start':function(){d_k=d_i.d_H=='reverse'?1:0;d_j.set({over:d_c});var d_I=d_j.get('selected');if(!d_I){d_i.selectAll(d_c);d_i.d_J&&d_j.set({selected:d_b});}if(!d_i.d_K){if(d_I){for(var d_L= -1,d_M=d_i.getSelected(),d_N=d_M.length;++d_L<d_N;)d_M[d_L].get('locked')&&d_M[d_L].set({selected:d_c});
d_i.get('totalSelected')||d_A.set({dragCancelled:d_b});}else if(d_j.get('locked'))d_A.set({dragCancelled:d_b});}d_l=d_I?d_i.getSelected():[d_j];d_m=d_l.length;d_n=[];d_i.forAll(function(d_O){d_n.push(d_f.getCoords(d_O.getNode()));});var d_P=d_n.length,d_Q=d_P-1,d_R=d_n[d_k?d_Q:0],d_S=d_n[d_k?d_Q-1:1];d_v=d_Q&&d_S.top>d_R.bottom?1:0;d_y=d_v?'top':'left';d_z=d_v?'height':'width';d_q=d_r=d_s=d_t=d_u=d_d;d_w=d_i.getNode('insertionMarker');d_x=d_f.getDimensions(d_w);for(var d_T= -1,d_U=d_Q?d_S[d_y]-(d_R[d_y]+d_R[d_z]-1):0,d_V=d_U/2;++d_T<d_P;){var d_W=d_n[d_T];d_W[d_y]-=d_V;d_W[d_z]+=d_U;}d_B(d_b);},'Drag Update':function(d_X){var d_Y=document.documentElement,d_Z=d_A.eventPos;d_g.positionTooltip(d_i.getNode('tooltipDragging'),{pageX:d_Z[0],pageY:d_Z[1]});function d_0(d_1){return(d_1&&d_f.doRectanglesOverlap(d_1.left,d_1.top,d_1.width,d_1.height,d_Z[0],d_Z[1],1,1));}if(!d_0(d_p)){d_o=d_p=d_d;d_i.forAll(function(d_O,d_T){var d_W=d_n[d_T];if(d_0(d_W)){d_o=d_O;d_p=d_W;}return!d_o;});}if(!d_0(d_s)){d_q=d_s=d_d;
if(d_o&& !Uize.isIn(d_l,d_o)){var d_2=d_p[d_z],d_3=d_2/2,d_4=d_p[d_y],d_5=d_4+d_3;d_q=d_o;d_r=d_Z[d_v]<d_5?0:1;d_s=Uize.clone(d_p);d_s[d_y]=d_r?d_5:d_4;d_s[d_z]=d_3;}}if(d_q!=d_t||d_r!=d_u){d_i.displayNode(d_w,!!d_q);if(d_q){var d_6=Uize.clone(d_s);d_6[d_y]+=(d_r?d_s[d_z]:0)-d_x[d_z]/2;delete d_6[d_z];d_f.setCoords(d_w,d_6);}d_t=d_q;d_u=d_r;}d_A.set({cursor:d_q||d_o?'move':'not-allowed'});},'Drag Done':function(d_X){if(d_A.get('dragStarted')){d_B(d_c);d_i.displayNode('insertionMarker',d_c);var d_7=function(){if(d_q&& !d_A.get('dragCancelled')){var d_8=d_i.itemWidgets;if(d_r^d_k){var d_9=d_8.length,d_ba=Uize.indexIn(d_8,d_q)+1;d_q=d_d;while(d_ba<d_9){var d_O=d_8[d_ba];if(!Uize.isIn(d_l,d_O)){d_q=d_O;break;}else{d_ba++;}}}for(var d_G= -1;++d_G<d_m;)d_i.move(d_l[d_G],d_q);d_i.fire('Items Reordered');d_i.d_bb();}};d_i.d_bc?d_i.confirm({state:'warning',title:d_i.localize('confirmDragToReorderTitle'),message:d_i.localize('confirmDragToReorderPrompt'),yesHandler:function(){d_i.d_bc=d_c;d_i.fire('Drag Confirmed');
d_7();},noHandler:function(){d_A.set({dragCancelled:true});}}):d_7();}}});d_i.wire('Item Mouse Down',function(d_X){if(d_i.d_bd){d_j=d_X.source;d_A.initiate(d_X.domEvent);}d_X.bubble=d_c;});}),d_be=d_h.prototype;d_be.d_bf=function(d_bg){var d_i=this,d_bh=d_bg.properties,d_bi=d_i.makeItemWidgetName(d_bh);d_i.get('items').push(d_bh);return d_i.addItemWidget(d_bi,d_bg);};d_be.d_bb=function(){this.fire('Items Changed')};var d_bj={selected:d_b};d_be.add=function(d_bk){var d_i=this,d_bl=[];if(!Uize.isArray(d_bk))d_bk=[d_bk];var d_bm=d_bk.length;if(d_bm){d_i.d_bn&&d_i.selectAll(d_c);var d_bo=d_i.d_bn?d_bj:d_d;for(var d_bp= -1;++d_bp<d_bm;)d_bl.push(d_i.d_bf(Uize.copyInto(d_bk[d_bp],d_bo)));}d_i.d_bb();return d_bl;};d_be.getItemWidgetProperties=function(){var d_i=this;return(Uize.copyInto({previewTooltip:function(){return d_i.d_bd?d_i.getNode('tooltipDragToReorder'):d_d}},d_i.get('itemWidgetProperties')));};d_be.move=function(d_bq,d_br){var d_i=this,d_bs=d_i.d_H=='reverse',d_bt=d_br?d_br.getNode():d_d,
d_bu=d_i.get('items'),d_8=d_i.itemWidgets,d_bv=d_i.getNode('items'),d_bw=d_bq.getNode(),d_bx=d_bs?(d_bt?d_bt.nextSibling:d_bv.childNodes[0]):d_bt;d_bx?d_bv.insertBefore(d_bw,d_bx):d_bv.appendChild(d_bw);var d_by=Uize.indexIn(d_8,d_bq),d_bz=d_bu[d_by];d_8.splice(d_by,1);d_bu.splice(d_by,1);var d_bA=d_br?Uize.indexIn(d_8,d_br):d_8.length;d_8.splice(d_bA,0,d_bq);d_bu.splice(d_bA,0,d_bz);};d_be.processItemTemplate=function(d_bB){var d_bC=d_bB.innerHTML;return Uize.Template&&d_bB.tagName=='SCRIPT'&&d_bB.type=='text/jst'?Uize.Template.compile(d_bC,{openerToken:'[%',closerToken:'%]'}):function(d_bD){return d_bC.replace(/ITEMWIDGETNAME/g,d_bD.name)};};d_be.wireUi=function(){var d_i=this;if(!d_i.isWired){var d_bE=document.body,d_w=d_i.getNode('insertionMarker'),d_bF={},d_bG=d_i.getNode('itemTemplate');if(d_w&&d_w.parentNode!=d_bE){d_bE.insertBefore(d_w,d_bE.childNodes[0]);d_i.setNodeStyle(d_w,{display:'none',position:'absolute',zIndex:10000,left:d_e,top:d_e,right:d_e,bottom:d_e});}if(d_bG)
d_bF.html=d_i.processItemTemplate(d_bG);d_bF.built=d_c;d_bF.container=d_i.getNode('items');d_bF.insertionMode=d_i.d_H=='reverse'?'inner top':'inner bottom';d_i.get('built')||d_i.forAll(function(d_O){d_O.set(d_bF)});d_i.set({itemWidgetProperties:Uize.copyInto(d_bF,d_i.get('itemWidgetProperties')||{})});d_a.doMy(d_i,'wireUi');}};d_h.stateProperties({d_bc:{name:'confirmToDrag',value:d_c},d_K:{name:'dragIgnoresLocked',value:d_b},d_bd:{name:'dragToReorder',value:d_c},d_J:{name:'ensureItemDraggedIsSelected',value:d_c},d_H:{name:'itemDisplayOrder',value:'normal'},d_bn:{name:'makeNewlyAddedSelected',value:d_b},d_E:{name:'itemVestigeOpacity',value:.2}});return d_h;}});