function areSimilar(a, b) {

    if(a.toString() === b.toString()) {
        return true;
    }

    let aArr = [];
    let bArr = [];

    for(let i = 0; i < a.length; i++) {
        if(a[i] != b[i]) {
            aArr.push(a[i]);
            bArr.push(b[i]);
        }
    }
    console.log(bArr);
    bArr = bArr.reverse();

    if(aArr.length === 2 && (aArr.toString() == bArr.toString())) {
        return true;
    }
    return false;

}

areSimilar([1, 2, 3], [1, 2, 3]);
