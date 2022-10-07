const express = require("express");
const Basket = require("../models/Basket");
const Popularity = require("../models/Popularity");
const router = express.Router({mergeParams: true});

router.get("/", async (req, res) => {
    try {
        const list = await Basket.find();
        console.log("list", list)
        console.log("Basket", Basket)
        res.status(200).send(list);
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const newComment = await Basket.create({...req.body});
        res.status(201).send(newComment);
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    };
});

router.delete("/:basketId", async (req, res) => {
    try {
        const { basketId } = req.params;
        const removedComment = await Basket.findById(basketId);
        await removedComment.remove();
        return res.send(null);
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    };
});

router.patch("/:basketId", async (req, res) => {
    try {
        const {basketId} = req.params;

        const updatedUser = await Basket.findByIdAndUpdate(basketId, req.body, {new: true});
        res.send(updatedUser);
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    };
});
module.exports = router;
