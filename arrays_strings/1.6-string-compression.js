// 1.6: String Compression
// input: 'aabcccccaaa' => output: 'a2b1c5a3'
// if 'compressed' string would not become smaller than the original string, 
// the method should return the original string.

function stringCompression(str) {
    let charCount = 1;
    let prevChar = str[0];
    let compressedArr = [];

    for (let i = 1; i < str.length; i++) {
        if (str[i] !== prevChar) {
            compressedArr.push(`${prevChar}${charCount}`);
            prevChar = str[i];
            charCount = 1;
        } else {
            charCount++;
        }
    }
    compressedArr.push(`${prevChar}${charCount}`);
    compressedArr = compressedArr.join('');
    
    return str.length > compressedArr.length ? compressedArr : str;
}