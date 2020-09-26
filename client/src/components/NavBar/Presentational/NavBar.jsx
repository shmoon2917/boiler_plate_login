import React, { useEffect, useState } from "react";
import { HomeFilled, AlignRightOutlined } from "@ant-design/icons";
import {
  StyledNav,
  StyledNavLogo,
  StyledNavContainer,
  StyledMobileButton,
} from "./styled";
import { Drawer } from "antd";
import { NavMenu } from "./NavMenu";
import { Link } from "react-router-dom";

const navItemsForNonUser = [
  { key: "signin", elem: <Link to="/login">Sign In</Link> },
  {
    key: "signup",
    elem: <Link to="/register">Sign Up</Link>,
  },
];

const navItemsForUser = [
  { key: "upload", elem: <Link to="/product/upload">Upload</Link> },
];

//=======================================
//       Presentational Component
//        With Styled Component
//=======================================
export const NavBar = ({ onClick, currentKey, user }) => {
  // console.log("navBar hook 실행
  const [navItems, setNavItems] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // console.log("navBar useEffect 실행");
    user ? setNavItems(navItemsForUser) : setNavItems(navItemsForNonUser);
  }, [user]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <StyledNav>
      <StyledNavLogo>
        <Link to="/">
          <HomeFilled />
          <span>Home</span>
        </Link>
      </StyledNavLogo>
      <StyledNavContainer>
        <NavMenu
          onClick={onClick}
          currentKey={currentKey}
          mode="horizontal"
          items={navItems}
        />
        <StyledMobileButton onClick={showDrawer} type="primary">
          <AlignRightOutlined />
        </StyledMobileButton>
        <Drawer
          title="Menu"
          placement="right"
          className="menu__drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          {visible && (
            <NavMenu
              onClick={onClick}
              currentKey={currentKey}
              mode="vertical"
              items={navItems}
            />
          )}
        </Drawer>
      </StyledNavContainer>
    </StyledNav>
  );
};
