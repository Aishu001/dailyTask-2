import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Import Yup for form validation
import axios from 'axios';

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const initialValues = {
    title: '',
    author: '',
    ISBN_number: '',
    publication_date: '',
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/book/${id}`)
      .then((response) => {
        // Populate initialValues with the fetched data
        initialValues.title = response.data.title || '';
        initialValues.author = response.data.author || '';
        initialValues.ISBN_number = response.data.ISBN_number || '';
        initialValues.publication_date = response.data.publication_date || '';
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    ISBN_number: Yup.string().required('ISBN number is required'),
    publication_date: Yup.date().required('Publication date is required'),
  });

  const handleSubmit = (values) => {
    axios
      .put(`http://localhost:4000/book/${id}`, values)
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
            
            <Field type="text" id="title" name="title" className="name"/>
            <ErrorMessage name="title" component="div" className="error" />
          </div>

          <div>
            
            <Field type="text" id="author" name="author" className="name" />
            <ErrorMessage name="author" component="div" className="error" />
          </div>

          <div>
            
            <Field type="text" id="ISBN_number" name="ISBN_number" className="name"/>
            <ErrorMessage name="ISBN_number" component="div" className="error" />
          </div>

          <div>
            
            <Field type="date" id="publication_date" name="publication_date" className="name" />
            <ErrorMessage name="publication_date" component="div" className="error" />
          </div>

          <button type="submit" className="add">
            Update
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default EditBook;
