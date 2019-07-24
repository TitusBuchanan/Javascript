
var labelsArray = ["Young Money","Good Music","QC","Cactus Jack"];
var artistsArray = [["Nicki Minaj","Drake"], ["Kanye","Big Sean","Pusha-T"], ["Yachty","Lil Baby"],["SmokePurp"]];

for(var i = 0; i < labelsArray.length; i++){
    console.log(labelsArray[i]);
    for(var j = 0; j < artistsArray[i].length;j++){
        console.log('\t','\n',artistsArray[i][j]);
    }
}

