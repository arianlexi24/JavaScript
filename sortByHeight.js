function sortByHeight(a) {

    let arrForIndex = [];
    let arrForValue = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] === -1) {
            // push l'index
            arrForIndex.push(i);
        }
        else {
            // push la valeur correspondant à l'index
            arrForValue.push(a[i]);
        }
    }

    let arrSorted = arrForValue.sort((prevVal, currentVal) => {
        return prevVal - currentVal;
    });

    for (let j = 0; j < arrForIndex.length; j++) {
        arrSorted.splice(arrForIndex[j], 0, -1);
    }

    console.log(arrSorted);

}

sortByHeight([1,8,-1,25,8,-1,9]);