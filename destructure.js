const person={ name:"Jack William", age:20, gfName:"Ema Watson", friendList:["Hack William","Crack William"]};

//const ageOfThePerson=person.age;
//console.log(ageOfThePerson);

//There is another way to fetch info from the object
//const {age}=person;
//console.log(age);

//We can fetch more than one info
//const {name,age}=person;
//console.log(name,age);

//We can destructure array too!
const friends=["Md Sakif Uddin Khan","Md Fahim","Joy Barman Sagar","Shaswato Barua"];
//const [firstFriend]=friends;
//const [secondFriend]=friends;
//console.log(firstFriend,secondFriend);//Output deikho kintu,same output ashbe

//const[fFriend,sFriend]=friends;
//console.log(fFriend,sFriend);

//Use of spreader operator in destructuring
const [fOfFriends,sOfFriends,...bakiJaraAche]=friends;
console.log(fOfFriends);
console.log(sOfFriends);
console.log(bakiJaraAche);