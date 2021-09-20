var express=require('express');
var cors = require('cors');

var dictionaryService = require('./dictionary-service.js')

var port=5000;
var app=express()

app.use(cors({
    origin:'*'
}));

app.get('/',function(req,res){
    dictionaryService.findDefinitionByWord(req.query.word,(err,data)=>{
        if(err){
            console.log(err);
            res.send([]);
        }
        else{
            res.send(data);
        }
    });

})

app.listen(port,function(){
  console.log(`server started at ${port}`);
});