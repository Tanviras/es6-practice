const firstName = "Tanvir Ahmed"
const lastName= "Sarker"
//Previous string addition
console.log(firstName+ " " + lastName + " " + "is a good boy");
//es5 gives us more flexibility
console.log(`${firstName} ${lastName} is a good boy`);
console.log(`${firstName} ${lastName} is a good boy who has got ${50+30+20} out of ${50+30+20}`);

//multiline
//previous
const multiline = "Tanvir Ahmed Sarker\n" 
+"Roll:01\n"
+"Section:A";
console.log(multiline);

//es5 es5 gives us more flexibility
const multiline2=`Tanvir Ahmed Sarker
Roll:01
Section:A`
console.log(multiline2);

