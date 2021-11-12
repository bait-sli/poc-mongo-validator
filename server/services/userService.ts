var express = require("express");

var userRouter = express.Router();

userRouter.get("/", (req, res) => {
    console.log("okok");
    res.status(200).json();
});

userRouter.post("/", (req, res) => {
    console.log(req.body);
    res.status(200).json();
})

userRouter.put("/", (req, res) => {
    console.log(req.body);
    res.status(200).json();
})

export default userRouter