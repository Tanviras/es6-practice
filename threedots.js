const ages=[12, 13 , 14, 15, 16, 17];
const ages2=[18,19,20,21,22];
//const allAges= ages.concat(ages2);//concatenate brings them all at one place
//console.log(allAges);

//If you want to add more arrays in the allAges array
const ages3=[23,24,25,26];
//const allAges2=allAges.concat(ages3);
//console.log(allAges2);

//or,

//allAges= ages.concat(ages2).concat(ages3);
//console.log(allAges);

//Here is another method to bring them all at one place,but the third bracket remains
//const allAges2=[ages,ages2,ages3];
//console.log(allAges2);

//we can add any random number in between which isn't part of any array
//const allAges2=[ages,ages2,8,ages3];
//console.log(allAges2);

//To remove the third bracket, three dots(...) are used
//const allAges2=[...ages,...ages2,8,...ages3];
//console.log(allAges2);

//Further use of three dots
const businessman= 650;
const minister =450;
const sochib= 855;
const takaPoisha=[businessman,minister,sochib];
const maxAmongThem=Math.max(...takaPoisha);
console.log(maxAmongThem);