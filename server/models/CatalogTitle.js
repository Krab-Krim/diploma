const {Schema, model} = require("mongoose");

const schema = new Schema({
    url: String,
    title: String,
    img: String
}, {
    timestamps: true
});

module.exports = model("CatalogTitle", schema);
