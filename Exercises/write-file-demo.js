var fs = require('fs');
//var jsonString = '{ "name": "John"}';
var jsonString = {
    name: 'John'
};

fs.writeFile('data2.json', jsonString.name, function (err) {
    if (err) {
        console.log(err);
    }
});