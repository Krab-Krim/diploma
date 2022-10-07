const {Schema, model} = require("mongoose");

const schema = new Schema({
    first: {type: String},
    second: {type: String},
}, {
    timestamps: true
});

module.exports = model("Banner", schema);
