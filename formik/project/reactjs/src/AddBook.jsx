import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'; // Import Button from react-bootstrap


function AddBook() {
  const navigate = useNavigate();

  const initialValues = {
    title: '',
    author: '',
    ISBN_number: '',
    publication_date: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    ISBN_number: Yup.string().required('ISBN number is required'),
    publication_date: Yup.string().required('Publication date is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    axios
      .post('http://localhost:4000/book', values)
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
      <h2>Add Book Details</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className='form'>
          <div>
          
            <Field
              type="text"
              id="title"
              name="title"
              placeholder="Enter your title"
              className='name'
              size="lg"
            />
            <ErrorMessage name="title" component="div" className="error" />
          </div>

          <div>
          
            <Field
              type="text"
              id="author"
              name="author"
              placeholder="Create author name"
              className='name'
              size="lg"
            />
            <ErrorMessage name="author" component="div" className="error" />
          </div>

          <div>
            
            <Field
              type="text"
              id="ISBN_number"
              name="ISBN_number"
              placeholder="Enter ISBN_number"
              className='email'
              size="lg"
            />
            <ErrorMessage name="ISBN_number" component="div" className="error" />
          </div>

          <div>
          
            <Field
              type="date"
              id="publication_date"
              name="publication_date"
              placeholder="Enter publication_date"
              className='company'
              size="lg"
            />
            <ErrorMessage
              name="publication_date"
              component="div"
              className="error"
            />
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

export default AddBook;
