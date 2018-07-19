const expressPackage = require("express");
const app = expressPackage();

var query = require('./query');
var logic = require('./logic');

//GET METHODS
app.get('/getQuestions', function(req, res){
    query.getQuestions(function(error, results, fields){
        if(error) {
            res.status(400).send();
        }else{
            res.status(200).send(results);
        }
    })
})

app.get('/getProductsByCategory', function(req, res){
    query.getProductsByCategory(function(error, results, fields){
        if(error) {
            res.status(400).send();
        }else{
            logic.parseProductData(results, function(data){
                res.status(200).send(data);
            })
        }
    })
})

app.get('/getPlayerInfo', function(req, res){
    var playerID = (req.query.eagleId)? req.query.eagleId : null;

    if(playerID !== null){
        query.getPlayerInfo(playerID, function(error, results, fields){
            if(error) {
                res.status(400).send();
            }else{
                res.status(200).send(results[0]);
            }
        })
    } else{
        res.status(400).send();
    } 
})

//POST METHODS
app.post('/postPlayerAnswer', function(req, res){
    var postData = '';
    req.on('data', function(piece){
        postData += piece;
    })
    req.on('end', function(){
        postData = JSON.parse(postData);
        console.log(postData);
        console.log(postData.fk_quiz_history_id);
       query.postPlayerAnswers(postData, function(error, results, fields){

        console.log(results);
            if(error !== undefined && error !== null) {
                res.status(400).send();
            }else{
                res.status(200).send();
            }
        })
        res.status(200).send('worked');
    })
})

//ERROR GET
app.get('*/*', function(req, res){
    res.status(403).send();
})

app.listen(3000, function(){
    console.log('Listening on port 3000');
})
