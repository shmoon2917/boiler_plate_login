import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  role: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre("save", function (next) {
  const user = this;

  // 비밀번호를 암호화 시킨다.
  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = async function (plainPassword) {
  try {
    return await bcrypt.compare(plainPassword, this.password);
  } catch (e) {
    throw e;
  }
};

userSchema.methods.generateToken = async function () {
  const user = this;
  const token = jwt.sign(user._id.toHexString(), "secretToken");
  user.token = token;
  try {
    await user.save();
    return token;
  } catch (e) {
    throw e;
  }
};

userSchema.statics.findByToken = async function (token) {
  const user = this;

  const decoded = jwt.verify(token, "secretToken");

  try {
    return await user.findOne({ _id: decoded, token: token });
  } catch (e) {
    throw e;
  }
};

const User = mongoose.model("User", userSchema);

export default User;
