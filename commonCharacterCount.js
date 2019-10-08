function commonCharacterCount(s1, s2) {
    let myObject1 = {};
    let myObject2 = {};
    let commonCharacter = 0;
    
    for (let i = 0; i < s1.length; i++) {
        if (myObject1[s1[i]] === undefined) {
            myObject1[s1[i]] = 1;
        } else {
            myObject1[s1[i]] = myObject1[s1[i]] + 1;
        }
    }
    
    for (let j = 0; j < s2.length; j++) {
        if (myObject2[s2[j]] === undefined) {
            myObject2[s2[j]] = 1;
        } else {
            myObject2[s2[j]] = myObject2[s2[j]] + 1;
        }
    }

    for (let wordKeys in myObject1) {
        if (myObject2[wordKeys]) {
            if (myObject1[wordKeys] <= myObject2[wordKeys]) {
                commonCharacter += myObject1[wordKeys];
            } else if (myObject2[wordKeys] <= myObject1[wordKeys]) {
                commonCharacter += myObject2[wordKeys];
            }
        }
    }
    console.log(commonCharacter);
}


commonCharacterCount("zzzzzzzzzzzzzzzz", "Rzzzzzzhhhhhezzzzzzz");