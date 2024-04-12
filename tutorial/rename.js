const fs = require('fs');

fs.rename('example1.txt','example2.txt',function (err) {

    if (err) throw err;
  
    console.log('Dosya adı başarıyla değiştirildi.');
  
  });