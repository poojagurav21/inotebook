const mongoose = require('mongoose');
const mongooseURI = 'mongodb://127.0.0.1:27017/inotebookdb';
 
function getconnection() {
    mongoose.connect(mongooseURI).
        then((data) => { console.log(`Connected to Mongoose successfully `) })
        .catch((err) => { console.log(err) })
}
 
module.exports = getconnection