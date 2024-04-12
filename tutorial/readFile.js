const fs = require('fs');

fs.readFile('example2.txt','utf8', (err, data) => { 
    if (err) console.log(err);                        
    console.log(data);                                 
  })