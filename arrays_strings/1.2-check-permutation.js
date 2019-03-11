// 1.2: Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

// Strategy:
// 1. Create a hash, and iterate through the first string, adding it to the hash and updating its frequency.
// 2. iterate through the second string, this time DECREMENTING the frequency value if found in the hash.
// 3. while iterating through the second string if a character is not found in the hash, you can immediately return FALSE.
// 4. if all the values in the hash is zero, then we know that two strings have the same characters and thus, 
//    are permuations of each other.

function  checkPermutation(str1, str2) {

    let freqObj = {};

    for (let i = 0; i < str1.length; i++) {
        if (freqObj[str1[i]]) {
            freqObj[str1[i]]++;
        } else {
            freqObj[str1[i]] = 1;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (freqObj[str2[i]]) {
            freqObj[str2[i]]--;
        } else {
            return false;
        }
    }

    if (Object.values(freqObj).filter(freq => freq > 0).length > 0) {
        return false;
    } else {
        return true;
    }
}