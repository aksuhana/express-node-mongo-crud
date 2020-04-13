/**
 * Express Node Framework (4.16.1)
 *
 * @category   Routes
 * @package    express
 */

/** 
 * Mongoose connection setup 
 *
 * @author Anil Kumar <anil.kumar>
 */


module.exports = (app) => {
    const users = require('../controllers/user.controller.js');
    var mw = require('../../jwt-auth');
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader(
            "Access-Control-Allow-Methods",
            "GET,HEAD,OPTIONS,POST,PUT,DELETE"
        );
        next();
    });


    /**
     * Create a new user
     */
    app.post('/users', users.create);
    /**
     * Retrive all users
     */
    //with jwt
    //app.use(mw);
    app.get('/users', users.getAll);
    /**
     * Find Single User
     */
    app.get('/users/:id', users.findOne);
    /**
     * Update Specific User
     */
    app.put('/users/:id', users.updateUser);
    /**
     * Delete Specific User
     */
    app.delete('/users/:id', users.deleteUser);




}