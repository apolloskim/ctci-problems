// 1.5: one-away: There are three types of edits that can be performed on strings: 
// a) insert a character
// b) remove a character
// c) replace a character
// Given two strings, write a function to check if they are one edit (or zero edits) away.

function oneAway(str1, str2) {
    if (str1.length - str2.length > 1 || str2.length - str1.length > 1) {
        return false;
    } 

    if (str1.length === str2.length) {
        let charDiff = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                charDiff++;
            }

            if (charDiff > 1) {
                return false;
            }
        }
    } else {
        let max;
        let min;

        if (str1.length > str2.length) {
            max = str1;
            min = str2;
        } else {
            max = str2;
            min = str1;
        }

        let i = 0;
        let j = 0;
        let charDiff = 0;

        while (i < max.length && j < min.length) {
            if (max[i] !== min[j]) {
                charDiff++;
                j--;
            }

            if (charDiff > 1) {
                return false;
            }

            i++;
            j++;
        }
    }

    return true;
}