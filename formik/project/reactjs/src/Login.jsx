import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import Home from './Home';
import './Login.css'; // Import the CSS file

const Login = () => {
  // Define the initial form values
  const initialValues = {
    email: '',
    password: '',
  };

  const navigate = useNavigate()

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required'),
  });

  // State to manage whether to show the Home component
  const [showHome, setShowHome] = useState(false);

  // Submit handler for the login form
// Submit handler for the login form
const handleSubmit = (values, { resetForm, setSubmitting }) => {
  // Check if both email and password are provided
  if (!values.email || !values.password) {
    alert('Please enter both email and password.');
    setSubmitting(false); // Set form submission status to false
  } else {
    // Simulate a successful login for demonstration purposes
    // In a real application, you would perform actual authentication here
    setShowHome(true); // Show the Home component for any form submission
    resetForm(); // Reset the form
    navigate('/home')
    setSubmitting(false); // Set form submission status to false
  }
};




  console.log('showHome:', showHome); // Log the value of showHome

  return (
    <>
      <div className='algin'>
        <img src="WHAT-IS-THE-PURPOSE-OF-A-LIBRARY-MANAGEMENT-SYSTEM-min.png" alt="" />
      <Formik initialValues={initialValues} validationSchema={validationSchema}  onSubmit={handleSubmit}>
       
        <Form className='formm'>
        <h1 >Login</h1>
            <label>Email</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" className="errorr" />
          
   <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password"  className="errorr" />
          
          <select
        name="colorss"
        style={{ display: "block" }}
      >
        <option value="" label="Select the type">
          Select a color{" "}
        </option>
        <option value="red" >
          User
        </option>
        <option value="blue">
          Admin
        </option>
      </select>
 
<button className='buttonn' type="submit">Login</button>
    
     
        </Form>
       
        
      </Formik>

         
   
       </div>
</>
  );
};

export default Login;
