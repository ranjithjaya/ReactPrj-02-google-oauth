import React, {useState} from 'react';
//import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';

export class App extends Component {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");


  const responseGoogle=(response)=>{
    //console.log(response);
    //console.log(response.profileObj);
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  }

  
  render() {
    return (
      <div>
        <GoogleLogin
        clientId="894911154406-hpdplp8aib3i5chsji6etebhl5lnegvl.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        
        />
      </div>
    )
  }
}

export default App
