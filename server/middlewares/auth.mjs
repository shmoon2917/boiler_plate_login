import User from "../models/User.mjs";

const auth = async (req, res, next) => {
  // 인증 처리하는 곳

  // 클라이언트 쿠키에서 토큰을 가져온다.
  const token = req.headers["x-access-token"];

  // 토큰을 복호화한 후, 유저를 찾는다.
  try {
    const user = await User.findByToken(token);

    if (!user) {
      return res.json({
        status: "ok",
        data: {
          isAuth: false,
          user: null,
        },
        message: "인증이 실패하였습니다",
        error: "",
      });
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    return res.status(500).json({
      status: "error",
      data: {},
      message: "서버에 문제가 발생했습니다",
      error: "",
    });
  }
};

export default auth;
