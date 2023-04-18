import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={login}>
          <i class="fa-brands fa-google"></i>
          Continue with google
        </button> */}
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            var decoded = jwt_decode(credentialResponse.credential);
            console.log(decoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </header>
    </div>
  );
}

export default App;
