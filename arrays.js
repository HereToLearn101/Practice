//var friends = ["Ted", "Breyden", "Isaac", "James", "Tori", "Devon"];
//var team1 = new Array();
//var team2 = new Array();

//var numbers = [1, 2, 3, 4, 5];

/*
for (var i = 0; i < friends.length; i++) {
    if ((i%2) == 0) {
        team1.push(friends[i]);
    } else {
        team2.push(friends[i]);
    }
}
*/

/*
for (var i = 0; i < friends.length; i++) {
    if ((i%2) == 0) {
        team1.unshift(friends[i]);
    } else {
        team2.unshift(friends[i]);
    }
}
*/

/*
for (var i = 0; i < friends.length; i++) {
    if ((i%2) == 0) {
        team1[team1.length] = friends[i];
    } else {
        team2[team2.length] = friends[i];
    }
}
*/

function findMax(numbers) {
    var max = 0;
    max = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (max < numbers[i]) {
            max = numbers[i];
        }
    }
    return max;
}

//friends.slice(0, 2);
//console.log(friends);

//console.log("Team1: " + team1);
//console.log("Team2: " + team2);