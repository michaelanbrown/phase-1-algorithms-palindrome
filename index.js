function isPalindrome(word) {
  let reversedArray = [];
  let wordArray = word.split('');
  for (let i = word.length-1; i >= 0; i--) {
    reversedArray.push(word[i])
  }
  let reversedWord = reversedArray.join('')
  if (reversedWord === word) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  If the given word is the same as the word in reverse, return true

  If the input is the same as the reverse
    return true
  else
    return false
*/

/*
Create an array from the input string
Reverse the array
Create a string from the reversed array
Return the reversed string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}