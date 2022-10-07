const {Schema, model} = require("mongoose");

const schema = new Schema({
    img: {type: String},
    title: {type: String},
}, {
    timestamps: true
});

module.exports = model("Cards", schema);
