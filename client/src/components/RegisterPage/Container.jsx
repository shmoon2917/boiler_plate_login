import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../_modules/user";
import { Formik } from "formik";
import { Form, Input, FormItem, SubmitButton } from "formik-antd";
import { StyledFormWrapper } from "./Presentational/styled";

const validator = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length <= 5) {
    errors.password = "Too short Yo";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "일치하지 않습니다. 다시 작성해주세요.";
  }

  return errors;
};

function Container() {
  const dispatch = useDispatch();

  const onSubmitLoginForm = useCallback(
    ({ name, email, password, confirmPassword }, { setSubmitting }) => {
      const body = {
        name,
        email,
        password,
        confirmPassword,
      };

      dispatch(register(body));
      setSubmitting(false);
    },
    []
  );

  return (
    <StyledFormWrapper>
      <h1>Sign In</h1>
      <Formik
        initialErrors={{ disabled: true }}
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validate={validator}
        onSubmit={onSubmitLoginForm}
      >
        {({ isValid }) => (
          <Form>
            <FormItem name="name" label="Name" required={true}>
              <Input name="name" placeholder="이름을 입력하세요" size="large" />
            </FormItem>
            <FormItem name="email" label="Email" required={true}>
              <Input
                name="email"
                placeholder="이메일을 입력하세요"
                size="large"
              />
            </FormItem>
            <FormItem name="password" label="Password" required={true}>
              <Input.Password
                name="password"
                placeholder="비밀번호를 입력하세요"
                size="large"
              />
            </FormItem>
            <FormItem
              name="confirmPassword"
              label="Confirm Password"
              required={true}
            >
              <Input.Password
                name="confirmPassword"
                placeholder="비밀번호를 다시 한 번 더 입력하세요"
                size="large"
              />
            </FormItem>
            <SubmitButton size="large" disabled={!isValid}>
              Submit
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </StyledFormWrapper>
  );
}

export default Container;
