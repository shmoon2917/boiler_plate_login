import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import { history } from "../../_helpers/history";
import { NavBar } from "./Presentational/NavBar";

//===============================================
//              Container Component
//===============================================
function Container() {

  const user = useSelector((state) => state.user.)
  const [currentKey, setCurrentKey] = useState("");
  const unListenHistory = useRef();

  useEffect(() => {
    // console.log("Container useEffect 실행");
    unListenHistory.current = history.listen(
      (location) => location.pathname === "/" && setCurrentKey("")
    );
    
    return () => unListenHistory.current();
  }, []);

  const onChangeCurrentTab = useCallback((e) => {
    setCurrentKey(e.key);
  }, []);

  return (
    <NavBar onClick={onChangeCurrentTab} user={user} currentKey={currentKey} />
  );
}

export default Container;
