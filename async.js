console.log("Start");
function loginUser(email, passowd, callback) {
	

setTimeout(()=>{
	console.log("we have thedata");
	callback({userEmail:email,password:passowd});


},1500);
}
/*console.log(user);
});
console.log("End");*/
async function displayUser(){
	const loggedUser = await loginUser("ed", "1234");
	console.log(loggedUser);
}

displayUser();