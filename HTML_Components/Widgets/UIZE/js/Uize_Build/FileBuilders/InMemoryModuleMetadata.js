/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Build.FileBuilders.InMemoryModuleMetadata.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Build.FileBuilders.InMemoryModuleMetadata',required:['Uize.Build.Util','Uize.Data.Simple','Uize.String.Lines'],builder:function(){var _a=/\.js\.metadata$/,_b=/\/\*\s*Module\s*Meta\s*Data/i;return{description:'In-memory module metadata object',urlMatcher:function(_c){var _d=_c.pathname;return this.isMemoryUrl(_d)&&_a.test(_d);},builderInputs:function(_c){var _e=this,_f={jsModule:_e.tempUrlFromMemoryUrl(_c.pathname.replace(_a,'.js'))},_g=_e.params.modulesFolder+'/'+Uize.Build.Util.getTestModuleName(_c.file.replace(_a,''))+'.js';if(_e.fileExists({path:_e.sourceUrl(_g)}))_f.testModuleMetaData=_e.memoryUrl(_g+'.metadata');return _f;},builder:function(_f){var _h=this.readFile({path:_f.jsModule}),_i=_h.search(_b),_j=_h.indexOf('*/',_i),_k=_i> -1?_h.slice(_i,_j).replace(_b,''):'',_l=_k?Uize.Data.Simple.parse({simple:Uize.String.Lines.normalizeIndent(_k),collapseChildren:true}):{},_m=_f.testModuleMetaData;if(_m)_l.testCompleteness= +this.readFile({path:_m}).codeCompleteness||0;return _l;}};}});