import React from "react";

import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Formik } from "formik";
import * as yup from "yup";

import { loginUser } from "../Utils/Servise";

const Login = () => {
  const ValidationSchema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Required"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/,
        "Must Contain 6 Characters. One Number and one special case Character"
      )
      .required("Please Enter your password"),
  });

 

  const handleSubmit = (value, {resetForm}) => {
    console.log(value);
    loginUser(value)
     resetForm({value:''})
     
  };

  return (
    <Root>
      <Logo>Login</Logo>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <BoxForm component="form" onSubmit={handleSubmit}>
            <SlyledDiv>
              <CssTextField
                label="Enter you email"
                required
                type="email"
                name="email"
                // placeholder="Enter you email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </SlyledDiv>

            {errors.email && touched.email && (
              <InfoError>{errors.email}</InfoError>
            )}
            <SlyledDiv>
              <CssTextField
                required
                label="Enter you password"
                type="password"
                name="password"
                placeholder="Enter you password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </SlyledDiv>

            {errors.password && touched.password && (
              <InfoError>{errors.password}</InfoError>
            )}
            <SteledButton
              variant="outlined"
              type="submit"
              // disabled={isSubmitting}
            >
              Login
            </SteledButton>
          </BoxForm>
        )}
      </Formik>
    </Root>
  );
};

const BoxForm = styled(Box)`
  padding: 5% 20%;
`;
const SlyledDiv = styled.div`
  padding-top: 10%;
`;
const SteledButton = styled(Button)`
  margin-top: 10% !important;
  margin-left: 30% !important;
`;

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#6c615c",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#6c615c",
  },
  "& .MuiOutlinedInput-root": {
    // "& fieldset": {
    //   borderColor: "red",
    // },
    "&:hover fieldset": {
      borderColor: " rgba(115, 124, 156, 0.8),",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6c615c",
    },
  },
});
const Logo = styled.h1`
  width: 100%;
  position: absolute;
  top: -60px;
  font-size: 70px;
  font-weight: bold;
  /* display: block; */
  text-align: center;
  color: #b3b3b3;
  color: rgba(255, 255, 255, 0.3);
  text-shadow: -1px -1px rgb(0 0 0 / 20%);
`;



const Root = styled.div`
  margin-top: 100px;
  width: 400px;
  position: relative;
  border-radius: 10px;
  background-color: #fff;
`;



const InfoError = styled.p`
  color: red;
  padding-left: 20px;
`;

export default Login;
