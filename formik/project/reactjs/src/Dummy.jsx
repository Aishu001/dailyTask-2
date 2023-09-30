import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";

const BookManager = () => {
  // Define initial form values
  const [initialValues,setInitialValues] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:4000/book')
      .then((res) => {
        setInitialValues(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  // Define validation rules
  const validate = (values) => {
    const errors = {};
    // Add validation rules for each field
    if (!values.title) {
      errors.title = 'Title is required';
    }
    // Add validation rules for other fields

    return errors;
  };

  // Submit handler for adding/editing book
  const handleSubmit = (values, { resetForm }) => {
    // Implement your logic to add/edit the book record here
    console.log('Submitted:', values);
    resetForm();
  };


  return (
    <div>
      <h1>Book Manager</h1>
      <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label>Title</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>

          {/* Add fields for author, ISBN, and publicationDate */}
          {/* Implement the form for adding/editing books */}
          
          <button type="submit">Add/Edit Book</button>
        </Form>
      </Formik>

      {/* Display the list of books with an option to delete */}
      <div>
        <h2>Book List</h2>
        {/* Map through your book data and display it */}
        {/* Include a delete button for each book */}
        {/* Implement the logic to delete a book when the delete button is clicked */}
      </div>
    </div>
  );
};

export default BookManager;
