
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
sortLetters("ThoMAs")
sortLetters("doPzbAb")

// 02 - XOXO

const countEach = (stringXO) => {
    stringXOEqual= stringXO.toLowerCase()
    const stringXOArray = stringXOEqual.split("")
    const ArrayX = []
    const ArrayO = []
    let errors = false
    for (j=0; j < stringXOArray.length;j++){
        if (stringXOArray[j]=== "x"){
            ArrayX.push(stringXOArray[j])
        }else if (stringXOArray[j] === "o"){
            ArrayO.push(stringXOArray[j])
        }else{
            errors = true
        }
    }
    if (errors){
        console.log("Only 'x' and 'o' accepted");
    }else if (ArrayX.length === ArrayO.length){
        console.log("true");
    }else{
        console.log("false");
    }

}

countEach("xoXoXO")
countEach("journal")
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

// 04 - Swap

const swap = (stringSwap) => {
    const arraySwap = stringSwap.split("")
    for (i=0; i < arraySwap.length;i++){
        if (arraySwap[i] === arraySwap[i].toUpperCase()){
            arraySwap[i] = arraySwap[i].toLowerCase()
        }else {
            arraySwap[i] = arraySwap[i].toUpperCase()
        }
    }
    const stringSwapinverse = arraySwap.join("")
    console.log(stringSwapinverse);
}

swap ("Hello World")

// 05 - Sponge bob

const makeItSpongeBob = (stringAlt) =>{
    const arrayAlt = stringAlt.split("")
    for (i=0; i < arrayAlt.length; i += 2){
        arrayAlt[i] = arrayAlt[i].toUpperCase()
    }
    for (i=1; i< arrayAlt.length; i += 2){
        arrayAlt[i] = arrayAlt[i].toLowerCase()
    }
    const stringAlterne = arrayAlt.join("")
    console.log(stringAlterne);
}

makeItSpongeBob("Javascript is easy")