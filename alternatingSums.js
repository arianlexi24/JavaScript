function alternatingSum(a) {

    let teamA = 0;
    let teamB = 0;

    for (i = 0; i <= a.length-1; i++) {
        if (i % 2 === 0) {
            teamA += a[i];
        }
        else {
            teamB += a[i];
            
        }  
    }

    console.log(teamA);
    console.log(teamB);
}

alternatingSum([50, 60, 60, 45, 70]);
