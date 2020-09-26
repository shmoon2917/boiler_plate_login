import React, { useState, useEffect, useRef, useCallback } from "react";
import { history } from "../../_helpers/history";
import { NavBar } from "./Presentational/NavBar";

//===============================================
//              Container Component
//===============================================
function Container() {
  // console.log("Container hook 실행");
  // eslint-disable-next-line
  const [user, setUser] = useState(null);
  const [currentKey, setCurrentKey] = useState("");
  const unListen = useRef();

  useEffect(() => {
    // console.log("Container useEffect 실행");
    unListen.current = history.listen(
      (location) => location.pathname === "/" && setCurrentKey("")
    );
    return () => unListen.current();
  }, []);

  const onChangeCurrentTab = useCallback((e) => {
    setCurrentKey(e.key);
  }, []);

  return (
    <NavBar onClick={onChangeCurrentTab} user={user} currentKey={currentKey} />
  );
}

export default Container;
