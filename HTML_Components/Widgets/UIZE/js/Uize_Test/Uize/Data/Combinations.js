/*
	UIZE JAVASCRIPT FRAMEWORK

	http://www.uize.com/reference/Uize.Test.Uize.Data.Combinations.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Test.Uize.Data.Combinations',builder:function(){'use strict';return Uize.Test.declare({title:'Uize.Data.Combinations Module Test',test:[Uize.Test.requiredModulesTest('Uize.Data.Combinations'),Uize.Test.staticMethodsTest([['Uize.Data.Combinations.generate',[['Test that specifying the value null for the combinations specifier results in an empty array being returned',null,[]],['Test that specifying the value undefined for the combinations specifier results in an empty array being returned',undefined,[]],['Test that specifying an empty object for the combinations specifier results in an empty array being returned',{},[]],['Test that specifying an empty array for the combinations specifier results in an empty array being returned',[],[]],['Test that specifying possible values for a single property is handled correctly',{fruit:['apple','banana','guava','peach','watermelon']},[{fruit:'apple'},{fruit:'banana'},{fruit:'guava'},{fruit:'peach'},{fruit:'watermelon'}]],
['Test that specifying possible values for multiple properties is handled correctly',{foo:['bar','BAR','BAR!!!'],hello:['there','world'],many:['moons ago','reasons why']},[{foo:'bar',hello:'there',many:'moons ago'},{foo:'bar',hello:'there',many:'reasons why'},{foo:'bar',hello:'world',many:'moons ago'},{foo:'bar',hello:'world',many:'reasons why'},{foo:'BAR',hello:'there',many:'moons ago'},{foo:'BAR',hello:'there',many:'reasons why'},{foo:'BAR',hello:'world',many:'moons ago'},{foo:'BAR',hello:'world',many:'reasons why'},{foo:'BAR!!!',hello:'there',many:'moons ago'},{foo:'BAR!!!',hello:'there',many:'reasons why'},{foo:'BAR!!!',hello:'world',many:'moons ago'},{foo:'BAR!!!',hello:'world',many:'reasons why'}]],['Test that, when there is only one possible value for every key in the combinations specifier object, then an array with only one combination is returned',{foo:['bar'],hello:['there'],many:['moons ago']},[{foo:'bar',hello:'there',many:'moons ago'}]],
['Test that a value for a property of the combinations specifier that is not a list is treated as the only possible value for that property',{aString:'foo',aNumber:42,aBoolean:true,anObject:{foo:'bar'},aNull:null,anUndefined:undefined},[{aString:'foo',aNumber:42,aBoolean:true,anObject:{foo:'bar'},aNull:null,anUndefined:undefined}]],['Test that specifying no possible values for a property in the combinations specifier results in that property being omitted from the generated combinations',{foo:['bar','BAR','BAR!!!'],hello:[],many:['moons ago','reasons why']},[{foo:'bar',many:'moons ago'},{foo:'bar',many:'reasons why'},{foo:'BAR',many:'moons ago'},{foo:'BAR',many:'reasons why'},{foo:'BAR!!!',many:'moons ago'},{foo:'BAR!!!',many:'reasons why'}]],['Test that specifying an empty array for every property of the combinations specifier results in an empty array (ie. no combinations) being returned',{foo:[],hello:[],many:[]},[]],
['Test that an array can be specified as the single possible value for a property in the combinations specifier, as long as the array value is wrapped in a possible values array',{hello:[['there','world']]},[{hello:['there','world']}]],['Test that a combination transformer function is observed correctly',[{enabled:['false','true'],busy:['false','true']},function(c_a){c_a.enabled=c_a.enabled=='true';c_a.busy=c_a.busy=='true';c_a.busyAndDisabled=c_a.busy&& !c_a.enabled;}],[{enabled:false,busy:false,busyAndDisabled:false},{enabled:false,busy:true,busyAndDisabled:true},{enabled:true,busy:false,busyAndDisabled:false},{enabled:true,busy:true,busyAndDisabled:false}]],{title:'Test that a combination transformer function receives as its first argument the combination to transform',test:function(){var c_b=[];Uize.Data.Combinations.generate({foo:['bar','BAR'],hello:['there','world']},function(c_a){c_b.push(c_a)});return this.expect([{foo:'bar',hello:'there'},{foo:'bar',hello:'world'},{foo:'BAR',hello:'there'},
{foo:'BAR',hello:'world'}],c_b);}},{title:'Test that a combination transformer function receives as its second argument the index of the combination to transform',test:function(){var c_c=[];Uize.Data.Combinations.generate({foo:['bar','BAR'],hello:['there','world']},function(c_a,c_d){c_c.push(c_d);});return this.expect([0,1,2,3],c_c);}},['Test that, if a combination transformer function modifies the combination object it receives, then that modified combination object makes it into the resulting combinations array',[{prop1:['hello','hi'],prop2:['there','world']},function(c_a){c_a.prop1PlusProp2=c_a.prop1+' '+c_a.prop2;}],[{prop1:'hello',prop2:'there',prop1PlusProp2:'hello there'},{prop1:'hello',prop2:'world',prop1PlusProp2:'hello world'},{prop1:'hi',prop2:'there',prop1PlusProp2:'hi there'},{prop1:'hi',prop2:'world',prop1PlusProp2:'hi world'}]],['Test that, if a combination transformer returns a result that is not undefined, then that result replaces the combination passed to it',[
{prop1:['hello','hi'],prop2:['there','world']},function(c_a){return c_a.prop1+' '+c_a.prop2}],['hello there','hello world','hi there','hi world']],['Test that, if a combination transformer returns the value undefined, then the generated combinations are returned unaltered',[{foo:['bar','BAR'],hello:['there','world']},Uize.nop],[{foo:'bar',hello:'there'},{foo:'bar',hello:'world'},{foo:'BAR',hello:'there'},{foo:'BAR',hello:'world'}]],['Test that a combination transformer expression string is observed correctly',[{prop1:['hello','hi'],prop2:['there','world']},'value.prop1 + \' \' + value.prop2'],['hello there','hello world','hi there','hi world']],['Test that, for a combination transformer expression string, the variable name "key" is defined and is set to the index of the combination',[{prop1:['hello','hi'],prop2:['there','world']},'key'],[0,1,2,3]],['Test that specifying the value null for the combination transformer is treated as no combination transformer being specified',
[{foo:['bar','BAR'],hello:['there','world']},null],[{foo:'bar',hello:'there'},{foo:'bar',hello:'world'},{foo:'BAR',hello:'there'},{foo:'BAR',hello:'world'}]],['Test that specifying the value undefined for the combination transformer is treated as no combination transformer being specified',[{foo:['bar','BAR'],hello:['there','world']},undefined],[{foo:'bar',hello:'there'},{foo:'bar',hello:'world'},{foo:'BAR',hello:'there'},{foo:'BAR',hello:'world'}]],{title:'Test that a combination matcher function receives as its first argument the combination to match',test:function(){var c_b=[];Uize.Data.Combinations.generate({foo:['bar','BAR'],hello:['there','world']},null,function(c_a){c_b.push(c_a)});return this.expect([{foo:'bar',hello:'there'},{foo:'bar',hello:'world'},{foo:'BAR',hello:'there'},{foo:'BAR',hello:'world'}],c_b);}},{title:'Test that a combination matcher function receives as its second argument the index of the combination to match',test:function(){var c_c=[];Uize.Data.Combinations.generate(
{foo:['bar','BAR'],hello:['there','world']},null,function(c_a,c_d){c_c.push(c_d);});return this.expect([0,1,2,3],c_c);}},['Test that the result returned by a combination matcher function is observed correctly',[{prop1:['hello','hi'],prop2:['there','world']},null,function(c_a,c_e){return c_e%2}],[{prop1:'hello',prop2:'world'},{prop1:'hi',prop2:'world'}]],['Test that a combination matcher expression string is handled correctly',[{prop1:['hello','hi'],prop2:['there','world']},null,'value.prop1 == "hi"'],[{prop1:'hi',prop2:'there'},{prop1:'hi',prop2:'world'}]],['Test that, for a combination matcher expression string, the variable name "key" is defined and is set to the index of the combination',[{prop1:['hello','hi'],prop2:['there','world']},null,'key % 2'],[{prop1:'hello',prop2:'world'},{prop1:'hi',prop2:'world'}]],['Test that specifying the value null for the combination matcher is treated as no combination matcher being specified',[{prop1:['hello','hi'],prop2:['there','world']},null,null],[
{prop1:'hello',prop2:'there'},{prop1:'hello',prop2:'world'},{prop1:'hi',prop2:'there'},{prop1:'hi',prop2:'world'}]],['Test that specifying the value undefined for the combination matcher is treated as no combination matcher being specified',[{prop1:['hello','hi'],prop2:['there','world']},null,null],[{prop1:'hello',prop2:'there'},{prop1:'hello',prop2:'world'},{prop1:'hi',prop2:'there'},{prop1:'hi',prop2:'world'}]],['Test that an array can be specified for the combination specifier, and that the resulting combinations produced are arrays',[[['a','b','c'],[0,1,2]]],[['a',0],['a',1],['a',2],['b',0],['b',1],['b',2],['c',0],['c',1],['c',2]]]]],['Uize.Data.Combinations.forEach',[{title:'Test that specifying the value null for the combinations specifier results in no iterations being performed',test:function(){var c_f=0;Uize.Data.Combinations.forEach(null,function(){c_f++});return this.expect(0,c_f);}},{
title:'Test that specifying the value undefined for the combinations specifier results in no iterations being performed',test:function(){var c_f=0;Uize.Data.Combinations.forEach(undefined,function(){c_f++});return this.expect(0,c_f);}},{title:'Test that specifying an empty object for the combinations specifier results in no iterations being performed',test:function(){var c_f=0;Uize.Data.Combinations.forEach({},function(){c_f++});return this.expect(0,c_f);}},{title:'Test that specifying an empty array for the combinations specifier results in no iterations being performed',test:function(){var c_f=0;Uize.Data.Combinations.forEach([],function(){c_f++});return this.expect(0,c_f);}},{title:'Test that specifying possible values for a single property is handled correctly',test:function(){var c_b=[];Uize.Data.Combinations.forEach({fruit:['apple','banana','guava','peach','watermelon']},function(c_a){c_b.push(c_a)});return this.expect(
[{fruit:'apple'},{fruit:'banana'},{fruit:'guava'},{fruit:'peach'},{fruit:'watermelon'}],c_b);}},{title:'Test that specifying possible values for multiple properties is handled correctly',test:function(){var c_b=[];Uize.Data.Combinations.forEach({foo:['bar','BAR','BAR!!!'],hello:['there','world'],many:['moons ago','reasons why']},function(c_a){c_b.push(c_a)});return this.expect([{foo:'bar',hello:'there',many:'moons ago'},{foo:'bar',hello:'there',many:'reasons why'},{foo:'bar',hello:'world',many:'moons ago'},{foo:'bar',hello:'world',many:'reasons why'},{foo:'BAR',hello:'there',many:'moons ago'},{foo:'BAR',hello:'there',many:'reasons why'},{foo:'BAR',hello:'world',many:'moons ago'},{foo:'BAR',hello:'world',many:'reasons why'},{foo:'BAR!!!',hello:'there',many:'moons ago'},{foo:'BAR!!!',hello:'there',many:'reasons why'},{foo:'BAR!!!',hello:'world',many:'moons ago'},{foo:'BAR!!!',hello:'world',many:'reasons why'}],c_b);}},{
title:'Test that, when there is only one possible value for every key in the combinations specifier object, then there is only one iteration for a single combination',test:function(){var c_b=[];Uize.Data.Combinations.forEach({foo:['bar'],hello:['there'],many:['moons ago']},function(c_a){c_b.push(c_a)});return this.expect([{foo:'bar',hello:'there',many:'moons ago'}],c_b);}},{title:'Test that a value for a property of the combinations specifier that is not a list is treated as the only possible value for that property',test:function(){var c_b=[];Uize.Data.Combinations.forEach({aString:'foo',aNumber:42,aBoolean:true,anObject:{foo:'bar'},aNull:null,anUndefined:undefined},function(c_a){c_b.push(c_a)});return this.expect([{aString:'foo',aNumber:42,aBoolean:true,anObject:{foo:'bar'},aNull:null,anUndefined:undefined}],c_b);}},{title:'Test that specifying no possible values for a property in the combinations specifier results in that property being omitted from the generated combinations',test:function(){var c_b=[];
Uize.Data.Combinations.forEach({foo:['bar','BAR','BAR!!!'],hello:[],many:['moons ago','reasons why']},function(c_a){c_b.push(c_a)});return this.expect([{foo:'bar',many:'moons ago'},{foo:'bar',many:'reasons why'},{foo:'BAR',many:'moons ago'},{foo:'BAR',many:'reasons why'},{foo:'BAR!!!',many:'moons ago'},{foo:'BAR!!!',many:'reasons why'}],c_b);}},{title:'Test that specifying an empty array for every property of the combinations specifier results in no iterations being performed',test:function(){var c_b=[];Uize.Data.Combinations.forEach({foo:[],hello:[],many:[]},function(c_a){c_b.push(c_a)});return this.expect([],c_b);}},{title:'Test that an array can be specified as the single possible value for a property in the combinations specifier, as long as the array value is wrapped in a possible values array',test:function(){var c_b=[];Uize.Data.Combinations.forEach({hello:[['there','world']]},function(c_a){c_b.push(c_a)});return this.expect([{hello:['there','world']}],c_b);}},{
title:'Test that a combination transformer function is observed correctly',test:function(){var c_b=[];Uize.Data.Combinations.forEach({enabled:['false','true'],busy:['false','true']},function(c_a){c_b.push(c_a)},function(c_a){c_a.enabled=c_a.enabled=='true';c_a.busy=c_a.busy=='true';c_a.busyAndDisabled=c_a.busy&& !c_a.enabled;});return this.expect([{enabled:false,busy:false,busyAndDisabled:false},{enabled:false,busy:true,busyAndDisabled:true},{enabled:true,busy:false,busyAndDisabled:false},{enabled:true,busy:true,busyAndDisabled:false}],c_b);}},{title:'Test that a combination transformer function receives as its first argument the combination to transform',test:function(){var c_b=[];Uize.Data.Combinations.forEach({foo:['bar','BAR'],hello:['there','world']},Uize.nop,function(c_a){c_b.push(c_a)});return this.expect([{foo:'bar',hello:'there'},{foo:'bar',hello:'world'},{foo:'BAR',hello:'there'},{foo:'BAR',hello:'world'}],c_b);}},{
title:'Test that a combination transformer function receives as its second argument the index of the combination to transform',test:function(){var c_c=[];Uize.Data.Combinations.forEach({foo:['bar','BAR'],hello:['there','world']},Uize.nop,function(c_a,c_d){c_c.push(c_d);});return this.expect([0,1,2,3],c_c);}},{title:'Test that, if a combination transformer function modifies the combination object it receives, then that modified combination object is seen by the iteration handler',test:function(){var c_b=[];Uize.Data.Combinations.forEach({prop1:['hello','hi'],prop2:['there','world']},function(c_a){c_b.push(c_a)},function(c_a){c_a.prop1PlusProp2=c_a.prop1+' '+c_a.prop2;});return this.expect([{prop1:'hello',prop2:'there',prop1PlusProp2:'hello there'},{prop1:'hello',prop2:'world',prop1PlusProp2:'hello world'},{prop1:'hi',prop2:'there',prop1PlusProp2:'hi there'},{prop1:'hi',prop2:'world',prop1PlusProp2:'hi world'}],c_b);}},{
title:'Test that, if a combination transformer returns a result that is not undefined, then that result is seen by the iteration handler',test:function(){var c_b=[];Uize.Data.Combinations.forEach({prop1:['hello','hi'],prop2:['there','world']},function(c_a){c_b.push(c_a)},function(c_a){return c_a.prop1+' '+c_a.prop2});return this.expect(['hello there','hello world','hi there','hi world'],c_b);}},{title:'Test that, if a combination transformer returns the value undefined, then the generated combinations are passed unaltered to the iteration handler',test:function(){var c_b=[];Uize.Data.Combinations.forEach({foo:['bar','BAR'],hello:['there','world']},function(c_a){c_b.push(c_a)},Uize.nop);return this.expect([{foo:'bar',hello:'there'},{foo:'bar',hello:'world'},{foo:'BAR',hello:'there'},{foo:'BAR',hello:'world'}],c_b);}},{title:'Test that a combination transformer expression string is observed correctly',test:function(){var c_b=[];Uize.Data.Combinations.forEach({prop1:['hello','hi'],prop2:['there','world']},
function(c_a){c_b.push(c_a)},'value.prop1 + \' \' + value.prop2');return this.expect(['hello there','hello world','hi there','hi world'],c_b);}},{title:'Test that, for a combination transformer expression string, the variable name "key" is defined and is set to the index of the combination',test:function(){var c_b=[];Uize.Data.Combinations.forEach({prop1:['hello','hi'],prop2:['there','world']},function(c_a){c_b.push(c_a)},'key');return this.expect([0,1,2,3],c_b);}},{title:'Test that specifying the value null for the combination transformer is treated as no combination transformer being specified',test:function(){var c_b=[];Uize.Data.Combinations.forEach({foo:['bar','BAR'],hello:['there','world']},function(c_a){c_b.push(c_a)},null);return this.expect([{foo:'bar',hello:'there'},{foo:'bar',hello:'world'},{foo:'BAR',hello:'there'},{foo:'BAR',hello:'world'}],c_b);}},{title:'Test that specifying the value undefined for the combination transformer is treated as no combination transformer being specified',
test:function(){var c_b=[];Uize.Data.Combinations.forEach({foo:['bar','BAR'],hello:['there','world']},function(c_a){c_b.push(c_a)},undefined);return this.expect([{foo:'bar',hello:'there'},{foo:'bar',hello:'world'},{foo:'BAR',hello:'there'},{foo:'BAR',hello:'world'}],c_b);}},{title:'Test that a combination matcher function receives as its first argument the combination to match',test:function(){var c_b=[];Uize.Data.Combinations.forEach({foo:['bar','BAR'],hello:['there','world']},Uize.nop,null,function(c_a){c_b.push(c_a)});return this.expect([{foo:'bar',hello:'there'},{foo:'bar',hello:'world'},{foo:'BAR',hello:'there'},{foo:'BAR',hello:'world'}],c_b);}},{title:'Test that a combination matcher function receives as its second argument the index of the combination to match',test:function(){var c_c=[];Uize.Data.Combinations.forEach({foo:['bar','BAR'],hello:['there','world']},Uize.nop,null,function(c_a,c_d){c_c.push(c_d);});return this.expect([0,1,2,3],c_c);}},{
title:'Test that the result returned by a combination matcher function is observed correctly',test:function(){var c_b=[];Uize.Data.Combinations.forEach({prop1:['hello','hi'],prop2:['there','world']},function(c_a){c_b.push(c_a)},null,function(c_a,c_e){return c_e%2});return this.expect([{prop1:'hello',prop2:'world'},{prop1:'hi',prop2:'world'}],c_b);}},{title:'Test that a combination matcher expression string is handled correctly',test:function(){var c_b=[];Uize.Data.Combinations.forEach({prop1:['hello','hi'],prop2:['there','world']},function(c_a){c_b.push(c_a)},null,'value.prop1 == "hi"');return this.expect([{prop1:'hi',prop2:'there'},{prop1:'hi',prop2:'world'}],c_b);}},{title:'Test that, for a combination matcher expression string, the variable name "key" is defined and is set to the index of the combination',test:function(){var c_b=[];Uize.Data.Combinations.forEach({prop1:['hello','hi'],prop2:['there','world']},function(c_a){c_b.push(c_a)},null,'key % 2');return this.expect([{prop1:'hello',prop2:'world'},
{prop1:'hi',prop2:'world'}],c_b);}},{title:'Test that specifying the value null for the combination matcher is treated as no combination matcher being specified',test:function(){var c_b=[];Uize.Data.Combinations.forEach({prop1:['hello','hi'],prop2:['there','world']},function(c_a){c_b.push(c_a)},null,null);return this.expect([{prop1:'hello',prop2:'there'},{prop1:'hello',prop2:'world'},{prop1:'hi',prop2:'there'},{prop1:'hi',prop2:'world'}],c_b);}},{title:'Test that specifying the value undefined for the combination matcher is treated as no combination matcher being specified',test:function(){var c_b=[];Uize.Data.Combinations.forEach({prop1:['hello','hi'],prop2:['there','world']},function(c_a){c_b.push(c_a)},null,undefined);return this.expect([{prop1:'hello',prop2:'there'},{prop1:'hello',prop2:'world'},{prop1:'hi',prop2:'there'},{prop1:'hi',prop2:'world'}],c_b);}},{title:'Test that an array can be specified for the combination specifier, and that the resulting combinations produced are arrays',test:function(){
var c_b=[];Uize.Data.Combinations.forEach([['a','b','c'],[0,1,2]],function(c_a){c_b.push(c_a)});return this.expect([['a',0],['a',1],['a',2],['b',0],['b',1],['b',2],['c',0],['c',1],['c',2]],c_b);}}]]])]});}});