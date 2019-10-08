function makeArrayConsecutive2(statues) {
    statues.sort((a, b) => a - b);
    console.log(statues);

    if(statues.length >= 2) {

        let newArrayList = Array();
        for(let i = 1; i < statues.length; i++) {
            newArrayList.push(statues[i] - statues[i - 1] - 1);
        }
        console.log(newArrayList);
        const reducerToOneValue = (accumulator, currentValue) => accumulator + currentValue;
        console.log(newArrayList.reduce(reducerToOneValue));
    }
    else {
        console.log(1);
    }
    
}

makeArrayConsecutive2([2,9]);