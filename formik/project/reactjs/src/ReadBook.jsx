import React, { useEffect, useState } from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './App.css'

function ReadBook() {
  const [columns , setColumns] = useState([])
  const [rows , setRows] = useState([])

  useEffect(() => {
    axios.get(' http://localhost:4000/book')
    .then(( response) => {
      setColumns(Object.keys(response.data[0]))
      setRows(response.data)
    }
    )

  }, [])

  const handleDelete = (id) => {

    axios.delete(`http://localhost:4000/book/${id}`)
    .then((response) => {
      
      setRows((previousRow) => {
        
      return previousRow.filter((row) => {
        return row.id != id
      })
      })
    })
    
  }
  return (
  <>
    <div className='table'>
    <div >
                {/* Use the Link component properly */}
                <Link to='/create'  > <button className='add'>ADD</button></Link>
            </div>
    <Table striped bordered hover className='container' style={{ border: '2px solid #000', borderRadius: '5px' }}>
      <thead>
        <tr>
        
          {
            columns.map((heading,index) => (
                  <th key={index}>{heading}</th>
            ))
          }
      
         
        </tr>
      </thead>
      <tbody>
      
        {
            rows.map((record,index) => (
                <tr key={index} className='div' style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>


                <td>{record.id}</td>
                <td>{record.title}</td>
                <td>{record.author}</td>
                <td>{record.ISBN_number}</td>
                <td>{record.publication_date}</td>
                <td> 
                  <Link to={`/update/${record.id }`} ><Button className='btn btn-success'>Update</Button></Link>
                  <Button className='btn btn-success' onClick={(params) => {
                    handleDelete(record.id)
                  }} >Delete</Button>
                
                </td>
                 
                     </tr>
            ))
          }
    
       
        
       
      </tbody>
    </Table>

    
 
      
    </div>
  </>
  )
}

export default ReadBook