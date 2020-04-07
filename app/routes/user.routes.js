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


    /**
     * Create a new user
     */
    app.post('/users', users.create);
    /**
     * Retrive all users
     */
    app.get('/users', users.getAll);
    app.get('/users/:id', users.findOne);
    app.put('/users/:id', users.updateUser);
    app.delete('/users/:id', users.deleteUser);

}