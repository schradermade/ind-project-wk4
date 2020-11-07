//*********************************************************************//
    // Business Logic //
//*********************************************************************//
function PizzaOrder(guestName)  {
  this.guestName = guestName;
  this.pizzaSize = size;
  this.cheese = cheese;
  this.pepperoni = pepperoni;
  this.olives = olives;
  this.tomatos = tomatos;
  this.totalToppings = [];
}
//*********************************************************************//
                      // Prototypes //
//*********************************************************************//
PizzaOrder.prototype.addSize = function(size) {
  this.size += size;
}

PizzaOrder.prototype.addCheese = function(cheese) {
  this.cheese += cheese;
}

PizzaOrder.prototype.addPepperoni = function(pepperoni) {
  this.pepperoni += pepperoni;
}

PizzaOrder.prototype.addOlives = function(olives) {
  this.olives += olives;
}

PizzaOrder.prototype.addTomatos = function(tomatos) {
  this.tomatos += tomatos;
}

PizzaOrder.prototype.buildPizza = function()  {
  this.totalToppings += this.cheese + this.pepperoni + this.olives + this.tomatos;
}

PizzaOrder.prototype.anotherPizza = function()  {
  this.totalToppings = [];
  this.cheese = 0;
}

//*********************************************************************//
// User Interface //
//*********************************************************************//
$(document).ready(function(event)  {
  
  let pizzaOrder;
  let newPizza = new PizzaOrder(guestName);
  newPizza.addCheese();
  newPizza.addOlives();
  newPizza.addPepperoni();
  newPizza.addTomatos();

    //*********************************************************************//
    // "NEW PIE ORDER" - Customer can enter name and create order //
    //*********************************************************************//

  $("#newOrder").submit(function(event) {
    event.preventDefault();
    $("#newPizza").show();
    let guestName = $("#guestName").val();
    pizzaOrder = new PizzaOrder(guestName);
    console.log(guestName);
    console.log(pizzaOrder);
  });

    //*********************************************************************//
    // "BUILD IT" - Customer can build their pie //
    //*********************************************************************//

  $("#newPizza").submit(function(event) {
    event.preventDefault();
    let size = $("#size").val();
    let cheese = $("#cheese").val();
    let pepperoni = $("#pepperoni").val();
    let olives = $("#olives").val();
    let tomatos = $("#tomatos").val();
    pizzaOrder.addSize(size);
    pizzaOrder.addCheese(cheese);
    pizzaOrder.addPepperoni(pepperoni);
    pizzaOrder.addOlives(olives);
    pizzaOrder.addTomatos(tomatos);
    console.log(size);
  });

    //*********************************************************************//
    // "MAKE IT" - Customer can see summary of their pizza order //
    //*********************************************************************//

  $("#makeIt").submit(function(event)  {
    event.preventDefault();
    let finalPizza = pizzaOrder.buildPizza();
    $("#completePizza").text(finalPizza);
    console.log(finalPizza);
  });

    //*********************************************************************//
    // "MAKE ANOTHER!" //
    //*********************************************************************//

  $("#makeAnother").submit(function(event) {
    event.preventDefault();
    newPizza.anotherPizza();
    $("#completePizza").text([])
  });
});