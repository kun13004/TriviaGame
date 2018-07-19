const sql = require('mysql');

const connectionInfo = {
    host: 'sql3.freemysqlhosting.net',
    port: '3306',
    user: 'sql3248351',
    password: 'i9kmYUcain',
    database: 'sql3248351'
}
var con = sql.createConnection(connectionInfo);

module.exports.getQuestions = function(callback){
    con.query('SELECT * FROM Question WHERE Use_In_Next_Quiz = true;', function(error, results, fields){
        if(error !== undefined && error !== null){
            console.trace('Error occured in query.js: getQuestions.');
        }
        return callback(error, results, fields);
    })
}

module.exports.getPlayerInfo = function(id, callback){
    con.query('SELECT * FROM Player WHERE Eagle_ID = ?',[id], function(error, results, fields){
        if(error !== undefined && error !== null){
            console.trace('Error occured in query.js: getPlayerInfo.');
        }
        return callback(error, results, fields);
    })
}

module.exports.getProductsByCategory = function(callback){
    con.query('SELECT * FROM Product join Category on Category.id = Product.fk_category_id;', 
    function(error, results, fields){
        if(error !== undefined && error !== null){
            console.trace('Error occured in query.js: getProductsByCategory.');
        }
        return callback(error, results, fields);
    })
}

module.exports.postPlayerAnswers = function(obj, callback){
    var queryString = 'INSERT INTO Player_History (fk_quiz_history_id, fk_player_id, fk_player_answer_id) VALUES('+ 
    obj.fk_quiz_history_id +','+ obj.fk_player_id +','
    + obj.fk_player_answer_id +');';

    console.log(queryString);

    con.query(queryString, function(error, results, fields){
        if(error !== undefined && error !== null){
            console.trace('Error occured in query.js: postPlayerAnswers.');
        }
        return callback(error, results, fields);
    })
}