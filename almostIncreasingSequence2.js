function almostIncreasingSequence(sequence) {
    if (isIncreasingSequence(sequence)) {
        return true;
    }
    for (var i = 0; i < sequence.length > 0; i++) {
        // On va dupliquer la sequence pour avoir une autre sequence intacte
        var duplicatedSequence = sequence.slice(0); 
        // Supprimons un element de la sequence à tester
        duplicatedSequence.splice(i, 1);

        if (isIncreasingSequence(duplicatedSequence)) {
            return true;
        }
    }
    return false;
}

function isIncreasingSequence(sequence) {
    for (var i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            return false;
        }
    }
    return true;
}

almostIncreasingSequence()