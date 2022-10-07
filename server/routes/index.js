const express = require("express");
const router = express.Router({mergeParams: true});

router.use("/auth", require("./auth.routes"));
router.use("/comment", require("./comment.routes"));
router.use("/profession", require("./profession.routes"));
router.use("/quality", require("./quality.routes"));
router.use("/user", require("./user.routes"));
router.use("/banner", require("./banner.routes"));
router.use("/cards", require("./cards.routes"));
router.use("/cardsBanner", require("./cardsBanner.routes"));
router.use("/popularity", require("./popularity.routes"));
router.use("/blog", require("./blog.routes"));
router.use("/catalogCardImg", require("./catalogCardImg.routes"));
router.use("/catalogTitle", require("./catalogTitle.routes"));
router.use("/basket", require("./basket.routes"));
router.use("/totalPrice", require("./totalPrice.routes"));
router.use("/feedback", require("./feedback.routes"));
router.use("/catalogTitleImg", require("./catalogTitleImg.routes"));

module.exports = router;
