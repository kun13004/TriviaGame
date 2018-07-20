///////////////////////////////////////////////////////////////////////////////////////////////
///                                                                                         ///
///                                     Query Methods                                       ///
///                                                                                         ///
///////////////////////////////////////////////////////////////////////////////////////////////
const sql = require('mysql');

const connectionInfo = {
    host: 'sql3.freemysqlhosting.net',
    port: '3306',
    user: 'sql3248351',
    password: 'i9kmYUcain',
    database: 'sql3248351'
}
var con = sql.createConnection(connectionInfo);

/**
 * Query the database for the questions for the next quiz.
 * @param {*} callback
 */
module.exports.getQuestions = function(callback){
    con.query('SELECT * FROM Question WHERE Use_In_Next_Quiz = true order by difficulty asc;', function(error, results, fields){
        if(error !== undefined && error !== null){
            console.trace('Error occured in query.js: getQuestions.');
        }
        return callback(error, results, fields);
    })
}

/**
 * Query the database for the database for the answers for a question.
 * @param {*} callback
 * @param {*} questionId
 */
module.exports.getAnswersById = function(questionId, callback){
    con.query('SELECT * FROM Answer WHERE fk_question_id = ?;',[questionId], function(error, results, fields){
        if(error !== undefined && error !== null){
            console.trace('Error occured in query.js: getAnswersById.');
        }
        return callback(error, results, fields);
    })
}

/**
 * Query the database for player information.
 * @param {*} id
 * @param {*} callback
 */
module.exports.getPlayerInfo = function(id, callback){
    con.query('SELECT * FROM Player WHERE Eagle_ID = ?',[id], function(error, results, fields){
        if(error !== undefined && error !== null){
            console.trace('Error occured in query.js: getPlayerInfo.');
        }
        return callback(error, results, fields);
    })
}

/**
 * Query the database for products and categories.
 * @param {*} callback
 */
module.exports.getProductsByCategory = function(callback){
    con.query('SELECT * FROM Product join Category on Category.id = Product.fk_category_id;',
    function(error, results, fields){
        if(error !== undefined && error !== null){
            console.trace('Error occured in query.js: getProductsByCategory.');
        }
        return callback(error, results, fields);
    })
}

/**
 * Insert into the database the player's answer to a question.
 * @param {*} obj
 * @param {*} callback
 */
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
