import mongoose, { Schema } from "mongoose";

export const TodoSchema: Schema = new Schema({
  text: { type: String, required: true },
});

export default mongoose.model("TodoSchema", TodoSchema);

// export default class Todo {
//     constructor(public id: string, public text: string) { }

// }
