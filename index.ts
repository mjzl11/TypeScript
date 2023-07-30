class Person {
    private name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    speak(message: string): void {
      console.log(`${this.name} says: ${message}`);
    }
  
    add(a: number, b: number): number {
      return a + b;
    }
  
    subtract(a: number, b: number): number {
      return a - b;
    }
  
    multiply(a: number, b: number): number {
      return a * b;
    }
  
    divide(a: number, b: number): number {
      return a / b;
    }
  }
  
  const person = new Person("John");
  
  person.speak("Hello everyone!");
  const sumResult = person.add(5, 3);
  console.log("Sum result:", sumResult);
  const subtractResult = person.subtract(10, 4);
  console.log("Subtraction result:", subtractResult);
  const multiplyResult = person.multiply(5, 4);
  console.log("Multiplication result:", multiplyResult);
  const divideResult = person.divide(10, 2);
  console.log("Division result:", divideResult);