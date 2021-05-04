const fs = require('fs');
const express = require("express");
const app = express();

app.listen(1234, () => {
    console.log("Application started and Listening on port 1234");
});

try {
    var data = fs.readFileSync('status.txt', 'utf8')
    var arr = data.split("\n\n");
    removeNewLine(arr);
    var newArr = new Array();
    splitArr(arr, newArr);
    //getData(newArr);
    //console.log(newArr);
    // console.table(newArr);
} catch (err) {
    console.error(err)
}


function removeNewLine(arr) {
    var str = arr[arr.length - 1];
    var newStr = str.slice(0, str.length - 1);
    arr.pop();
    arr.push(newStr);
    return arr;
}

function splitArr(arr, newArr) {
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].split(" "));
    }
    return newArr;
}


app.get("/", (req, res) => {
    var html = "<table border='1|1'>";
    for (let i = 0; i < newArr.length; i++) {
         html+="<tr>";
        let innerArrayLength = newArr[i].length;

        for (let j = 0; j < innerArrayLength; j++) {
            html+="<td>"+newArr[i][j]+"</td>"
           // console.log(newArr[i][j]);

            //res.send("<html> <head></head><body><h1>This page<p></p></h1></body></html>");
        }
        html+="</tr>";
    }
    html+="</table>";
    res.send(html);
    res.send(html);
});