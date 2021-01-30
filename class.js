//Normally, jader property gulo same, but property values same na, tader khetre class banano hoy
//Dhori,Kolimunnesa School a vorti nicche. Je ashe tar name ta jante cheye tar ekta id dhoriye deya hoy
class student{
      constructor(studentName,studentId){
          this.name=studentName;
          this.id=studentId;
          this.school="Kolimunnesa School";//applicable for both of them
      }
}
const student1= new student("Shuvo",13);
const student2= new student("Dipu",14);
console.log(student1,student2);//class gives output as object
console.log(student1.name ,student2.name);//specific info about student
