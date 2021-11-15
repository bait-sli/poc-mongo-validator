var express = require("express");
import helmet = require("helmet");
import userRouter from "./services/userService";
import { connect } from 'mongoose';
require("dotenv").config();

export default class App {
	public app: any;
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

	private serverContextUse() {
		this.app.use(express.json());
		this.app.use(helmet());
	}

	private initializeRouter() {
		this.app.use("/user", userRouter);
	}

	private async createDbConnextion(){
		try {
			await connect(process.env.MONGO_URI)
		} catch (error) {
			console.error(error)
		}
	}

	public run() {
		this.serverContextUse();
		this.initializeRouter();
		this.createDbConnextion();
		this.app.listen(this.port, () => {
			console.log(`App is listening on the port ${this.port}`);
		});
	}
}
