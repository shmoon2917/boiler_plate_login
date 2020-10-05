import React, { useEffect, useRef, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../_helpers/history";
import { auth } from "../_modules/user";

export const AuthRoute = ({
  component: Component,
  forWhom = "user",
  ...rest
}) => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.user.auth.data) || {
    isAuth: false,
    user: null,
  };
  const [NeedRedirect, setNeedRedirect] = useState(false);
  const isFirstRendered = useRef(true);

  useEffect(() => {
    console.log("AuthRoute useEffect 실행");
    getUser();
    // eslint-disable-next-line
  }, [history.location.pathname]);

  useEffect(() => {
    console.log("AuthRoute useEffect2 실행", isFirstRendered.current);
    if (!isFirstRendered.current) {
      authentication();
    } else {
      isFirstRendered.current = false;
    }
  }, [isAuth]);

  const authentication = () => {
    if (!isAuth) {
      console.log("인증 실패다");
      if (!["nonUser", "all"].includes(forWhom)) {
        // 유저가 없고, 페이지가 for user 라면
        // setNeedRedirect(true);
      }
    } else {
      console.log("인증 성공이다");
      if ((forWhom === "admin" && user.roles === 0) || forWhom === "nonUser") {
        goToLandingPage();
      }
    }
  };

  // useEffect(() => {
  //   console.log("AuthRoute useEffect 실행2");
  //   if (!isFirstRendered.current) {
  //     if (NeedRedirect) setNeedRedirect(false);
  //   } else {
  //     isFirstRendered.current = false;
  //   }
  // }, [NeedRedirect]);

  const getUser = async () => {
    console.log("get");
    dispatch(auth(forWhom));
  };

  const goToLandingPage = () => {
    history.push("/");
  };

  return (
    <Route
      {...rest}
      render={(props) => {
        if (NeedRedirect) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        } else {
          return <Component {...props} user={user} />;
        }
      }}
    />
  );
};
