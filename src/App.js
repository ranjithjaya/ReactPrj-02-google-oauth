import React, { useState } from "react";
//import ReactDOM from "react-dom";
//import "./styles.css";
import GoogleLogin from "react-google-login";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  };

  return (
    <div className="App">
      <h1>Login with Google</h1>
      <h2>Welcome: {name}</h2>
      <h2>E-mail: {email}</h2>
      <img src={url} alt={name} />
      <br></br>
      <GoogleLogin
        clientId="894911154406-hpdplp8aib3i5chsji6etebhl5lnegvl.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
