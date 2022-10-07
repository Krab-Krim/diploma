const express = require("express");
const Feedback = require("../models/Feedback");
const router = express.Router({mergeParams: true});

router.post("/", async (req, res) => {
    try {
        const newComment = await Feedback.create({...req.body});
        res.status(201).send(newComment);
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    };
});

module.exports = router;
