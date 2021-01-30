//class Parent{
    //constructor(){
       // this.fathersName="Schwerznegger";
    //}
//}

//class Child{
    //constructor(name){
        //this.name= name;
    //}
//}

//const child1 =new Child ("Arnold");
//const child2 =new Child ("Tom");
//console.log(child1,child2);



//Connection of Parent class & Child class
//class Parent{
  //  constructor(){
 //       this.fathersName="Schwerznegger";
 //   }
//}

//class Child extends Parent{
    //constructor(name){
   //     super();//brings the constructor of Parent class
   //     this.name= name;
  //  }
//}

//const child1 =new Child ("Arnold");
//const child2 =new Child ("Tom");
//console.log(child1,child2);

//getting full name
class Parent{
    constructor(){
        this.fathersName="Schwerznegger";
    }
}

class Child extends Parent{
    constructor(name){
        super();//brings the constructor of Parent class
        this.name= name;
    }
    getFullName(){
        return this.name + " " + this.fathersName;
    }
}





const child1 =new Child ("Arnold");
const child2 =new Child ("Tom");

console.log(child1.getFullName());
console.log(child2.getFullName());