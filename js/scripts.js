//*********************************************************************//
    // Business Logic //
//*********************************************************************//
function PizzaOrder(orderName)  {
  this.orderName = name;
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

//*********************************************************************//
    // User Interface //
//*********************************************************************//
