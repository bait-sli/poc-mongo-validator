import express = require("express");
import { Express } from "express-serve-static-core";
import session = require("express-session");
import passport = require("passport");
import helmet = require("helmet");
require("dotenv").config();
import { connect } from "mongoose";
import userRouter from "./controllers/user.controller";
import authRouter from "./controllers/auth.controller";

export default class App {
	public app: Express;
	protected port: string;
	private static instance: App;

	constructor() {
		this.port = process.env.LISTENING_PORT;
		this.app = express();
	}

	public static GetInstance(): App {
		if (!App.instance) App.instance = new App();
		return App.instance;
	}

	private initServerContext() {
		this.app
			.use(express.json())
			.use(helmet())
			.use(passport.initialize())
			.use(passport.session());
	}

	private initRouter() {
		this.app.use("/", authRouter);
		this.app.use("/user", userRouter);
	}

	private async initDatabase() {
		try {
			await connect(process.env.MONGO_URI);
		} catch (error) {
			console.error(error);
		}
	}

	public bootstrap() {
		this.initServerContext();
		this.initDatabase();
		this.initRouter();
		this.app.listen(this.port, () => {
			console.log(`App is listening on the port ${this.port}`);
		});
	}
}
