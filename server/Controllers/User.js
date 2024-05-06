require("dotenv").config();
const UserModel = require("../Models/User");
const jwt = require("jsonwebtoken");
const KEY = process.env.KEY;

// This is the Signup API
const UserSignup = async (req, res) => {
    const payload = req.body;
    const data = new UserModel(payload);
    
    try {
        let result = await data.save();
        result = result.toObject();
        delete result.password;

        jwt.sign({ result }, KEY, { expiresIn: '2h' }, (err, token) => {
            if (err) {
                res.status(500).send("Something went wrong, please try again...");
            } else {
                res.status(200).send({ result, auth: token });
            }
        });
    } catch (error) {
        res.status(500).send("Something went wrong, please try again...");
    }
};


// This is User Login Api

const UserLogin = async (req, res) => {
    if (req.body.email && req.body.password) {
        let user = await UserModel.findOne(req.body).select("-password");
        if (user) {
            jwt.sign({ user }, KEY, { expiresIn: '2h' }, (err, token) => {
                if (err) {
                    res.send("Somthing went wrong please try again....");
                }
                res.send({ user, auth: token });
            })
        } else {
            res.send({ result: "User Not Found" })
        }
    } else {
        res.send({ result: "User Not Found" })
    }

}

module.exports = { UserSignup, UserLogin };