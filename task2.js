function isPalindrome(str) {
    try {
        let reversedStr = str.split("").reverse().join("");
        if (str === reversedStr) {
            return ("String is Palindrome");
        } else {
            return "String is not Palindrome";
        }
    } catch (error) {
        return "Invalid parameter";
    }
}

let s = '125521';
console.log(isPalindrome(s))
