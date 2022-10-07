const {Schema, model} = require("mongoose");

const schema = new Schema({
    sum: {type: Number},
    price: {type: Number},
    amount: {type: Number}
}, {
    timestamps: true
});

module.exports = model("TotalPrice", schema);
