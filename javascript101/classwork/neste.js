var leagues = ["North","South","East"];
var Teams =["Cleveland Browns","Baltimore Ravens","Atlanta Falcons","New York Jets"]

//Multi dimension

var leaguesArray = ["AFC North","NFC South","AFC East","NFC East"];
var teamsArray = [["Cleaveland Browns","Baltimore Ravens","Steelers","Bengals"], ["Atlanta Falcons","Saints","Bucs","Panthers"], ["New York Jets","Pats","Bills","Dolphins"],["Cowboys","Giants","Eagles","Redskins"]];

for(var nfl = 0; nfl < leaguesArray.length; nfl++){
            console.log(leaguesArray[nfl]);

    for (var cliff = 0; cliff < teamsArray[nfl].length; cliff++) {

        console.log(teamsArray[nfl][cliff]);
    }
 }

