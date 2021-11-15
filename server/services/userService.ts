import UserBusiness from "../business/UserBusiness";

var express = require("express");

var userRouter = express.Router();

userRouter.get("/", async(req, res) => {
	const filter = {};
	let userMgr = new UserBusiness;
	const results = await userMgr.find(filter);
	res.status(200).json(results);
});

userRouter.post("/", async(req, res) => {
	let userMgr = new UserBusiness;
	const result = await userMgr.create(req.body);
	res.status(200).json(result);
});

userRouter.put("/", async(req, res) => {
	let userMgr = new UserBusiness;
	const result = await userMgr.update(req.body);
	res.status(200).json(result);
});

export default userRouter;
