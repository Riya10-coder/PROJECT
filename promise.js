/*const promise = new Promise ((resolve, reject)=>{
	setTimeout(()=>{
	console.log("we have thedata");
	reject(new Error("user not looged in"));
	},2000);

});
promise.then(user=>{
	console.log(user);
})
.catch(err=>console.log(err));
*/
console.log("Start");
function loginUser(email, passowd) {
	return new Promise((resolve, reject)=>{

setTimeout(()=>{
	console.log("we have thedata");
	resolve({userEmail:email,password:passowd});


},1500);
});
}
/*console.log(user);
});
console.log("End");*/
async function displayUser(){
	const loggedUser = await loginUser("ed", "1234");
	console.log(loggedUser);
}

displayUser();