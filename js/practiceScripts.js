// Describe: PizzaOrder()
// Test: should correctly create an instance of PizzaOrder
// Code:    let name = "Christian";
// Code:    let newPizza = new PizzaOrder(name);
// Code:    let result = newPizza.guestName;
// Expect:      result.toEqual("Christian");

// Describe: addCheese()
// Test: will correctly add cheese to instance of PizzaOrder
// Code:    let name = "Christian";
// Code:    let newPizza = new PizzaOrder(name);
// Code:    newPizza.addCheese("cheese");
// Code:    let result = newPizza.cheese;
// Expect:      result.toEqual("cheese");

// Describe: addOlives()
// Test: will correctly add olives to instance of PizzaOrder
// Code:    let name = "Christian";
// Code:    let newPizza = new PizzaOrder(name);
// Code:    newPizza.addOlives("olives");
// Code:    let result = newPizza.olives;
// Expect:      result.toEqual("olives");

// Describe: addPepperoni()
// Test: will correctly add pepperoni to instance of PizzaOrder
// Code:    let name = "Christian";
// Code:    let newPizza = new PizzaOrder(name);
// Code:    newPizza.addPepperoni("pepperoni");
// Code:    let result = newPizza.pepperoni;
// Expect:      result.toEqual("pepperoni");

// Describe: addTomatos()
// Test: will correctly add tomatos to instance of PizzaOrder
// Code:    let name = "Christian";
// Code:    let newPizza = new PizzaOrder(name);
// Code:    newPizza.addTomatos("tomatos");
// Code:    let result = newPizza.tomatos;
// Expect:      result.toEqual("tomatos");

// Describe: addSize()
// Test: will correctly add size to instance of PizzaOrder
// Code:    let name = "Christian";
// Code:    let newPizza = new PizzaOrder(name);
// Code:    newPizza.addSize("Small");
// Code:    let result = newPizza.size;
// Expect:      result.toEqual("Small")

// Describe: buildPizza()
// Test: will correctly create pizza order with all toppings and size in PizzaOrder
// Code:    let name = "Christian";
// Code:    let newPizza = new PizzaOrder(name);
// Code:    newPizza.addSize("Large");
// Code:    newPizza.addCheese("cheese");
// Code:    newPizza.addPepperoni("pepperoni");
// Code:    let result = newPizza.buildPizza();
// Expect:      result.toEqual(["Large", "cheese", "pepperoni"]);

// Describe: anotherPizza();
// Test: will correctly clear all toppings and size in PizzaOrder
// Code:    let name = "Christian";
// Code:    let newPizza = new PizzaOrder(name);
// Code:    newPizza.addSize("Medium");
// Code:    newPizza.addTomatos("tomatos");
// Code:    newPizza.addPepperoni("pepperoni");
// Code:    let pizza = newPizza.buildPizza();
// Code:    let result = newPizza.anotherPizza();
// Expect:      pizza.toEqual(["Medium", "tomatos", "pepperoni"]);
// Expect:      result.toEqual([]);
