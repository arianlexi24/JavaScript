function reverseParentheses(inputString) {
    if (inputString.includes('(')) {
        return reverseParentheses(reverseStr(inputString));
    } 
    else {     
        return inputString;
    }
}
  
function reverseStr(inputString) {
    var regEx = /\(([^()]*)\)/i;
    var subStr = regEx.exec(inputString)[1];
    subStr = subStr.split('').reverse().join('');
    return inputString.replace(regEx, subStr)
}