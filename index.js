
// 01 - Alphabet

const sortLetters = (string) => {
    const equalString = string.toUpperCase()
    let charCode = 0
    let arrayString = []

    for (let i = 0; i < equalString.length;i++){
        charCode = equalString.charCodeAt(i)
        arrayString[i] = charCode
    }
    
    triArray=arrayString.sort()
    

    for (let j = 0; j < triArray.length;j++){
        triArray[j] = String.fromCharCode(triArray[j])
    }

    let triString = triArray.join("")
    triString = triString.toLowerCase()

    console.log(triString);
}

sortLetters("konexio")
sortLetters("Thomas")
sortLetters("dopzbab")

// 02 - XOXO

const countEach = (stringXO) => {
    const stringXOArray = stringXO.split("")
    const ArrayX = []
    const ArrayO = []
    for (i=0; i < stringXOArray.length;i++){
        if (stringXOArray[i]=== "x"){
            ArrayX.push(stringXOArray[i])
        }else {
            ArrayO.push(stringXOArray[i])
        }
    }

    if (ArrayX.length === ArrayO.length){
        console.log("true");
    }else{
        console.log("false");
    }

}

countEach("xxxoooox")
countEach("xox")

// 03 - Palindrome

const isPalindrome = (stringPalindrom) => {
    const stringArray = stringPalindrom.split("")
    const inverseArray = stringArray.reverse()
    const inverseString = inverseArray.join("")
    if (inverseString === stringPalindrom){
        console.log("Palindrome !");
    }else {
        console.log("Nope");
    }
}

isPalindrome("racecar")
isPalindrome("laptop")