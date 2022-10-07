const {Schema, model} = require("mongoose");

const schema = new Schema({
    title: {type: String},
    subtitle: {type: String},
    img: {type: String},
    p1: {type: String},
    p2: {type: String},
    p3: {type: String},
}, {
    timestamps: true
});

module.exports = model("Blog", schema);
