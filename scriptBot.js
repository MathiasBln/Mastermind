//tableau de X couleur + Instanciation variable
const colors = ['Red','Purple','Yellow','Blue','Pink','Chartreuse'];
document.getElementById('square1').style.backgroundColor = colors[0];
document.getElementById('square2').style.backgroundColor = colors[1];
document.getElementById('square3').style.backgroundColor = colors[2];
document.getElementById('square4').style.backgroundColor = colors[3];
document.getElementById('square5').style.backgroundColor = colors[4];
document.getElementById('square6').style.backgroundColor = colors[5];

//intanciation des tours
let round = 0;

//function random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

//bot construit une séquence de 4 couleurs aléatoire
function chooseColorByBot(colors){
    let botColors = []
    for (let i = 0 ; i < 4; i++){
        let j = getRandomIntInclusive(0, (colors.length - 1));
        botColors.push(colors[j]);
    }

    return botColors;
}
let bot = chooseColorByBot(colors);

//Gestion affichage couleur bot
document.getElementById('cercle1').style.backgroundColor = 'grey';
document.getElementById('cercle2').style.backgroundColor = 'grey';
document.getElementById('cercle3').style.backgroundColor = 'grey';
document.getElementById('cercle4').style.backgroundColor = 'grey';


let player = []
//Joueur créer sa séquence
function getValue() {
    // Tableau
    let playerColors = []
    // Sélectionner l'élément input et récupérer sa valeur
    var input1 = document.getElementById("player1").value;
    var input2 = document.getElementById("player2").value;
    var input3 = document.getElementById("player3").value;
    var input4 = document.getElementById("player4").value;
    // Ajoute couleurs choisies par le joueur dans le tableau du joueur
    playerColors.push(colors[input1], colors[input2], colors[input3], colors[input4]);

    document.getElementById('cclPlayer1').style.backgroundColor = colors[input1];
    document.getElementById('cclPlayer2').style.backgroundColor = colors[input2];
    document.getElementById('cclPlayer3').style.backgroundColor = colors[input3];
    document.getElementById('cclPlayer4').style.backgroundColor = colors[input4];

    player = playerColors;
}

document.querySelector("#playerValues").onclick = getValue;


//comparaison des séquences 
function compareSequence() {
    //Reset des indices
    resultGood = 0;
    resultPresqueGood = 0;
    document.getElementById("good").innerHTML=resultGood;
    document.getElementById("notgood").innerHTML=resultPresqueGood;

    //Boucle resultat 
    for (let i = 0; i < 4; i++) {
        if (bot[i] == player[i]) {
            resultGood += 1;
            document.getElementById("good").innerHTML=resultGood;
        }
        else{
            for (let j = 0; j < 4; j++){
                if (player[j] == bot[i]){
                    resultPresqueGood += 1;
                    document.getElementById("notgood").innerHTML=resultPresqueGood;
                }
            }
        }
    }

    //Affichage de la gagne + rematch
    if (resultGood == 4){
        document.getElementById('cercle1').style.backgroundColor = bot[0];
        document.getElementById('cercle2').style.backgroundColor = bot[1];
        document.getElementById('cercle3').style.backgroundColor = bot[2];
        document.getElementById('cercle4').style.backgroundColor = bot[3];
        document.getElementById('WinOrLose').innerHTML="GG EASY";
        document.getElementById('rejouer').innerHTML="Cliquez ici pour rejouer";
    }
    round += 1
    document.getElementById('round').innerHTML=(10 - round);
    if (round == 10){
        document.getElementById('WinOrLose').innerHTML="Perdu";
        document.getElementById('rejouer').innerHTML="Cliquez ici pour rejouer";
    }
}

document.querySelector("#result").onclick = compareSequence;

console.log(bot);
