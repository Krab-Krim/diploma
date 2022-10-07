const {Schema, model} = require("mongoose");

const schema = new Schema({
    email: {type: String, require: true},
    content: {type: String},
}, {
    timestamps: true
});

module.exports = model("Feedback", schema);
