import passport = require("passport");
import { BasicStrategy } from "passport-http";
import { authStrategy2 } from "../auth/authStrategy";
import { authenticationMiddleware } from "../auth/middlewares";
import UserBusiness from "../managers/UserBusiness";

var express = require("express");

var authRouter = express.Router();

passport.serializeUser(function (user: any, done) {
	done(null, user.username);
});
passport.deserializeUser((username, done) => {
	done(null, { username: username });
});

passport.use(new BasicStrategy(authStrategy2));

authRouter.get("/me", authenticationMiddleware, function (req, res) {
	res.status(200).json(req.user);
});

authRouter.post(
	"/login",
	passport.authenticate("basic", { session: false }),
	function (req, res) {
		console.log(req.user);
		res.status(200).json(req.user);
	}
);

authRouter.post("/register", async (req, res) => {
	let userMgr = new UserBusiness();
	const result = await userMgr.create(req.body);
	res.status(200).json(result);
});

export default authRouter;
