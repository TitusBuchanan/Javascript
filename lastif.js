//small = 5, medium = 10, large = 15
//toppings less than 6 = 5, 6 or more = 10

var size = "large";
var toppings = 6;

if (size === "small" && toppings >= 6){
    console.log("Your price is", 15);
}else if (size ==="small" && toppings < 6){
    console.log("Your price is", 10);
}
