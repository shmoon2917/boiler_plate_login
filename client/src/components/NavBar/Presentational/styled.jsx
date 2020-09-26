import styled from "styled-components";
import { Button } from "antd";
import { device } from "../../../_helpers";

const StyledNav = styled.nav`
  padding: 0 20px;
  border-bottom: solid 1px #e8e8e8;
  box-shadow: 0 0 30px #f3f1f1;
  position: fixed;
  z-index: 5;
  width: 100%;
`;

const StyledNavLogo = styled.div`
  width: 120px;
  float: left;

  & a {
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 20px;
    height: 52px;

    @media ${device.tablet} {
      height: 67px;
      justify-content: center;
    }
  }

  & a > span:last-child {
    display: none !important;
    margin-left: 10px;

    @media ${device.tablet} {
      display: inline-block !important;
    }
  }
`;

const StyledNavContainer = styled.div`
  float: right;

  & .ant-menu {
    display: none !important;

    @media ${device.tablet} {
      display: inline-block !important;
    }
  }

  & .ant-menu-horizontal {
    border-bottom: none !important;
  }

  & .ant-menu-item {
    margin: 0px !important;
    padding: 0 15px !important;
  }

  &.menu__drawer .ant-drawer-body {
    padding: 0 !important;
  }

  /* align header of Drawer with header of page */
  & .menu__drawer .ant-drawer-header {
    padding: 14px 24px !important;
  }
`;

const StyledMobileButton = styled(Button)`
  float: right;
  height: 32px;
  padding: 6px;
  margin-top: 10px;
  display: inline-block !important;

  @media ${device.tablet} {
    display: none !important;
  }
`;

export { StyledNav, StyledNavLogo, StyledNavContainer, StyledMobileButton };
