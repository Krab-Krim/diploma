const express = require("express");
const TotalPrice = require("../models/TotalPrice");
const router = express.Router({mergeParams: true});

router.get("/", async (req, res) => {
    try {
        const list = await TotalPrice.find();
        res.status(200).send(list);
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const newComment = await TotalPrice.create({...req.body});
        res.status(201).send(newComment);
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    };
});

router.patch("/:totalId", async (req, res) => {
    try {
        const { totalId } = req.params;

        if (totalId === req.totalPrice._id) {
            const updatedUser = await TotalPrice.findByIdAndUpdate(totalId, req.body, {new: true});
            res.send(updatedUser);
        }
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    };
});

module.exports = router;
