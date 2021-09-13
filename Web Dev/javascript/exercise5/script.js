
funtion checkDriverAge(age) {
    console.log(age);
    if (age < 18) {
        return "Sorry, you are too yound to drive this car. Powering off";
    } else if (age > 18) {
        return "Powering On. Enjoy the ride!";
    } else if (age === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    }
}

var checkDriverAge2 = function(age) {
    if (age < 18) {
        return "Sorry, you are too yound to drive this car. Powering off";
    } else if (age > 18) {
        return "Powering On. Enjoy the ride!";
    } else if (age === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    }
}