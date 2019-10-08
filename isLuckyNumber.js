function isLuckyNumber(n) {

    let arrOfDigits = Array.from(String(n), Number); // Convertir un nombre n en tableau de chiffres
    
    if(arrOfDigits.includes(4) && arrOfDigits.includes(7)) {
        return true;
    }
    return false;


}

isLuckyNumber(488874);
