var g;
g=8
console.log(typeof g);
g='hi'
console.log(typeof g);
g=[8,5,8,6]
console.log(g.length);
console.log(2+6);
console.log('hi'+'there');
/*var num1= prompt("enter");
console.log(typeof num1);
console.log(parseInt (num1)+9);
alert("wrong");*/
var diff= 3-2;
console.log(diff);
var add= 3+2;
console.log(add);
add++;
console.log(add);
var a=9;
a+=8;
console.log(a);
var a=4;
var b=5;
if(a==b)
{
	console.log("true");
}
else{
	console.log("false");
}
var a=4;
var b="4";
if(a===b)
{
	console.log("true");
}
else{
	console.log("false");
}
var a=4;
var b=5;
if(a==b||a<=b)
{
	console.log("true");
}
else{
	console.log("false");
}
console.log(1>2?true:false);
var sub=['maths', 'physics'];
var mar= new Array();
var num1;
/*for (var j=0; j<sub.length;j++)
{
	num1=parseFloat(prompt("enter the marks"+sub[j]));
	mar[j]=num1;
}
for (m in mar)
{
	console.log(mar[m]);
}*/
var an= function(a,b)
{
console.log("anon")
return a-b;
}
console.log(an(5,4));
setTimeout(function(){console.log("aaa")},5000);
(function(a,b){
	console.log("self invoke");
	return a+b;
})(2,3);
var cons=new Function("a","b","console.log('constructor');return a+b;")
console.log(cons(3,8));
function create()
{
	var person= new Object();
	person.name= "ria";
	person.age="23";
	return person;}
	var ria=create();
function create1()
{
	var person= {};
	person.name= "riya";
	person.age="23";
	return person;}
	 ria=create1();
	

	 function person()
{
	
	this.name= "riya";
	this.age="24";
	}
	 ria=new person();