const a = [1, 2, 7];
const b = [3, 4, 5];

function sameElementsNaive(a, b) {
    // Loop for a 
    for(let i = 0; i < a.length; i++) { 
          
        // Loop for b 
        for(let j = 0; j < b.length; j++) { 
              
            // Compare the element of each and 
            // every element from both of the 
            // arrays 
            if(a[i] === b[j]) { 
              
                // Return if common element found 
                console.log("Oui");
                return true; 
            } 
        } 
    } 
      
    // Return if no common element exist 
    console.log("Non");
    return false;  

}

sameElementsNaive(a, b);
