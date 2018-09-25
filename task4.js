
function validate(path) {
    let fs = require('fs');
    let json = fs.readFileSync(path);
    let obj = JSON.parse(json);
    let errors = [];

    for (let key in obj) {
        try {
            switch (true) {

                case (key === 'flag') : {
                    if (typeof(obj[key]) != "boolean") {
                        errors.push(key + " value is not boolean - " + obj[key]);
                    }
                    break;
                }

                case (key === 'myPromises') : {
                    if (!Array.isArray(obj[key])) {
                        errors.push(key + " value is not array - " + obj[key]);
                    }
                    break;
                }

                case (key === 'element') : {
                    if (typeof(obj[key]) != "object" || isNull(obj[key]) || Array.isArray(obj[key])) {
                        errors.push(key + " value is not object - " + obj[key]);
                    }
                    break;
                }

                case (key === 'screenshot') : {
                    if (!(isNull(obj[key]))) {
                        errors.push(key + " value is not null - " + obj[key]);
                    }
                    break;
                }
                case (key === 'elementText') : {
                    if (typeof(obj[key]) != "string") {
                        errors.push(key + " value is not string - " + obj[key]);
                    }
                    break;
                }
                case (key === 'allElementsText') : {
                    if (!(obj[key]).includes("const") && !(typeof (obj[key]) != "string")) {
                        errors.push(key + " value doesn't contain 'const' or not string - " + obj[key]);
                    }
                    break;
                }
                case (key === 'counter') : {
                    if (obj[key] <= 10) {
                        errors.push(key + " value less or equal 10' - " + obj[key]);
                    }
                    break;
                }
                case (key === 'config') : {
                    if (!(obj[key] === "Common")) {
                        errors.push(key + " value is not equal 'Common' - " + obj[key]);
                    }
                    break;
                }
                case (key === 'const') : {
                    if (!(obj[key].toLowerCase() === "first")) {
                        errors.push(key + " value is not equal 'first' - " + obj[key]);
                    }
                    break;
                }
                case (key === 'parameters') : {
                    if (!Array.isArray(obj[key]) || obj[key].length != 8) {
                        errors.push(key + " value is not array or  length != 8' - " + obj[key]);
                    }
                    break;
                }
                case (key === 'description') : {
                    if (typeof(obj[key]) != "string" || 5 <= obj[key].length <= 13) {
                        errors.push(key + " value is not string or  length not in [5;13]' - " + obj[key]);
                    }
                    break;
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    if (errors.length === 0) {
        console.log("JSON is valid");
        return;

    } else {
        let file = fs.createWriteStream('./results.txt');
        file.on('error', function (err) {
            console.log(err);
        });
        errors.forEach(function (v) {
            file.write(v.replace(', ') + '\n');
        });
        file.end();
        console.log("view results in file 'results.txt'");
    }

}

function isNull(item) {
    return item === null;
}

validate("./files/1.json");