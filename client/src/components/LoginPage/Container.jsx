import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../_modules/user";
import { Formik } from "formik";
import { Form, Input, FormItem, SubmitButton, Checkbox } from "formik-antd";
import { StyledFormWrapper } from "./Presentational/styled";

const validator = (values) => {
  const errors = {};
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

  return errors;
};

function Container() {
  const dispatch = useDispatch();

  const onSubmitLoginForm = useCallback((values, { setSubmitting }) => {
    dispatch(userActions.login());
    setSubmitting(false);
  }, []);

  return (
    <StyledFormWrapper>
      <h1>Sign In</h1>
      <Formik
        initialErrors={{ disabled: true }}
        initialValues={{ email: "", password: "", rememberMe: false }}
        validate={validator}
        onSubmit={onSubmitLoginForm}
      >
        {({ isValid }) => (
          <Form>
            <FormItem name="email" label="Email" required={true}>
              <Input name="email" placeholder="Email" size="large" />
            </FormItem>
            <FormItem name="password" label="Password" required={true}>
              <Input.Password
                name="password"
                placeholder="Password"
                size="large"
              />
            </FormItem>
            <FormItem name="rememberMe">
              <Checkbox name="rememberMe">Keep Login</Checkbox>
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
