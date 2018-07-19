const expressPackage = require("express");
const app = expressPackage();

var query = require('./query');
var logic = require('./logic');
var cors = require('cors');
//Reference: https://stackoverflow.com/questions/7067966/how-to-allow-cors
app.use(cors({'credentials':true, 'origins':true}));

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
        query.postPlayerAnswers(postData, function(error, results, fields){
            if(error !== undefined && error !== null) {
                res.status(400).send();
            }else{
                res.status(200).send();
            }
        })
    })
})

//ERROR GET
app.get('*/*', function(req, res){
    res.status(403).send();
})

app.listen(3001, function(){
    console.log('Listening on port 3001');
})
