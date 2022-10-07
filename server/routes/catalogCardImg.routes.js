const express = require("express");
const CatalogCardImg = require("../models/CatalogCardImg");
const router = express.Router({mergeParams: true});

router.get("/", async (req, res) => {
    try {
        const list = await CatalogCardImg.find();
        res.status(200).send(list);
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        });
    }
});

module.exports = router;
