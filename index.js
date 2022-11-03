//Task 01:
const shopName= 'Veggie'; // string
let salesPerson = 1; // int
const isShopSellsMeat = false; // boolean
let meat = null;  // null
let menu;         // undefined

// object
let shopInfo = {
city: 'Almaty',
isVegeterian: true,
squareM: 100,
'contact number': '+7 727',
food:{
    cheese: 'tofu',
    isFresh: true,
    weightKG: 0.1
}
}

shopInfo.squareM = 120;
shopInfo.isPetfriendly = true;
delete shopInfo.city

console.log(shopInfo);


//Task 02
let vehicle ={}
vehicle.brandName = 'BMW';
console.log(vehicle);
vehicle.model ='X5';
console.log(vehicle);
vehicle.model = 'M1';
console.log(vehicle);
delete vehicle.model
console.log(vehicle);


//Task 03

let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}

let sum =0;

for (let key in salaries) {
     sum += salaries[key];
    }
    console.log("Total sum of salaries is " + sum);    