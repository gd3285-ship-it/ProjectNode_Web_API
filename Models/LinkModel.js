import mongoose from "mongoose";

const clickSchema = mongoose.Schema({
    ipAddress: String,
    insertedAt: { type: Date, default: Date.now },
    // הנה השורה שצריך להוסיף כאן:
    targetParamValue: String 
});

const linkSchema = mongoose.Schema({
    originalUrl: { type: String, required: true },
    clicks: [clickSchema]
});

export default mongoose.model("Link", linkSchema);