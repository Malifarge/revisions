
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
