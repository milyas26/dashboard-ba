import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components";
import { toast } from "react-toastify";

interface LoginProps {
  email: string;
  password: string;
}

const Login = () => {
    const navigate = useNavigate();
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Masukkan email yang valid")
      .required("Email wajib diisi"),
    password: Yup.string().required("Password wajib diisi"),
  });

  const submitLogin = (values: LoginProps) => {
    const { email, password } = values;
    // encrypt email and password into base64
    const encodedEmail = btoa(email);
    const encodedPassword = btoa(password);

    const payload = {
      email: encodedEmail,
      password: encodedPassword,
    };

    axios
      .post("http://localhost:3002/api/login", payload)
      .then((res) => {
        console.log(res);
        // Lakukan sesuatu setelah berhasil login
        toast.success("Login berhasil")
        // redirect ke halaman dashboard
        navigate('/')
        // set token to localstorage
        localStorage.setItem("TOKEN", res.data.Data.acessToken);
      })
      .catch((err) => {
        toast.error(err.response.message);
        console.log(err);
      }).finally(() => {
        // Untuk sekarang, sementara langsung redirect ke halaman dashboard
        navigate('/dashboard')
      })
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values: LoginProps) => {
        submitLogin(values)
      }}
    >
      {({ errors, touched, values }) => {
        return (
          <Form>
            <div className="login-container animated fadeInDown">
              <div className="loginbox bg-white">
                <div className="loginbox-title">SIGN IN</div>
                <div className="loginbox-social">
                  <div className="social-title ">
                    Connect with Your Social Accounts
                  </div>
                  <div className="social-buttons">
                    <a href="" className="button-facebook">
                      <i className="social-icon fa fa-facebook"></i>
                    </a>
                    <a href="" className="button-twitter">
                      <i className="social-icon fa fa-twitter"></i>
                    </a>
                    <a href="" className="button-google">
                      <i className="social-icon fa fa-google-plus"></i>
                    </a>
                  </div>
                </div>
                <div className="loginbox-or">
                  <div className="or-line"></div>
                  <div className="or">OR</div>
                </div>
                <div className="loginbox-textbox">
                  <Input
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    isError={Boolean(errors.email && touched.email)}
                    errorMessage={errors.email}
                  />
                </div>
                <div className="loginbox-textbox">
                  <Input
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    isError={Boolean(errors.password && touched.password)}
                    errorMessage={errors.password}
                  />
                </div>
                <div className="loginbox-forgot">
                  <a href="">Forgot Password?</a>
                </div>
                <div className="loginbox-submit">
                  <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    value="Login"
                  />
                </div>
                <div className="loginbox-signup">
                  <a href="">Sign Up With Email</a>
                </div>
              </div>
              <div className="logobox"></div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;
