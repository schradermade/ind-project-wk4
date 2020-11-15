// Business Logic

function Pizza( guestName, toppings, size)  {
  this.guestName = guestName,
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calcPrice = function()  {

}

$(document).ready(function() {
  $("#formOne").submit(function(event)  {
    event.preventDefault();

    let guestName = $("#guest-name").val();
    alert(guestName);
    let toppings;
    let cheese = $("#cheese").val();
    alert(cheese);
    let pepperoni = $("#pepperoni").val();
    alert(pepperoni);
  })
});