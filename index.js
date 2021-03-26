//es6

let counter = 10;
counter = 5;
console.log(counter);
const list =[1,2,3,4,5];
for (let i =0; i< list.length; i++){
	console.log(i);
}
const name = "abc";
const age = 123;
console.log(`my name is ${name} and age is ${age}`);

function getbook(title, author){
	return{title,
	author
};
}
var book= getbook('attitude is everything ', 'jeff keller');
console.log(book);

//object deconstruction
 const list1 ={
 	names : "Clothing",
 	items : ['shirt', 'pants']
 	
 };
 const {names, items}= list1;
 console.log(names, items);

 //arrow function

const stayLocation= location=>console.log(`my location is ${location}`);
stayLocation("Paris");

//this 
const users = {
	name1: "Riya",
	age1 : "23",
	sayName : function(){
		console.log(`my name is${this.name1}`);
		const fullName =() =>{
		console.log(`my name is${this.name1}and my age is${this.age1}`);	
		};
fullName();
	}

};
 users.sayName();

 //defaul parameter

 const mul= (a=5, b=6)=>{
 	console.log(a*b);
 };
mul();

//forEach
const shoppingList= ['shoes', 'books','cloths','foods']
shoppingList.forEach(( product, index)=>{
	console.log(`index is ${index}and product is ${product}`);
});

//map
const newList = shoppingList.map(item=> item+"new");
console.log(newList);

//filter
const filterList = shoppingList.filter(item=> item==='foods');
console.log(filterList);
const filtersList = shoppingList.filter(item=> item!=='foods');
console.log(filtersList);
//class
class Shoppinglist{
	constructor(Item, nr){
		this.Item = Item;
		this.nr = nr;
	}
sayList(){
	console.log(this.Item);
}	
}
const myList = new Shoppinglist(['milk, choco, foods'],3);
myList.sayList();
//inheritance
class Product extends Shoppinglist{
	constructor(Item, nr, amount, cost){
		super (Item, nr)
		this.amount = amount;
		this.cost = cost;
	}
}
const product = new Product (['milk, choco, cookies'],2,20,6);
//console.log(product);
product.sayList();
//promise async 
/*const prom = new Promise ((resolve, reject)=>
{
	setTimeout(()=>{
		resolve({user: 'ed', pass: "3897894uifou985k"});
	},2000);


	});
prom.then(data =>{
console.log(data);
});*/
const prom = new Promise ((resolve, reject)=>
{
	setTimeout(()=>{
		reject(('wrong'));
	},2000);


	});
prom.then(data =>{
console.log(data);
})
.catch(err=>console.log(err));


