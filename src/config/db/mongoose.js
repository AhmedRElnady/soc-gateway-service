const mongoose = require('mongoose');



function connect(dbHost, dbName) {
    
    return new Promise ((resolve, reject) => {
         
        mongoose.connect(`mongodb://localhost/${dbName}`)
            .then((db) => {
                console.log(".... Api-Gateway DB connected successfully ....");
                
                resolve(db);
            })
            .catch((err)=> {
                reject(err);
            })
    });
}


module.exports = {
    connect
};




