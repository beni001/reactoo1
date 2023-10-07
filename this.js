
  // Define a class called GreetingComponent 
  class GreetingComponent {
    // Constructor that takes a 'name' parameter
    constructor(name) {
      // Set the 'name' property of the instance to the provided 'name'
      this.name = name;
    }
  
    // Define a method called 'sayHello'
    sayHello() {
      // Log a greeting message with the 'name' property of the instance
      console.log(`Hello, ${this.name}!`);
    }
  }
  
  // Create an instance 'john' of the GreetingComponent class with the name "John"
  const john = new GreetingComponent("John");
  
  // Create an instance 'admin' of the GreetingComponent class with the name "Admin"
  const admin = new GreetingComponent("Admin");
  
  // Call the 'sayHello' method on the 'john' instance
  john.sayHello(); // Output: Hello, John!
  
  // Call the 'sayHello' method on the 'admin' instance
  admin.sayHello(); // Output: Hello, Admin!