

var brandsArray = ["Yeezy","Rick Owens","Nike","Off-White"];
var productsArray = [["Yeezy Boost","Callabassas","Powerphase","350",] , ["Geobasket","Dark Shadow","Memphis Denim"], ["Travis Scott Collabbs","Fear Of God", "Off-White Air Force One"],["Virgil Abloh"]];

console.log("These are keywords that go hand in hand with the modern state of street wear")




for (var i = 0; i < brandsArray.length; i++){
    console.log(brandsArray[i]);
    for(var j = 0; j < productsArray[i].length; j++){
        console.log('\t','\n',productsArray[i][j]);
    }

}


//for(var i = 0; i < brandsArray.length; i++){
 //   console.log(brandsArray[i]);
  //  for(var j = 0; j < productsArray[i].length;j++){
   //     console.log('\t','\n',productsArray[i][j]);
  //  }
//}




