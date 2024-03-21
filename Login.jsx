import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import '../theming/login.css'

function Login() {

  const navigate = useNavigate()
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleClick = () =>{
    navigate('/app/')
  }

  return (
    <div className='limiter'>
    <div className='container'>
        <div className='wrap'>
        <div className='image  bg-bluegray-900 flex justify-content-between'>
            <img src="https://autohive-wp.themetags.com/demo/assets/img/autohive-logo.png" alt="" />
            <div className='img_div'>
               <div className='mt-7 mr-2'>
               <span className='text-white '>autohive@gmail.com</span>
               </div>
            </div>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
              onSubmit={handleSubmit}
           >
          <form action="" className='form'  >
            <div className='input_div'>
              <label htmlFor="" className='label'>Username</label>
              <Field className='input' type="text" id="username" name="username" />
                    <ErrorMessage name="username" component="div" style={{color:"red",marginLeft:"184px"  }}/>
            </div>
            <div className='input_div'>
              <label htmlFor="" className='label'>Password</label>
              <Field className="input" type="password" id="password" name="password" />
                <ErrorMessage  name="password" component="div" style={{color:"red",marginLeft:"184px"}} />
            </div>
            <div className='input_div' style={{marginLeft:"173px",marginTop:"10px" }}>
            <input id="checkbox" type="checkbox" /> 
             <label for="checkbox" className='remember' >Remember me</label> 
                <a href="https://www.w3schools.com/" className='forgot no-underline ml-8  ' target='_blank'>Forgot Password?</a>
                </div>
              <div className='button'>
                <button type='submit' onClick={handleClick}>Login</button>
              </div>
             
     </form>
     </Formik>
        </div>

    </div>
</div>
  )
}

export default Login