const {Schema, model} = require("mongoose");

const schema = new Schema({
    title: {type: String, require: true},
    subtitle: {type: String},
    info: {type: String},
    img: {type: String},
    price: {type: Number, require: true},
    sum: {type: Number},
    size: {type: String},
    color: {type: String},
    type: {type: String},
    imgCard: [{
        imgCard: String
    }]
}, {
    timestamps: true
});

module.exports = model("Popularity", schema);
