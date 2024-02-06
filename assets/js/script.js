

/*
let gameAmount = prompt("¿Cuantos juegos quieres jugar?");
let i = 0;
* 
while (i < gameAmount) {
    let computerTechnique = "";
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            computerTechnique = "piedra";
            break;
        case 1:
            computerTechnique = "papel";
            break;
        case 2:
            computerTechnique = "tijera";
            break;
    }


    let playerTechnique = prompt("elige piedra, papel o tijera, Cuida la ortografia");
    while (playerTechnique.toLowerCase() !== "piedra" && playerTechnique.toLowerCase() !== "tijera" && playerTechnique.toLowerCase() !== "papel") {
        playerTechnique = prompt("elige piedra, papel o tijera, Cuida la ortografia");
    }

    if (computerTechnique === playerTechnique) {
        alert("El computador ha elegido: " + computerTechnique + "\n" + "El jugador ha elegido: " + playerTechnique + "\n" +
            "Ha habido un empate");
    } else if (computerTechnique === "piedra" && playerTechnique === "tijera") {
        alert("El computador ha elegido: " + computerTechnique + "\n" + "El jugador ha elegido: " + playerTechnique + "\n" +
            "El computador ha vencido esta ronda")
    } else if (computerTechnique === "tijera" && playerTechnique === "piedra") {
        alert("El computador ha elegido: " + computerTechnique + "\n" + "El jugador ha elegido: " + playerTechnique + "\n" +
            "Felicidades has vencido al computador")
    } else if (computerTechnique === "piedra" && playerTechnique === "papel") {
        alert(
            "El computador ha elegido: " + computerTechnique + "\n" + "El jugador ha elegido: " + playerTechnique + "\n" +
            "Felicidades has vencido al computador")
    } else if (computerTechnique === "papel" && playerTechnique === "piedra") {
        alert("El computador ha elegido: " + computerTechnique + "\n" + "El jugador ha elegido: " + playerTechnique + "\n" +
            "El computador ha vencido esta ronda")
    } else if (computerTechnique === "papel" && playerTechnique === "tijera") {
        alert("El computador ha elegido: " + computerTechnique + "\n" + " El jugador ha elegido: " + playerTechnique + "\n" +
            "Felicidades has vencido al computador")
    }else if (computerTechnique === "tijera" && playerTechnique === "papel") {
        alert("El computador ha elegido: " + computerTechnique + "\n" + "El jugador ha elegido: " + playerTechnique + "\n" +
            "El computador ha vencido esta ronda")
    }

    i++;

}
*/
/**funcion que elige una jugada para el computador */
function jugadaComputador(){
    let computerTechnique = "";

    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            computerTechnique = "piedra";
            break;
        case 1:
            computerTechnique = "papel";
            break;
        case 2:
            computerTechnique = "tijera";
            break;
    }

    return computerTechnique
}


function jugadaHumano(){
    let playerTechnique = prompt("elige piedra, papel o tijera, Cuida la ortografia");
    while (playerTechnique.toLowerCase() !== "piedra" && playerTechnique.toLowerCase() !== "tijera" && playerTechnique.toLowerCase() !== "papel") {
        playerTechnique = prompt("elige piedra, papel o tijera, Cuida la ortografia");
    }
        return playerTechnique
}


function cachipun(computerTechnique, playerTechnique){
    
        if (computerTechnique === playerTechnique) {
            alert("El computador ha elegido: " + computerTechnique + "\n" + "El jugador ha elegido: " + playerTechnique + "\n" +
                "Ha habido un empate");
        } else if (computerTechnique === "piedra" && playerTechnique === "tijera") {
            alert("El computador ha elegido: " + computerTechnique + "\n" + "El jugador ha elegido: " + playerTechnique + "\n" +
                "El computador ha vencido esta ronda")
        } else if (computerTechnique === "tijera" && playerTechnique === "piedra") {
            alert("El computador ha elegido: " + computerTechnique + "\n" + "El jugador ha elegido: " + playerTechnique + "\n" +
                "Felicidades has vencido al computador")
        } else if (computerTechnique === "piedra" && playerTechnique === "papel") {
            alert(
                "El computador ha elegido: " + computerTechnique + "\n" + "El jugador ha elegido: " + playerTechnique + "\n" +
                "Felicidades has vencido al computador")
        } else if (computerTechnique === "papel" && playerTechnique === "piedra") {
            alert("El computador ha elegido: " + computerTechnique + "\n" + "El jugador ha elegido: " + playerTechnique + "\n" +
                "El computador ha vencido esta ronda")
        } else if (computerTechnique === "papel" && playerTechnique === "tijera") {
            alert("El computador ha elegido: " + computerTechnique + "\n" + " El jugador ha elegido: " + playerTechnique + "\n" +
                "Felicidades has vencido al computador")
        }else if (computerTechnique === "tijera" && playerTechnique === "papel") {
            alert("El computador ha elegido: " + computerTechnique + "\n" + "El jugador ha elegido: " + playerTechnique + "\n" +
                "El computador ha vencido esta ronda")
        }
   
    }


alert("Bienvenido al juego de cachipun!");
let matches = +prompt("¿Cuantos juegos quieres jugar?")
let i = 0
while(i<matches){
cachipun(jugadaComputador(),jugadaHumano());
i++
}


