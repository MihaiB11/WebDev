let will_pokemon = {
    pikachu: {
        species: "mouse",
        height: 0.4,
        weight: 6
    }
}

let aws_pokemon = {
    raichu: {
        species: "mouse",
        height: 0.8,
        weight: 30
    },
    pikachu: {
        species: "mouse",
        height: 0.8,
        weight: 30,
        power: 0
    }
}

let weight = will_pokemon.pikachu.weight;
console.log("weight", weight);

if (aws_pokemon.pikachu && aws_pokemon.pikachu.weight) {
    let aws_weight = aws_pokemon.pikachu.weight;
    console.log("weight", aws_weight);
} else {
    let aws_weight = undefined;
    console.log("weight", aws_weight);
}

let weight3 = aws_pokemon?.pikachu?.weight;
console.log(weight3);

let power = aws_pokemon?.pikachu?.power ?? " no power"
console.log(power);