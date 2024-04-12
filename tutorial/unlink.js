const fs = require('fs');

fs.unlink('example2.txt',function(err){
    if(err){
        console.log("Dosya silinemedi.");
    }
    else{
        console.log("Dosya silindi.")
    }
    });