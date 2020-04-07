/**
 * Express Node Framework (4.16.1)
 *
 * @category   DB Model
 * @package    express
 */

/** 
 * User model definition 
 *
 * @author Anil Kumar <anil.kumar>
 */

const userModel = require('mongoose');
const userSchema = userModel.Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    is_user_verified: Boolean,
    is_email_verified: Boolean,
    is_phone_verfified: Boolean

}, {
    timestamps: true
});
module.exports = userModel.model('user', userSchema);