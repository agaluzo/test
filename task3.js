function replaceLetter(str, index, replace) {

    let strArray = str.split(" ");
    for (let i in strArray) {
        if (strArray[i].length >= index && index > 0) {
            strArray[i] = strArray[i].substring(0, index - 1) + replace + strArray[i].substring(index);
        }
    }

    return strArray.join(" ");
}

console.log(replaceLetter("ffff                 f ff fff fffff        1", 2, "aa"));