const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\w+@\w+.\w{2.3}/, "Invalid email address"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought"
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      }
    ],
  },

  {
    toJSON: {
      virtual: true,
    },
  }
);

userSchema.virtual("friendCount").get(function() {
  return this.friends.length
})

const User = model('user', userSchema);

module.exports = Course;
