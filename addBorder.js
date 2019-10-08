function addBorder(picture) {
    
    /* On compte d'abord le nombre de caractère du premier element et on y ajoute 2 wu qu'on devra avoir 2 * aux 2 extremités de chaque element */
    let lengthOfFirstElPlusTwo = picture[0].length + 2;
    let asterisk = "";

    for(let i = 0; i < lengthOfFirstElPlusTwo; i++) {
        asterisk = asterisk.concat("*");
    }

    picture.unshift(asterisk); // on ajoute maintenant asterisks au DEBUT du tableau picture
    picture.push(asterisk); // on ajoute aussi asterisk à la FIN du tableau picture

    for(let j = 1; j < picture.length - 1; j++) {
        picture[j] = "*" + picture[j] + "*";
    }

    console.log(picture);
    return picture;
}

addBorder(["wzy**"]);