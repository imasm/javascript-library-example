export default class Greeter {
  constructor(message) {
    this.greeting = message;
  }

  sayHello() {
    console.log('Hello,' + this.greeting);
  }
  
  sayGoodbye() {
    console.log('Goodbye, ' + this.greeting);
  }
}