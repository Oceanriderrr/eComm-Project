const jwt = require("./jwt");
const config = require("../config/config");
const models = require("../models");

module.exports = (redirectAuthenticated = true) => {
	return function (req, res, next) {
		//console.log(req.headers.authorization);
		let token = "";
		if (req.headers.authorization) {
			token = req.headers.authorization.split(" ")[1];
		} else if (req.cookies[config.authCookieName]) {
			token = req.cookies[config.authCookieName];
		}
		//console.log(token);
		Promise.all([
			jwt.verifyToken(token),
			models.TokenBlacklist.findOne({ token }),
		])
			.then(([data, blacklistToken]) => {
				if (blacklistToken) {
					return Promise.reject(new Error("blacklisted token"));
				}

				models.User.findById(data.id).then((user) => {
					req.user = user;
					next();
				});
			})
			.catch((err) => {
				if (!redirectAuthenticated) {
					next();
					return;
				}

				if (
					[
						"token expired",
						"blacklisted token",
						"jwt must be provided",
					].includes(err.message)
				) {
					console.log(err.message);
					res.status(401).send("UNAUTHORIZED!");
					return;
				}

				next(err);
			});
	};
};




// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// const expressJwt = require('express-jwt');

// const {errorHandler} = require('../helpers/dbErrorHandlers.js');

// exports.signup = (req, res) => {
//     console.log("req.body", req.body);
//     const user = new User(req.body);
//     user.save((err, user) => {
//         if(err) {
//             return res.status(400).json({
//                 err: errorHandler(err)
//             })
//         }
//         user.salt = undefined
//         user.hashedPassword = undefined
//         res.json({
//             user
//         });
//     });
// };

// exports.signin = (req, res) => {
//     //Find the user based on email
//     const {email, password} = req.body
//     User.findOne({email}, (err, user) => {
//         if(err || !user) {
//             return res.status(400).json({
//                 error: 'User with that email does not exist. Please signup'
//             })
//         }
//         //If user is found make sure that email and password match
//         //Create Authenticate method in user model

//         if(!user.authenticate(password)) {
//             return res.status(401).json({
//                 error: "Email and password don't match"
//             })
//         }

//         //Generate a signed token with User Id and Secret
//         const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
//         //Presist the token as 't' in cookie with expiry date
//         res.cookie('t', token, {expire: new Date() + 9999})
//         //Return Response with User and Token to Frontend Client
//         const {_id, name, email, role} = user
//         return res.json({token, user: {_id, email, name, role } });
//     });  
// };

// exports.signout = (req, res) => {
//     res.clearCookie('t');
//     res.json({message: "Signout Success"});
// };

// exports.requireSignin = expressJwt({
//     secret: process.env.JWT_SECRET,
//     algorithms: ["HS256"],
//     userProperty: "auth"
// });

// exports.isAuth = (req, res, next) => {
//     let user = req.profile && req.auth && req.profile._id == req.auth._id
//     if(!user) {
//         return res.status(403).json({
//             error: "Access Denied"
//         });
//     }
//     next();
// };

// exports.isAdmin = (req, res, next) =>{
//     if(req.profile.role === 0) {
//         return res.status(403).json({
//             error: "Admin Resources! Access Denied"
//         });
//     }
//     next();
// };