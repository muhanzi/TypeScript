var first_name: string = "charles";
var age: number = 25;
var hobbie: any = "coding";
document.getElementById("type").innerHTML =
  "Details: " + first_name + " " + age + " " + hobbie;

interface Student {
  courseName: String;
  grade: number;
  nationality: string;
}

var lebon: Student = {
  courseName: "software engineering",
  grade: 5.0,
  nationality: "congolese",
};

document.write(
  "student information" +
    "<br/>" +
    "courseName: " +
    lebon.courseName +
    "<br/>" +
    "grade: " +
    lebon.grade +
    "<br/>" +
    "nationality: " +
    lebon.nationality +
    "<br/>"
);

var myList: string[] = ["josh", "johana", "josline"];
myList.push("josephine");
for (let i: number = 0; i < myList.length; i++) {
  document.write("Name: " + myList[i] + "<br/>");
}
document.write("------------------------------------------ <br/>");
myList.forEach((element) => {
  document.write("Name: " + element + "<br/>");
});

var studentList: Student[] = [];
studentList.push({
  courseName: "business administration",
  grade: 4.2,
  nationality: "ugandan",
});
document.write(
  "student information" +
    "<br/>" +
    "courseName: " +
    studentList[0].courseName +
    "<br/>" +
    "grade: " +
    studentList[0].grade +
    "<br/>" +
    "nationality: " +
    studentList[0].nationality
);
document.write("<br/>");
document.write("---------------------------------------- <br/>");
var list = [3, 4, 5, 8, 2.3]; // list is of type any
for (let i in list) {
  document.write("i: " + i + "<br/>"); // shows the index
}
document.write("---------------------------------------- <br/>");
for (let i of list) {
  document.write("i: " + i + "<br/>"); // shows the actual value of i
}
document.write("---------------------------------------- <br/>");
var multiply = function (x: number, y: number, z: number): number {
  return x * y * z;
};
document.write("3*2*4 = " + multiply(3, 2, 4) + "<br/>");
var multiply2 = function (x: number, y: number, z: number = 5): number {
  // default value of z is 5
  return x * y * z;
};
document.write("3*4*5 = " + multiply2(3, 4) + "<br/>");
var multiply3 = function (x: number, y: number, z?: number): number {
  // z may or may not be given
  if (typeof z !== "undefined") {
    return x * y * z;
  }
  return x * y;
};
document.write("3*4 = " + multiply3(3, 4) + "<br/>");
document.write("3*4*10 = " + multiply3(3, 4, 10) + "<br/>");

var unlimitedParameters = function (...nums: number[]): void {
  var results = nums.reduce((x, y) => x + y, 0); // reduce() // Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
  // (x,y) first and second elements in the array that are passed as arguments to the callback function
  // 0 // is the default value // default returned value of the callback function
  document.write("array reduce results: " + results + "<br/>");
};

unlimitedParameters(3, 4, 1, 2, 5, 7, 3);

document.write(
  "---------------class in typescript----------------------- <br/>"
);

class Phone {
  public price: number;
  static owner: string = "";
  constructor(private os: string, price: number, owner: string) {
    this.price = price;
    Phone.owner = owner;
  }
  showAllInfo(): string {
    return (
      "Phone owner: " +
      Phone.owner +
      " price: " +
      this.price +
      " OS: " +
      this.os
    );
  }

  static showOwner(): string {
    return Phone.owner;
  }

  // getter and setter
  private _simCard: string;
  get simCard(): string {
    return this.simCard;
  }
  set simCard(sim: string) {
    this.simCard = sim;
  }
}

class Tecno extends Phone {
  private brandName: string;
  constructor(os: string, price: number, owner: string, brand: string) {
    super(os, price, owner); // passed to the constructor of the super class
    this.brandName = brand;
  }

  showBrandName(): string {
    return "Brand name: " + this.brandName;
  }
}

var myPhone: Phone = new Phone("android", 6000, "charles");
document.write("Phone Info: " + myPhone.showAllInfo() + "<br/>");
document.write("Phone Owner: " + Phone.showOwner() + "<br/>");

var smartPhone = new Tecno("harmony", 8000, "muhanzi", "TECNO");
document.write("TECNO Phone Info: " + smartPhone.showAllInfo() + "<br/>");
document.write("Phone Brand: " + smartPhone.showBrandName() + "<br/>");

document.write(
  "---------------class implements interface ----------------------- <br/>"
);

interface Vehicle {
  drive():any;
}

class Maserati implements Vehicle{
  public color:String;
  constructor(private price:number,color:String){
    this.color = color;
  }

  drive():void{
    document.write("Vehicle price: " +this.price +"  Vehicle color: "+this.color+ "<br/>");
  }
}

var car = new Maserati(2000000,"black");
car.drive();


document.write(
  "---------------generic function ----------------------- <br/>"
);

function doSomething<T>(value:T):void{
  document.write("The type of value is: "+typeof value+"<br/>");
}

doSomething({name:"charles"});
doSomething(45000000000000);
doSomething(Maserati);

function verifyClass<X extends Vehicle>(value:X,name:String):void{
  document.write("call drive function value.drive(); <br/>")
  value.drive();
  document.write("type X takes only values (classes) that implements Vehicle interface: <br/>"+"Class Name: "+name+"<br/>");
}

verifyClass(car,"Maserati");

document.write(
  "---------------generic classes ----------------------- <br/>"
);

class Computing<Y>{
  addition: (value1:Y,value2:Y) => Y; // returns a value of type Y
  name: String;
}

var computerNumber = new Computing<number>();
var computerString = new Computing<String>();

computerNumber.addition = (x1:number,x2:number) => x1+x2; // change the value of property addition
computerNumber.name = "Addition with numbers";
document.write("Addition of 4 and 3.7 // takes numbers --> "+computerNumber.addition(4,3.7)+" <br/>");

computerString.addition = (x1:String,x2:String) => String(Number(x1)+Number(x2)); // change the value of property addition
computerString.name = "Addition with strings";
document.write("Addition of 3 and 2 // takes strings --> "+computerString.addition("3","2")+" <br/>");

document.write(
  "---------------destructuring objects----------------------- <br/>"
);

var obj = {firstName:"charles",title:"software engineer",age:25};
var {firstName,title,age} = obj;

document.write("firstName: "+firstName+" title: "+title+" age: "+age+"<br/>");



