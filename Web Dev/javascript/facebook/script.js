var database = [
	{
		username: "Ram",
		password: "123"
	},
	{
		username: "AWS",
		password: "1234"
	},
	{
		username: "Coin",
		password: "321"
	}
];

var newsFeed = [
    {
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(user, pass) {
	for (var i = 0; i < database.length; i++) {
		if(database[i].username === user && 
			database[i].password === pass) {
			return true;
		} 
	}
	return false;
}

function signIn(user, pass) {
	if (isUserValid(user, pass)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password!");
	}
	// for (var i = 0; i < database.length; i++) {
	// 	if(database[i].username === user && 
	// 		database[i].password === pass) {
	// 			console.log(newsFeed);
	// 	} else {
	// 		alert("Sorry, wrong username and password!");
	// 	}
	// }
	
	// if (user === database[0].username && 
	// 	pass === database[0].password) {
	// 	console.log(newsFeed);
	// } else {
	// 	alert("Sorry, wrong username and password!");
	// }
}

signIn(userNamePrompt, passwordPrompt);