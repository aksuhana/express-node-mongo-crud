/**
 * Express Node Framework (4.16.1)
 *
 * @category   Controller
 * @package    express
 */

const User = require('../models/user.model.js');


/**
 * Create and Save User 
 */
exports.create = (req, res) => {
    //Validate Request
    console.log(req.body.content);
    if (!req.body) {
        return res.status(400).send({
            message: "User content cannot be empty"
        });
    }

    // Create a User
    const user = new User({
        first_name: req.body.first_name || "Dummy User",
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        is_user_verified: 0,
        is_phone_verified: 0,
        is_email_verified: 0

    });
    //Save user into db 
    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong, unable to save user"
            });
        });
};
/**
 * Get All User
 */
exports.getAll = (req, res) => {

    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some Error has been occurred"
            });
        });
};
/**
 * Find One user with Id
 */
exports.findOne = (req, res) => {
    console.log(req);

    User.findById(req.params.id).then(user => {

        // console.log(user);

        if (!user) {
            return res.status(404).send({
                message: "User not found with " + req.params.id
            });
        }
        res.send(user);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Internal server error"
        });
    });
}
/**
 * Update User
 */
exports.updateUser = (req, res) => {

    if (!req.body) {
        return res.status(404).send({
            message: "Note content can not be empty"
        });
    }
    User.findByIdAndUpdate(req.params.id, {

        first_name: req.body.first_name || "Dummy User",
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        is_user_verified: 0,
        is_phone_verified: 0,
        is_email_verified: 0
    }, {
        new: true
    }).
    then(user => {
        if (!user) {
            return res.status(404).send({
                message: "User not found"
            });
        }
        res.send(user);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Internal server error"
        });
    });

}
/**
 * Delete User
 */
exports.deleteUser = (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(user => {

            if (!user) {
                return res.status(404).send({
                    message: "Id not found"
                });
            }
            res.send({
                message: "User Deleted successfully"
            });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Internal server error"
            });
        });


}