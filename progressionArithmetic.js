function arithmeticProgression(element1, element2, n) {
    
    let r = element2 - element1;
    for (let i = 1; i <= n; i++) {
        let res = element1 + (i - 1) * r;
        console.log("element" + i + " = " + res);
    }

}

arithmeticProgression(3, 2, 4);