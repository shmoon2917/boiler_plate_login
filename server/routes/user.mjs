import express from "express";
import User from "../models/User.mjs";
import auth from "../middlewares/auth.mjs";

const router = express.Router();

//=================================
//              Auth
//=================================

router.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    return res.status(200).json({
      status: "ok",
      data: {
        success: true,
      },
      message: "가입에 성공하였습니다",
      error: "",
    });
  } catch (e) {
    return res.status(400).json({
      status: "error",
      data: {},
      message: "가입에 실패했습니다.",
      error: "",
    });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.json({
        status: "error",
        data: {},
        message: "이메일에 해당하는 유저가 없습니다",
        error: "",
      });
    }

    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) {
      return res.json({
        status: "error",
        data: {},
        message: "비밀번호가 틀렸습니다",
        error: "",
      });
    }

    const token = await user.generateToken();
    const responseObj = {
      status: "ok",
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        roles: user.role,
        accessToken: token,
      },
      message: "로그인하셨습니다",
      error: "",
    };

    res.status(200).json(responseObj);
  } catch (e) {
    return res.status(500).json({
      status: "error",
      data: {},
      message: "서버에 문제가 발생했습니다",
      error: "",
    });
  }
});

router.get("/auth", auth, (req, res) => {
  // 미들웨어를 통과했다면 Authentication 이 True 라는 뜻.

  res.status(200).json({
    status: "ok",
    data: {
      user: req.user,
      isAuth: true,
    },
  });
});

export default router;
