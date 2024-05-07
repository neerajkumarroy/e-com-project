require('dotenv').config();
const jwt = require("jsonwebtoken");
const KEY = process.env.KEY;

const veryfitoken = (req, res, next) => {
    let token = req.headers['authorization']
    if (token) {
        token = token.split(' ')[1];
        jwt.verify(token, KEY, (err, valid) => {
            if (err) {
                res.status(403).send({ result: "Please provide valid token" });
            } else {
                next();
            }
        });
    } else {
        // console.warn({ result: "Please add Token with headers" });
        res.status(403).send({ result: "Please add Token with headers" });
    }
};

module.exports = veryfitoken;
