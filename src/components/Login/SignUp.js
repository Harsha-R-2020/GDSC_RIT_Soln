import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import { useNavigate } from 'react-router-dom';
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/img-01.png";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
        alert("User Created Successfully")
        navigate('/login', { replace: true });  
      // history.push("/");   
    } catch (error) {
      alert(error);
    }
  }, [history]);
  const navigate = useNavigate();
  return (
    <div fluid className="about-section" >
      <Container>
        <div className="container-login100">
        <div >
        <div class="wrap-login100">
        <div class="login100-pic" >
          <div class="animate__animated animate__fadeInLeft ">
          <Tilt>
      <img src={myImg} alt="IMG" />
      </Tilt>
          </div>
      
     </div>
      <form className="login100-form validate-form" onSubmit={handleSignUp}>
      <div class="animate__animated animate__fadeInDown ">
      <strong className="login100-form-title">Sign Up</strong>
      </div>
      <div class="animate__animated animate__fadeInRight ">
      <div className="wrap-input100">
          <input className="input100" name="email" type="email" placeholder="Email" />
          <span class="focus-input100"></span>
          <span class="symbol-input100" style={{color:'black'}}>
            <FaEnvelope />
						</span>
        </div>
        <div className="wrap-input100">
          
          <input className="input100" name="password" type="password" placeholder="Password" />
          <span class="focus-input100"></span>
          <span class="symbol-input100" style={{color:'black'}}>
            <FaLock />
						</span>
        </div>
        <div class="container-login100-form-btn">
        <button className="button-86" type="submit">Sign Up</button>
        </div>
        </div>
        <div class="animate__animated animate__fadeInUp">
        <div class="text-center p-t-12">
       <span class="txt1">
							Already have an Account
						</span>
            <a class="txt2" href="/login">
              <span className="green"> Login Now</span>
							 
						</a>
       </div>
       </div>
        </form>
        </div>
      </div>
      </div>
      </Container>
      <Particle />
      <Container>
      <Container>
      </Container>
      </Container>
    </div>
  );
};

export default SignUp;
