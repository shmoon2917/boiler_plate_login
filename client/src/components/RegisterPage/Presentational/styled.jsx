import styled from "styled-components";

const StyledFormWrapper = styled.div`
  border: solid 1px #e8e8e8;
  border-radius: 2px;
  width: 500px;
  margin: 64px 0 120px 0;
  padding: 48px;

  h1 {
    margin-bottom: 30px;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }

  & .ant-form-item-label {
    font-size: 15px;
    text-align: left;
    width: 100%;
  }

  & .ant-form-item.control {
    width: 100%;
  }

  & .ant-btn {
    width: 100%;
  }
`;

export { StyledFormWrapper };
