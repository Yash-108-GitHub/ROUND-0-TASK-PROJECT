const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    createdBy:{
      type : Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
}
)

module.exports = mongoose.model("Task", taskSchema);