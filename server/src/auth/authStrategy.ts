import UserBusiness from "../managers/UserBusiness";
import bcrypt = require("bcrypt");
require("dotenv").config();

export const authStrategy = async (
	username: string,
	password: string,
	done: any
) => {
	try {
		let userManager = new UserBusiness();
		const hashPwd = "1234"; //await bcrypt.hash(password, process.env.SALT_ROUND);
		const userToLogin = await userManager.find({
			name: username,
			password: hashPwd,
		})[0];

		if (!userToLogin) {
			return done(null, false, { message: "User not found." });
		}

		if (userToLogin.password != hashPwd) {
			return done(null, false, {
				message: "Invalid password.",
			});
		}
		return done(null, userToLogin);
	} catch (error) {
		return done(error);
	}
};

export const authStrategy2 = async (
	username: string,
	password: string,
	done: any
) => {
	console.log("************************************************");
	if (username === "belka" && password === "1234") {
		return done(null, { username: "belka" });
	} else {
		return done(null, false);
	}
};
