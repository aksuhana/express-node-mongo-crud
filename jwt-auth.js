/**
 * Express Node Framework (4.16.1)
 *
 * @category   Middleware
 * @package    express
 */

/** 
 * Mongoose connection setup 
 *
 * @author Anil Kumar <anil.kumar>
 */


const jwt = require('jsonwebtoken');
const accessTokenSecret = 'some-secret-token';
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};