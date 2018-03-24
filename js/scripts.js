//Business Logic
function Pizza (size, topping, name) {
  console.log(size);
  console.log(topping);
  //debugger;
  this.name = name;
  this.size = size;
  this.topping = topping;
  this.setPizzaPrice();
}

Pizza.prototype.setPizzaPrice = function(){
  return this.size + this.topping;
}

//User Interface
$(document).ready(function() {

  $("#submit").click(function(event){
    event.preventDefault();
    var selectedSize = parseInt($("select#pizza-size").val());
    var selectedTopping = parseInt($("select#pizza-type").val());
    var name = $("#firstname").val();
    //var selectedToppings = $("input:checkbox[name=topping]:checked").val();
    console.log(selectedTopping);
    console.log(selectedSize);
    console.log(name);
    var pizza = new Pizza(selectedSize, selectedTopping, name);

    console.log(pizza);

    $("#your-order").append("<li> Thanks " + pizza.name + ", your order will cost $" + pizza.setPizzaPrice() + ".00. </li>");
  });
});
