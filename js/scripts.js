// Business Logic

function Pizza( guestName, toppings, size)  {
  this.guestName = guestName,
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
  alert(cost);
  return cost;
};
  

$(document).ready(function() {
  $("#formOne").submit(function(event)  {
    event.preventDefault();
    
    let guestName = $("#guest-name").val();
    alert(guestName);
    let cheese = $("#cheese").val();
    alert(cheese);
    let pepperoni = $("#pepperoni").val();
    alert(pepperoni);
    let toppings = [pepperoni, cheese];
    alert(toppings);
    let size = $("#size").val();
    alert(size);
    let pizzaOrder = new Pizza(guestName, toppings, size);
    let pizzaPrice = pizzaOrder.calcPrice();
    $("#results").empty().append(guestName + ", your " + size + " pizza will be $" + pizzaPrice + ". Enjoy!");
  })
});