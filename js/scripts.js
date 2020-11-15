// Business Logic

function Pizza( guestName, toppings, size)  {
  this.guestName = guestName,
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calcPrice = function()  {
  alert("this is a test");
}

$(document).ready(function() {
  $("#formOne").submit(function(event)  {
    event.preventDefault();

    
  })
});