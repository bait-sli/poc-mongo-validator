var express = require('express');
import helmet = require("helmet");
import userRouter from "./services/userService";
require('dotenv').config();

export default class App {
    public app: any;
    protected port: string;
    private static instance: App;

    constructor(){
        this.port = process.env.LISTENING_PORT;
        this.app = express();
        this.serverContextUse();
        this.initializeRouter();
    }

    public static GetInstance(): App {
        if(!App.instance)
            App.instance = new App();
        return App.instance;
    }

    private serverContextUse() {
        this.app.use(express.json());
        this.app.use(helmet())
    }

    private initializeRouter() {
        this.app.use('/user', userRouter);
    }

    public listen() {
        this.app.listen(this.port, () => {
          console.log(`App is listening on the port ${this.port}`);
        });
    }
}