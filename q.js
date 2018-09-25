function isPal(str, num, replace){
    let newStr = str.split(" ")
    for (let i in newStr) {



        if(newStr[i].length >= num) {
            newStr[i] = newStr[i].substring(0, num-1) + replace + newStr[i].substring(num)

        }
    }

    return newStr.join(" ")
}

console.log(isPal("ffff                 f ff fff fffff        1", 3, "aa"))