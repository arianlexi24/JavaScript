function reverseInParentheses(inputString) {

  let indexOfClosedPFromZero = inputString.indexOf(")", 0);
  
  while (indexOfClosedPFromZero != -1) {
    let x = indexOfClosedPFromZero;
    let a = inputString.lastIndexOf('(', indexOfClosedPFromZero);
    let b = inputString.slice(a + 1, indexOfClosedPFromZero).split("").reverse().join("");
    let s = s.slice(0, a) + b + s.slice(indexOfClosedPFromZero + 1);
  }
return inputString;
}