var fs=require('fs');
fs.unlick('mynewfile.txt','This is my text',function(err){
    if(err) throw err;
    console.log('replaced')
})