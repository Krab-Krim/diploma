const {Schema, model} = require("mongoose");

const schema = new Schema({
    name: {type: String},
    email: {type: String, require: true, unique: true},
    password: {type: String},
    image: String,
    profession: {type: Schema.Types.ObjectId, ref: "Profession"},
    qualities: [{type: Schema.Types.ObjectId, ref: "Quality"}],
    sex: {type: String, enum: ["male", "female", "other"]}
}, {
    timestamps: true
});

module.exports = model("User", schema);
