let sides = [8, 17, 15];

function rightTriangle(sides) {
    if(sides.length === 3 && sides.every(checkIfPositif)) {

        console.log("C'est avant tout un triangle");
        
        var valueMax = Math.max(...sides);
        // console.log("Element à valeur maximal: " + valueMax);
        var indexOfValueMax = sides.indexOf(valueMax)
        // console.log(indexOfValueMax);
        sides.splice(indexOfValueMax, 1);
        // console.log(sides);
        var hypotenuseAuCarre = Math.pow(valueMax, 2);
        var sidesAAuCarre = Math.pow(sides[0], 2);
        var sidesBAuCarre = Math.pow(sides[1], 2)

        if(hypotenuseAuCarre == sidesAAuCarre + sidesBAuCarre) {
            console.log("Resultat=> " + hypotenuseAuCarre + " = " + sidesAAuCarre + " + " + sidesBAuCarre);
            console.log("Ceci est un triangle rectangle");
        }
        else {
            console.log("Ceci n'est pas un triangle rectangle");
        }  
    }
    else {
        console.log("Ceci n'est pas un triangle");
    }

}

function checkIfPositif(currentValue) {
    return currentValue > 0;
}

rightTriangle(sides);