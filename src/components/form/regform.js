import { useForm } from "react-hook-form";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import firebase from 'firebase'; 
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/img-01.png";
import myImg1 from "../../Assets/dsclogo.png";
import { useNavigate } from 'react-router-dom';
import { FaEnvelope,FaPhone,FaUser,FaBuilding,FaUserTie,FaProjectDiagram,FaScroll,FaLaptopCode,FaCalendarCheck } from "react-icons/fa";

function Regform() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  var el = document.getElementById('abstract')
  var database = firebase.database();
  const onSubmit = (e) => {
    if(maxlength(el,250)){
      Push();
        alert("Register Successfully !")
        navigate('/home', { replace: true });
        
    }else{
        alert("You cannot put more than 250 words in the abstract.");
    }
  };
  function maxlength(obj,wordLen){
    var len = obj.value.split(/[\s]+/);
    if(len.length > wordLen){
        return false;
    }else{
        return true;
    }
  };
  const navigate = useNavigate();
  const Push = () => { 
    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var email = document.getElementById('email').value
    var mobile = document.getElementById('mobile').value
    var univ = document.getElementById('univ').value
    var ptitle = document.getElementById('ptitle').value
    var pdomain = document.getElementById('pdomain').value
    var mname = document.getElementById('mname').value
    var pslot = document.getElementById('pslot').value
    var abstract = document.getElementById('abstract').value
    database.ref(fname+" Registeration").set({ 

      firstName : fname, 

      lastName : lname, 

      emailId : email,
      
      MobileNo : mobile,

      university : univ,

      ProjectTitle : ptitle,

      ProjectDomain : pdomain,

      MentorName : mname,

      PreferedSlot : pslot,

      Abstract : abstract,


    }).catch(alert); 

  };
  return (
    <>
    <div className="about-section">
      <div className="container-login100">
     
    
     <div class="login100-pic" style={{bottom:400}}>
     <div class="animate__animated animate__fadeInLeft ">
      <Tilt>
      <img src={myImg} alt="IMG" />
      </Tilt>
      </div>
     </div>
     
     <div class="wrap-login100" >
        <form className="login100-form validate-form" onSubmit={handleSubmit(onSubmit)}>
        <div class="animate__animated animate__fadeInDown ">
     <strong className="login100-form-title">Register Now</strong></div> 
     <label className="green">First Name</label>
          <div className="wrap-input100">
            
            
              {/* <label for="fname">
              <strong className="green">First Name : </strong> </label> */}
         
         
              <input className="input100" id="fname" type="text"{...register("firstName", { required: true ,pattern: /^[a-zA-Z ]+$/ })} placeholder="Your First Name.." />
              {errors.firstName && <p className="alert-validate"style={{color:'red'}}>Please enter valid First Name !</p>}
              <span class="focus-input100"></span>
              <span class="symbol-input100" style={{color:'black'}}>
            <FaUser />
						</span>
              
          </div>
       
          <div className="wrap-input100" style={{top:-60,left:400}}>
      
              <input className="input100" type="text" id="lname" {...register("lastName", { required: true ,pattern: /^[a-zA-Z ]+$/ })} placeholder="Your Last Name.." />
              {errors.lastName && <p className="alert-validate"style={{color:'red'}}>Please enter valid Last Name ! </p>}
              <span class="focus-input100"></span>
              <span class="symbol-input100" style={{color:'black'}}>
            <FaUser />
						</span>
          </div>
          <label className="green">Email </label>
          <div className="wrap-input100">
          
              <input className="input100" id="email" type="email"{...register("email", { required: true, pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/ })} placeholder="Your email.." />
              {errors.email && <p className="alert-validate" style={{color:'red'}}> Please enter valid Email !(sample@mail.com)</p>}
              <span class="focus-input100"></span>
              <span class="symbol-input100" style={{color:'black'}}>
            <FaEnvelope />
						</span>
          </div>
        
          <div className="wrap-input100" style={{top:-60,left:400}}>
         
              <input className="input100" id="mobile" type="mobile" {...register("mobile", { required: true, pattern: /^\d{10}$/ })} placeholder="Your Mobile No.." />
              {errors.mobile && <p className="alert-validate" style={{color:'red'}}>Please enter valid Mobile No !</p>}
              <span class="focus-input100"></span>
              <span class="symbol-input100" style={{color:'black'}}>
            <FaPhone />
						</span>
          </div>
          <label className="green">University</label>
          <div className="wrap-input100">
      
              <input className="input100" id="univ" type="text" {...register("university", { required: true,pattern: /^[a-zA-Z ]+$/ })} placeholder="Your University Name.." />
              {errors.university && <p className="alert-validate" style={{color:'red'}}>Please enter valid university Name!</p>}
              <span class="focus-input100"></span>
              <span class="symbol-input100" style={{color:'black'}}>
            <FaBuilding />
						</span>
          </div>
         
          <div className="wrap-input100" style={{top:-60,left:400}}>
          
            <input className="input100" id="mname" type="text" {...register("mentor", { required: true,pattern: /^[a-zA-Z ]+$/ })} placeholder="Your Mentor Name.." />
            {errors.mentor && <p className="alert-validate" style={{color:'red'}}>Mentor Name is Mandatory! </p>}
            <span class="focus-input100"></span>
            <span class="symbol-input100" style={{color:'black'}}>
            <FaUserTie />
						</span>
        </div>
        <label className="green">Title</label>
          <div className="wrap-input100">
          
              <input className="input100" id="ptitle" type="text" {...register("Project", { required: true,pattern: /^[a-zA-Z ]+$/ })} placeholder="Your Solution Title.." />
              {errors.Project && <p className="alert-validate" style={{color:'red'}}>Solution Title is Mandatory! </p>}
              <span class="focus-input100"></span>
              <span class="symbol-input100" style={{color:'black'}}>
            <FaProjectDiagram />
						</span>
          </div>
          
          <div className="wrap-input100" style={{top:-60,left:400}} >
             
              <select className="input100" id ="pdomain"  {...register("Domain", { required: true })} placeholder="Choose Any Domain"><option value="">Choose Any Domain..</option>
                    <option value="ML">Machine Learning</option>
                    <option value="BC">Blockchain</option>
                    <option value="CS">Cyber Security</option>
                    <option value="MC">Mobile Computing</option>
                    <option value="WS">Web Services</option>
                </select>
              {errors.Domain && <p className="alert-validate" style={{color:'red'}}>Project Domain is Mandatory! </p>}
              <span class="focus-input100"></span>
              <span class="symbol-input100" style={{color:'black'}}>
            <FaLaptopCode />
						</span>
          </div>
      
         
          <label className="green">Review Slot</label>
          <div className="wrap-input100">
          
              <select className="input100" id="pslot" {...register("slot", { required: true })} placeholder="Choose Slot"><option value="Slot">Choose PreferedSlot...</option>
                    <option value="1">20th January                                                        </option>
                    <option value="2">12th February</option>
                    <option value="3">20th February</option>
                    <option value="4">3rd March</option>
                </select>
              {errors.slot && <p className="alert-validate"><strong className="red"> </strong> </p>}
              <span class="focus-input100"></span>
              <span class="symbol-input100" style={{color:'black'}}>
            <FaCalendarCheck />
						</span>
          </div>
        
          <div className="wrap-input100" style={{top:-60,left:400}}>
          
            {/* <textarea rows="6" cols="80"name="abstract"   onChange="maxlength('abstract', 250)">    </textarea> */}
              <textarea className="input100" type="text" id="abstract" cols="50" rows="5" {...register("abstract", { required: true })} placeholder="Your Solution Abstract in 250 words.." />
              {errors.abstract && <p className="alert-validate" style={{color:'red'}}>Solution abstract is Mandatory! </p>}
              <span class="focus-input100"></span>
              <span class="symbol-input100" style={{color:'black'}}>
            <FaScroll />
						</span>
          </div>
        
          <div className='mt-3'>
            <button type='submit' className='button-86'style={{left:'30ch'}}  >Submit</button>
          </div>
        </form>
        </div>
        <Particle />
        <Row><br></br></Row>
        <Row><br></br></Row>
        <Row><br></br></Row>
        <Row><br></br></Row>
      </div>
      </div>
    </>
  );
}

export default Regform;