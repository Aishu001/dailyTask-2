import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Import Yup for form validation
import axios from 'axios';

function EditAuthor() {
    const { id } = useParams();
    const navigate = useNavigate();
  
    const initialValues = {
        name: '',
        birth_date: '',
        biography: '',
    };
  
    useEffect(() => {
      axios
        .get(`http://localhost:4000/author/${id}`)
        .then((response) => {
          // Populate initialValues with the fetched data
          initialValues.name = response.data.name || '';
          initialValues.birth_date = response.data.birth_date || '';
          initialValues.biography = response.data.biography || '';
        })
        .catch((error) => {
          console.log(error);
        });
    }, [id]);
  
    // Define validation schema using Yup
    const validationSchema = Yup.object().shape({
      name : Yup.string().required('name  is required'),
      birth_date: Yup.string().required('birth_date is required'),
      biography: Yup.date().required('biography is required'),
    });
  
    const handleSubmit = (values) => {
      axios
        .put(`http://localhost:4000/author/${id}`, values)
        .then((response) => {
          alert('Data is updated');
          navigate('/');
        });
    };
  
    return (
      <div>
        <h2>Edit Book</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className='form'>
            <div>
              
              <Field type="text" id="title" name="name" className="name"/>
              <ErrorMessage name="name" component="div" className="error" />
            </div>
  
            <div>
              
              <Field type="date" id="author" name="birth_date" className="name" />
              <ErrorMessage name="birth_date" component="div" className="error" />
            </div>
  
            <div>
              
              <Field type="textarea" id="ISBN_number" name="biography" className="name"/>
              <ErrorMessage name="biography" component="div" className="error" />
            </div>
  
  
            <button type="submit" className="add">
              Update
            </button>
          </Form>
        </Formik>
      </div>
    );
  }

export default EditAuthor