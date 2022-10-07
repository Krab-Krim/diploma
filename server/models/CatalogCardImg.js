const {Schema, model} = require("mongoose");

const schema = new Schema({
    img: {type: String},
}, {
    timestamps: true
});

module.exports = model("CatalogCardImg", schema);
