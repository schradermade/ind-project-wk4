// Business Logic
function Pizza( guestName, toppings, size)  {
  this.guestName = guestName;
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calcPrice = function()  {
  let cost = 0;
  if ( this.size === 'Medium')  {
    cost += 10;
  } else {
    cost += 15;
  }
  return cost;
};

// User Logic
$(document).ready(function() {
  $("#formOne").submit(function(event)  {
    event.preventDefault();
    
    let guestName = $("#guest-name").val();
    let cheese = $("#cheese").val();
    let pepperoni = $("#pepperoni").val();
    let toppings = [pepperoni, cheese];
    let size = $("#size").val();
    let pizzaOrder = new Pizza(guestName, toppings, size);
    let pizzaPrice = pizzaOrder.calcPrice();
    $("#results").empty().append(guestName + ", your " + size + " pizza will be $" + pizzaPrice + ". Enjoy!");
  })
});