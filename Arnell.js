var day = "Monday";
var hours = 20;

if(day == "Monday"){
    var pay = hours * 10;
    console.log("Today is", day, "and you earned",pay);
    
}
else if (day == "Friday"){
    pay = hours * 20;
    console.log("Today is", day, "and you earned", pay);
    
}
else {
    pay = hours * 15;
    console.log("Today is", day, "and you earned", pay);
}
