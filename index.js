var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.speak = function (message) {
        console.log("".concat(this.name, " says: ").concat(message));
    };
    Person.prototype.add = function (a, b) {
        return a + b;
    };
    Person.prototype.subtract = function (a, b) {
        return a - b;
    };
    Person.prototype.multiply = function (a, b) {
        return a * b;
    };
    Person.prototype.divide = function (a, b) {
        return a / b;
    };
    return Person;
}());
var person = new Person("John");
person.speak("Hello everyone!");
var sumResult = person.add(5, 3);
console.log("Sum result:", sumResult);
var subtractResult = person.subtract(10, 4);
console.log("Subtraction result:", subtractResult);
var multiplyResult = person.multiply(5, 4);
console.log("Multiplication result:", multiplyResult);
var divideResult = person.divide(10, 2);
console.log("Division result:", divideResult);
