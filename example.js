var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var first_name = "charles";
var age = 22;
var hobbie = "coding";
document.getElementById("type").innerHTML =
    "Details: " + first_name + " " + age + " " + hobbie;
var lebon = {
    courseName: "software engineering",
    grade: 5.0,
    nationality: "congolese",
};
document.write("student information" +
    "<br/>" +
    "courseName: " +
    lebon.courseName +
    "<br/>" +
    "grade: " +
    lebon.grade +
    "<br/>" +
    "nationality: " +
    lebon.nationality +
    "<br/>");
var myList = ["josh", "johana", "josline"];
myList.push("josephine");
for (var i = 0; i < myList.length; i++) {
    document.write("Name: " + myList[i] + "<br/>");
}
document.write("------------------------------------------ <br/>");
myList.forEach(function (element) {
    document.write("Name: " + element + "<br/>");
});
var studentList = [];
studentList.push({
    courseName: "business administration",
    grade: 4.2,
    nationality: "ugandan",
});
document.write("student information" +
    "<br/>" +
    "courseName: " +
    studentList[0].courseName +
    "<br/>" +
    "grade: " +
    studentList[0].grade +
    "<br/>" +
    "nationality: " +
    studentList[0].nationality);
document.write("<br/>");
document.write("---------------------------------------- <br/>");
var list = [3, 4, 5, 8, 2.3]; // list is of type any
for (var i in list) {
    document.write("i: " + i + "<br/>"); // shows the index
}
document.write("---------------------------------------- <br/>");
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var i = list_1[_i];
    document.write("i: " + i + "<br/>"); // shows the actual value of i
}
document.write("---------------------------------------- <br/>");
var multiply = function (x, y, z) {
    return x * y * z;
};
document.write("3*2*4 = " + multiply(3, 2, 4) + "<br/>");
var multiply2 = function (x, y, z) {
    if (z === void 0) { z = 5; }
    // default value of z is 5
    return x * y * z;
};
document.write("3*4*5 = " + multiply2(3, 4) + "<br/>");
var multiply3 = function (x, y, z) {
    // z may or may not be given
    if (typeof z !== "undefined") {
        return x * y * z;
    }
    return x * y;
};
document.write("3*4 = " + multiply3(3, 4) + "<br/>");
document.write("3*4*10 = " + multiply3(3, 4, 10) + "<br/>");
var unlimitedParameters = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var results = nums.reduce(function (x, y) { return x + y; }, 0); // reduce() // Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
    // (x,y) first and second elements in the array that are passed as arguments to the callback function
    // 0 // is the default value // default returned value of the callback function
    document.write("array reduce results: " + results + "<br/>");
};
unlimitedParameters(3, 4, 1, 2, 5, 7, 3);
document.write("---------------class in typescript----------------------- <br/>");
var Phone = /** @class */ (function () {
    function Phone(os, price, owner) {
        this.os = os;
        this.price = price;
        Phone.owner = owner;
    }
    Phone.prototype.showAllInfo = function () {
        return ("Phone owner: " +
            Phone.owner +
            " price: " +
            this.price +
            " OS: " +
            this.os);
    };
    Phone.showOwner = function () {
        return Phone.owner;
    };
    Object.defineProperty(Phone.prototype, "simCard", {
        get: function () {
            return this.simCard;
        },
        set: function (sim) {
            this.simCard = sim;
        },
        enumerable: false,
        configurable: true
    });
    Phone.owner = "";
    return Phone;
}());
var Tecno = /** @class */ (function (_super) {
    __extends(Tecno, _super);
    function Tecno(os, price, owner, brand) {
        var _this = _super.call(this, os, price, owner) || this;
        _this.brandName = brand;
        return _this;
    }
    Tecno.prototype.showBrandName = function () {
        return "Brand name: " + this.brandName;
    };
    return Tecno;
}(Phone));
var myPhone = new Phone("android", 6000, "charles");
document.write("Phone Info: " + myPhone.showAllInfo() + "<br/>");
document.write("Phone Owner: " + Phone.showOwner() + "<br/>");
var smartPhone = new Tecno("harmony", 8000, "muhanzi", "TECNO");
document.write("TECNO Phone Info: " + smartPhone.showAllInfo() + "<br/>");
document.write("Phone Brand: " + smartPhone.showBrandName() + "<br/>");
document.write("---------------class implements interface ----------------------- <br/>");
var Maserati = /** @class */ (function () {
    function Maserati(price, color) {
        this.price = price;
        this.color = color;
    }
    Maserati.prototype.drive = function () {
        document.write("Vehicle price: " + this.price + "  Vehicle color: " + this.color + "<br/>");
    };
    return Maserati;
}());
var car = new Maserati(2000000, "black");
car.drive();
document.write("---------------generic function ----------------------- <br/>");
function doSomething(value) {
    document.write("The type of value is: " + typeof value + "<br/>");
}
doSomething({ name: "charles" });
doSomething(45000000000000);
doSomething(Maserati);
function verifyClass(value, name) {
    document.write("call drive function value.drive(); <br/>");
    value.drive();
    document.write("type X takes only values (classes) that implements Vehicle interface: <br/>" + "Class Name: " + name + "<br/>");
}
verifyClass(car, "Maserati");
document.write("---------------generic classes ----------------------- <br/>");
var Computing = /** @class */ (function () {
    function Computing() {
    }
    return Computing;
}());
var computerNumber = new Computing();
var computerString = new Computing();
computerNumber.addition = function (x1, x2) { return x1 + x2; }; // change the value of property addition
computerNumber.name = "Addition with numbers";
document.write("Addition of 4 and 3.7 // takes numbers --> " + computerNumber.addition(4, 3.7) + " <br/>");
computerString.addition = function (x1, x2) { return String(Number(x1) + Number(x2)); }; // change the value of property addition
computerString.name = "Addition with strings";
document.write("Addition of 3 and 2 // takes strings --> " + computerString.addition("3", "2") + " <br/>");
document.write("---------------destructuring objects----------------------- <br/>");
var obj = { firstName: "charles", title: "software engineer", age: 25 };
var firstName = obj.firstName, title = obj.title, age = obj.age;
document.write("firstName: " + firstName + " title: " + title + " age: " + age + "<br/>");
