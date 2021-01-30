//one parameter arrow function
const doubleIt = num => num*2;
console.log(doubleIt(5));

//two parameters arrow function
const add = (num1,num2) => num1+num2;
console.log(add(5,10));

//no parameters arrow function()
const print = () => "kono parameter nai";
console.log(print());

//arrow function with bigger function body
const addAndMultiplyThem = (num1,num2) =>{
    let add=num1+num2;
    let mult=num1*num2;
    return [add, mult];
}
console.log(addAndMultiplyThem(5,10));