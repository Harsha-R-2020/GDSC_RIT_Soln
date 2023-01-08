import React, { useCallback, useContext } from "react";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import "./util.css"
import "./main.css"
import myImg from "../../Assets/img-01.png";


const Login = ({ history }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigateToForgot = () => {
    navigate('/forgot', { replace: true });
  };
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
          alert("Login Successfull")
          navigate('/', { replace: true });  
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      
 <div fluid className="about-section" >
 
     <Container>
     <div className="container-login100" >
     <div>
     <div class="wrap-login100">
     <div class="login100-pic" >
     <div class="animate__animated animate__fadeInLeft ">
      <Tilt>
      <img src={myImg} alt="IMG" />
      </Tilt>
      </div>
     </div>
   
     <form class="login100-form validate-form" onSubmit={handleLogin}>
     <div class="animate__animated animate__fadeInDown ">
     <strong className="login100-form-title">Log in</strong></div>
     <div class="animate__animated animate__fadeInRight ">
       <div className="wrap-input100">
         <input className="input100" name="email" type="email" placeholder="Email" />
         <span class="focus-input100"></span>
						<span class="symbol-input100" style={{color:'black'}}>
            <FaEnvelope />
						</span>
       </div>
       <div className="wrap-input100">
     
         <input className="input100"  type="password" {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })} placeholder="Your Password.." />
              {errors.password && <p className="validate-input"><strong className="red">Please enter valid Password ! </strong> </p>}
       
              <span class="focus-input100"></span>
						<span class="symbol-input100" style={{color:'black'}}>
            <FaLock />
						</span>
       </div>
       <div class="container-login100-form-btn">
       <button className="button-86" type="submit">Log in</button>
       </div>
       </div>
       <div class="animate__animated animate__fadeInUp ">
       <div class="text-center p-t-12">
       <span class="txt1">
							Forgot
						</span>
            <a class="txt2" href="/forgot">
              <span className="green"> Password?</span>
							 
						</a>
       </div>
       <div class="text-center p-t-50">
						<a class="txt2" href="/signup">
							<span className="green">Create your Account</span> 
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
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
       <Row><br></br></Row>
       <Row><br></br></Row>
       <Row><br></br></Row>
       <Row><br></br></Row>
       <Row><br></br></Row>
       <Row><br></br></Row>
       <Row><br></br></Row>
       <Row><br></br></Row>
       
     </Container>
     </Container>
   </div>
    </div>
   
    
  );
};

export default Login;
