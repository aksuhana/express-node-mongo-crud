/**
 * Express Node Framework (4.16.1)
 *
 * @category   Application root setup (Index)
 * @package    express
 */

const express = require('express');
const bodyParser = require('body-parser');

/** 
 * Server Root call definition.
 *
 * @author Anil Kumar <anil.kumar>
 */


/**
 * Creating express app
 * 
 */
const app = express();

/**
 * parsing requests of content-type - application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({
    extended: true
}))
/**
 * parsing requests of content-type - application/json 
 */
app.use(bodyParser.json())

/**
 * Configuring Database
 */
const dbDetails = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(dbDetails.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected successfully");
}).catch(err => {
    console.log("Unable to connect to the database...application exit...", err);
    process.exit();
});





/**
 * Simple route definition
 */

app.get('/', (req, res) => {
    res.json({
        "message": "Welcome to express Node Mongoose CRUD Application"
    });
});

/**
 * Port Listening for request
 */
require('./app/routes/user.routes.js')(app);
app.listen(9091, () => {
    console.log("Server port with 9091");
})