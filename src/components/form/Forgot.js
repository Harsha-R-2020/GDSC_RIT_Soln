import { useForm } from "react-hook-form";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { useNavigate } from 'react-router-dom';
import "./util.css"
import "./main.css"
import myImg from "../../Assets/img-01.png";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Tilt from "react-parallax-tilt";



function Forgotform() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (e) => {
    var pw1 = document.getElementById("password");  
    var pw2 = document.getElementById("confirm"); 
    if(pw1.value != pw2.value)  
    {   
        alert("The Passwords do not match."); 
    } else {  
        alert("Password Changed Successfully !"); 
        navigate('/login', { replace: true });
    } 
  };
  function checkpass(obj,le){
    var len = obj.value;
    var pas = le.value;
    if(len !== pas){
        return false;
    }else{
        return true;
    }
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="about-section">
        <div className="container-login100">
        <div class="wrap-login100">
     <div class="login100-pic" >
     <div class="animate__animated animate__fadeInLeft ">
      <Tilt>
      <img src={myImg} alt="IMG" />
      </Tilt>
      </div>
     </div>
      {/* <h1 className="project-heading"> */}
     {/* <strong className="green">Forgot Password</strong></h1> */}
        <form class="login100-form validate-form" onSubmit={handleSubmit(onSubmit)}>  
        <div class="animate__animated animate__fadeInDown ">
     <strong className="login100-form-title">Forgot Password</strong></div> 
     <div class="animate__animated animate__fadeInRight ">
          <div className="wrap-input100">
            {/* <div className="col-5">
              <label for="email"><strong className="green">Email : </strong></label>
            </div> */}
          
              <input className="input100 validate-input" type="email"{...register("email", { required: true, pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/ })} placeholder="Your email.." />
              {errors.email && <p className="alert-validate" style={{color:'red'}}> Please enter valid Email !(sample@mail.com)</p>}
              <span class="focus-input100"></span>
						<span class="symbol-input100" style={{color:'black'}}>
            <FaEnvelope />
						</span>
          </div>
          
          <div className="wrap-input100">
      
            
              <input  className="input100 " id="password" type="password" {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,})} placeholder="Your New Password.." />
              {errors.password && <p className="alert-validate" style={{color:'red'}}>Please enter valid Password ! </p>}
              <span class="focus-input100"></span>
						<span class="symbol-input100" style={{color:'black'}}>
            <FaLock />
						</span>
          </div>
          <div className="wrap-input100" >
            
              <input className="input100" id="confirm" type="password" {...register("confirm", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })} placeholder="Confirm Password.." />
              {errors.confirm && <p className="alert-validate" style={{color:'red'}}>Please enter valid Password ! </p>}
              <span class="focus-input100"></span>
						<span class="symbol-input100" style={{color:'black'}}>
            <FaLock />
						</span>
          </div>
          </div>
          <div class="animate__animated animate__fadeInUp ">
          <div className='container-login100-form-btn'>
            <button type='submit' className='button-86' >Reset Password</button>
          </div>
          </div>
        </form>
        </div>
        </div>
        <Particle />
  
       
       
      </div>
    </>
  );
}

export default Forgotform;