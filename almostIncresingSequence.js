function almostIncreasingSequence(sequence) {
    
    var almostIncreased = 0;
    
    for (var i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i-1]) {
            almostIncreased++;
            if (almostIncreased > 1) {
                return false;
            }
            if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) {
                return false;
            }
        }
    }
    return true;
}
almostIncreasingSequence([122,25,4,-8,25]);
  