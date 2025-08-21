// string palidrome do while  
function isPalindromeStr(input) {
  // normalize: lowercase + remove non-alphanumerics
  const s = String(input).toLowerCase().replace(/[^a-z0-9]/g, "");
  if (s.length <= 1) return true;

  let i = 0, j = s.length - 1;
  let ok = true;

  do {
    if (s[i] !== s[j]) ok = false;
    i++;
    j--;
  } while (ok && i < j);

  return ok;
}

// Demo
console.log(isPalindromeStr("racecar"));                        // true
console.log(isPalindromeStr("A man, a plan, a canal: Panama")); // true
console.log(isPalindromeStr("hello"));                          // false
console.log(isPalindromeStr(""));                               // true
//  number palidrome
function isPalindromeNum(n) {
  if (!Number.isFinite(n) || n < 0) return false; // treat negatives as non-palindrome
  let original = Math.trunc(n);
  let temp = original;
  let rev = 0;

  // Build reverse number
  do {
    const digit = temp % 10;
    rev = rev * 10 + digit;
    temp = Math.trunc(temp / 10);
  } while (temp > 0);

  return rev === original;
}

// Demo
console.log(isPalindromeNum(121));  // true
console.log(isPalindromeNum(123));  // false
console.log(isPalindromeNum(10));   // false
console.log(isPalindromeNum(0));    // true
