// Business Logic
function Pizza(inputName)  {
  this.guestName = inputName;
  this.toppings = [];
  this.toppingsCount = 0;
  this.size = "";
  this.price = 0;
}

Pizza.prototype.addSize = function(pizzaSize) {
  return this.size = pizzaSize;
};

Pizza.prototype.addToppings = function(cheese, pepperoni) {
  if (cheese === "cheese")  {
    this.toppings.push(cheese);
    this.toppingsCount += 1;
    this.price += 1.50;
  }
  if (pepperoni === "pepperoni")  {
    this.toppings.push(pepperoni);
    this.toppingsCount += 1;
    this.price += 2.00;
  }
  return this.toppingsCount;
};

Pizza.prototype.addPrice = function()  {
  if (this.size === "Medium") {
    this.price += 10;
  }
  if (this.size === "Large")  {
    this.price += 15;
  }
  return this.price;
};

// User Logic
$(document).ready(function() {
  $("#formOne").submit(function(event)  {
    event.preventDefault();
    let inputName = $("#guest-name").val();
    let cheese = $("#cheese").val();
    let pepperoni = $("#pepperoni").val();
    let pizzaSize = $("#size").val();
    let pizzaOrder = new Pizza(inputName);
    pizzaOrder.addSize(pizzaSize);
    pizzaOrder.addPrice();
    pizzaOrder.addToppings(cheese, pepperoni);
    $("#results").empty().append(pizzaOrder.guestName + ", your " + pizzaOrder.size + " pizza will be $" + pizzaOrder.price + ". Enjoy!");
  })
});