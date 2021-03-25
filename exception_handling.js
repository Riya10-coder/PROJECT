let a = "hello";
a=undefined;
if(a!= undefined){
	throw new Error("this is not undefined")
}
else{
	console.log("this is undefined");
}
try{
  		Hame(); 
}
catch(error){
	console.log("hahaha");
	console.log(error);
	console.log(error.name);
}
finally{
	console.log("result");
}