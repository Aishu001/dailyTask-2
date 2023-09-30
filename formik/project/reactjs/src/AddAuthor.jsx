import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'; // Import Button from react-bootstrap

function AddAuthor(){
    const navigate = useNavigate();
  
    const initialValues = {
      name: '',
      birth_date: '',
      biography: '',
    };
  
    const validationSchema = Yup.object().shape({
      name: Yup.string().required('Name is required'),
      birth_date: Yup.string().required('birth_date is required'),
      biography: Yup.string().required('biography is required'),
     
    });
  
    const handleSubmit = (values, { resetForm }) => {
      axios
        .post('http://localhost:4000/author', values)
        .then((response) => {
          alert('Added successfully');
          resetForm(); // Reset the form after successful submission
          navigate('/');
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Failed to add data. Please check the server.');
        });
    };
  
    return (
      <>
        <h2>Add Author Details</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className='form'>
            <div>
            
              <Field
                type="text"
                id=" name"
                name=" name"
                placeholder="Enter your name"
                className='name'
                size="lg"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
  
            <div>
            
              <Field
                type="date"
                id="birth_date"
                name="birth_date"
                placeholder="Create birth_date"
                className='name'
                size="lg"
              />
              <ErrorMessage name="birth_date" component="div" className="error" />
            </div>
  
            <div>
              
              <Field
                type="textarea"
                id="biography"
                name="biography"
                placeholder="Enter biography"
                className='email'
                size="lg"
              />
              <ErrorMessage name="biography" component="div" className="error" />
            </div>
  
            <br />
  
            <Button type="submit" className='add'>
              Submit
            </Button>
          </Form>
        </Formik>
      </>
    );
  }

export default AddAuthor