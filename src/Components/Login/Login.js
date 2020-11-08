import React from "react";
import LoginFields from "./LoginFields";

function Login() {
  const [loginDt, setLoginDt] = useState({
    userName: "",
    password: "",
    showPassword: false,
    rememberMe: false,
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value =
      name == "rememberMe" ? event.target.checked : event.target.value;

    setLoginDt({ ...loginDt, [name]: value });
  };

  const handleShowPassword = (event) => {
    setLoginDt({
      ...loginDt,
      ["showPassword"]: !loginDt.showPassword,
    });
  };

  return (
    <div>
      <LoginFields
        baby={"hey babes"}
        loginDt={loginDt}
        handleChange={handleChange}
        handleShowPassword={handleShowPassword}
      />
    </div>
  );
}

export default Login;
