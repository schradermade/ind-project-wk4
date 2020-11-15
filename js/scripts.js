// Business Logic

function Pizza( guestName, toppings, size)  {
  this.guestName = guestName,
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calcPrice = function()  {
  let cost = 0;
  if ( this.size === 'medium')  {
    cost += 10;
  }
  if ( this.size === "large") {
    cost += 15;
  }
  alert(cost);
};

$(document).ready(function() {
  $("#formOne").submit(function(event)  {
    event.preventDefault();

    let pizzaOrder = new Pizza(guestName, toppings, size);
    let pizzaPrice = pizzaOrder.calcPrice();
    alert(pizzaPrice);
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
    
  })

  $("#results").empty().append(guestName + ", your" + size + "pizza will be $" + pizzaPrice );
});