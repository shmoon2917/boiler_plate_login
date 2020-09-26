import React from "react";
import { Menu } from "antd";

//=======================================
//       Presentational Component
//=======================================
export const NavMenu = ({ currentKey, onClick, mode, items }) => {
  // console.log("navMenu hook 실행", type);

  return (
    <Menu onClick={onClick} selectedKeys={[currentKey]} mode={mode}>
      {items &&
        items.map((item) => <Menu.Item key={item.key}>{item.elem}</Menu.Item>)}
    </Menu>
  );
};
