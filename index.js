const parse = require('csv-parse')
const fs = require('fs')

const csvData = [];

fs.createReadStream(__dirname + '/diversity_school.csv')
    .pipe(
        parse({
            delimeter: ','
        })
    )
    .on('data', function (dataRow) {
        csvData.push(dataRow);
    })
    .on('end', function () {
        console.log(csvData)
    });