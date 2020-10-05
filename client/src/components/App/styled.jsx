import styled, { createGlobalStyle } from "styled-components";
import { Layout } from "antd";
import { device } from "../../styles/global";

const { Header, Content, Footer } = Layout;

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const StyledHeader = styled(Header)`
  height: unset;
  padding: 0;
`;

const StyledContent = styled(Content)`
  min-height: calc(100vh - 52px);
  background-color: white;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    min-height: calc(100vh - 67px);
  }
`;

const StyledFooter = styled(Footer)`
  background-color: #f7f7f7;
  text-align: center;
`;

export { GlobalStyle, Container, StyledHeader, StyledContent, StyledFooter };
