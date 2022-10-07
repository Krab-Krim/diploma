const express = require("express");
const Popularity = require("../models/Popularity");
const router = express.Router({mergeParams: true});

router.get("/", async (req, res) => {
    try {
        const list = await Popularity.find();
        res.status(200).send(list);
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    }
});

router.delete("/:popularityId", async (req, res) => {
    try {
        const { popularityId } = req.params;
        const removePopular = await Popularity.findById(popularityId);
        await removePopular.remove();
        return res.send(null);
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    };
});

router.post("/", async (req, res) => {
    try {
        const newComment = await Popularity.create({...req.body});
        res.status(201).send(newComment);
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    };
});

router.patch("/:popularityId", async (req, res) => {
    try {
        const {popularityId} = req.params;
        console.log("req", req)

        const updatedUser = await Popularity.findByIdAndUpdate(popularityId, req.body, {new: true});
        res.send(updatedUser);
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    };
});

module.exports = router;
