import "./Login.scss";
import { SlEye } from "react-icons/sl";
import loginImage from "../../assets/images/login.svg";
import regImage from "../../assets/images/reg.svg";

const Login = () => {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="signin-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <SlEye className="icon" />
              <input type="text" placeholder="email" />
            </div>
            <div className="input-field">
              <SlEye className="icon" />
              <input type="password" placeholder="password" />
            </div>
            <input type="submit" value={"Login"} className="btn login" />
          </form>
          <form className="signup-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <SlEye className="icon" />
              <input type="text" placeholder="Nom" />
            </div>
            <div className="input-field">
              <SlEye className="icon" />
              <input type="email" placeholder="email" />
            </div>
            <div className="input-field">
              <SlEye className="icon" />
              <input type="password" placeholder="password" />
            </div>
            <div className="input-field">
              <SlEye className="icon" />
              <input type="text" placeholder="role" />
            </div>
            <input type="submit" value={"Sign up"} className="btn login" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-one">
          {/* <div className="content">
            <h2>New here?</h2>
            <p>
              info about all the people you encounterd the day before about all
              the people you encounterd the
            </p>
            <button className="btn transparent" id="signup-btn">
              Sign Up
            </button>
          </div> */}
          <img src={loginImage} alt="" className="sign-in-image" />
        </div>

        <div className="panel right-one">
          {/* <div className="content">
            <h2>One of us?</h2>
            <p>
              info about all the people you encounterd the day before about all
              the people you encounterd the
            </p>
            <button className="btn transparent" id="signin-btn">
              Sign In
            </button>
          </div> */}
          <img src={regImage} alt="" className="sign-up-image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
