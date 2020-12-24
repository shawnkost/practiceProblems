// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// Example

// For inputString = "(bar)", the output should be
// reverseInParentheses(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// reverseInParentheses(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// reverseInParentheses(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".


//loop over the input string
//keep all characters that aren't in parentheses
//if a word is in parentheses, reverse the order of characters

function reverseInParentheses(str) {
  var res = str;
  var temp = "";

  while(res.indexOf(')') >= 0){
    temp = res.substring(0, res.indexOf(')'));
    temp = temp.substring(temp.lastIndexOf('(')+1).split('').reverse().join('');
    res = res.substring(0, res.substring(0, res.indexOf(')')).lastIndexOf('(')) + temp + res.substring(res.indexOf(')')+1);
  }
  return res;
}
