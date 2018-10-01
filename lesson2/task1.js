const xl = require('excel4node');
const wb = new xl.Workbook();
const ws = wb.addWorksheet('Sheet 1');
const fileToSave = "./result.xlsx";


function xlsxConverter(path, fileToSave) {

    let fs = require('fs');
    let files = fs.readdirSync(path)
    let jsonFiles = files.filter(file => file.endsWith(".json"));
    let counter = 0;
    let rowIndex = 1;
    let columnIndex = 1;

    jsonFiles.forEach((file) => {
        let json = fs.readFileSync(path + file);
        let obj = JSON.parse(json);
        print(obj, rowIndex, columnIndex, fileToSave);
        let a = getFileLength(obj, counter);
        rowIndex = rowIndex + a;
        console.log ("finish write file " + file );
    })
    console.log ("view results in " + fileToSave );
}

function print(obj, rowIndex, columnIndex, fileToSave) {

    for (let key in obj) {

        if (typeof(obj[key]) != "object") {
            ws.cell(rowIndex, columnIndex).string(key);
            ws.cell(rowIndex, columnIndex + 1).string((obj[key]).toString());
            wb.write(fileToSave);
            rowIndex++;
            rowIndex;
        } else if (obj[key] === null) {
            ws.cell(rowIndex, columnIndex).string(key);
            ws.cell(rowIndex, columnIndex + 1).string("null");
            wb.write(fileToSave);
            rowIndex++;
            rowIndex;
        } else if (Array.isArray(obj[key])) {
            ws.cell(rowIndex, columnIndex).string(key);
            for (let i in obj[key]) {

                columnIndex++;
                rowIndex++;
                print(obj[key][i], rowIndex, columnIndex, fileToSave);
                columnIndex--;
                if (Object.keys(obj[key]).length === 0) {
                    rowIndex++;
                } else {
                    rowIndex = rowIndex + getArrayLength(obj[key][i]);

                }
            }

        } else {
            ws.cell(rowIndex, columnIndex).string(key);
            columnIndex++;
            rowIndex++;
            print(obj[key], rowIndex, columnIndex, fileToSave);
            columnIndex--;
            if (Object.keys(obj[key]).length === 0) {
                rowIndex++;
            } else {
                rowIndex = rowIndex + Object.keys(obj[key]).length;
            }
        }
    }
}

function getArrayLength(arr) {
    let counter = 0
    for (let i in arr) {
        if (typeof(arr[i]) != "object" && !Array.isArray(arr[i])) {
            counter++;
        } else {
            counter = counter + getArrayLength(arr[i]);
        }
    }
    return counter;
}

function getFileLength(json, counter) {
    counter = 0;
    for (let i in json) {
        if (typeof(json[i]) != "object" && !Array.isArray(json[i])) {
            counter++;
        } else {
            counter = counter + getFileLength(json[i], counter) + 1;
        }
    }
    return counter;
}

xlsxConverter("./files/", fileToSave);


