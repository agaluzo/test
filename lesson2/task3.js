const fs = require('fs');
let array = [];
const folderPath = './folder';
const jsonPath = './result.json'

function folderListener (folderPath, jsonPath) {

const emitter = fs.watch(folderPath, {recursive :true},(eventType, filename) => {
if(filename.endsWith(".csv")) {
    console.log(`event type is: ${eventType}`);

    if (filename) {
        let obj ={};
        obj.file =  new Date().toLocaleTimeString() + ": " + filename;
        obj.event =  "event type is:" + eventType;
        array.push({event: obj});
        let json = JSON.stringify(array);
        fs.writeFileSync(jsonPath,json);
        console.log(new Date().toLocaleTimeString() + `: filename provided: ${filename}`);
    }
}
});

}


folderListener (folderPath, jsonPath);