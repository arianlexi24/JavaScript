function palindromeRearranging(inputString) {

    let splitStringArray = inputString.split("");
    let objLetter = new Object(); // ou bien let objLetter = {};

    for(let i = 0; i < splitStringArray.length; i++) {
        if(!objLetter.hasOwnProperty(splitStringArray[i])) {
            objLetter[splitStringArray[i]] = 1;
            
        }
        else {
            objLetter[splitStringArray[i]]++;
        }
        console.log(objLetter);
    }

    let countOddNumber = 0;
    for(value in objLetter) {
        if(objLetter[value] % 2 != 0) {
            countOddNumber++;
        }
    }
    if(countOddNumber > 1) {
        return false;
    }
    else {
        return true;
    }
}

palindromeRearranging('azzrbtertb');