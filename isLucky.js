function isLucky(n) {
    // Convertir n en string
    let nStr = n.toString();
    // Nombre de caractère pour chaque partie du numero de ticket
    let nHalf = nStr.length / 2;
    // firstHalfStr: premier partie du string allant de l'index 0 à l'index de nHalf
    // puis, ajoutons les valeurs obtenues dans un tableau en utilisant split pour les séparer.
    let firstHalfStr = nStr.substring(0, nHalf).split("");
    // let sumFirstHalf = firstHalfStr.reduce(function(prevVal, currentVal) {
    //     return parseInt(prevVal) + parseInt(currentVal);
    // });
    let sumFirstHalf = firstHalfStr.reduce((prevVal, currentVal) => {
        return parseInt(prevVal) + parseInt(currentVal)});

    let secondHalfStr = nStr.substring(nHalf, nStr.length).split("");
    let sumSecondHalf = secondHalfStr.reduce((prevVal, currentVal) => {
        return parseInt(prevVal) + parseInt(currentVal);
    });
    
    return sumFirstHalf === sumSecondHalf;

}

isLucky(1589);