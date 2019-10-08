function firstReverseTry(arr) {
    if (arr.length >= 1) {
        var firstEl = arr[0];
        var lastEl = arr[arr.length - 1];
        arr.pop();
        arr.shift();
        arr.unshift(lastEl);
        arr.push(firstEl);
        console.log(arr);
    }
}

firstReverseTry([]);