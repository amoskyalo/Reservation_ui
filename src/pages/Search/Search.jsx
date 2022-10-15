import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import DarkExample from '../DarkExample/DarkExample'
import "./Search.css"

const Search = () => {
const [search,setSearch] = useState("");

  return (
    <div className='search'>
     <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>phone number</Form.Label>
      <Form.Control  type="number" name="search" placeholder="search" onChange={(e)=> setSearch(e.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      find
    </Button>
  <DarkExample  search={search}/>
    </div>
  )
}

export default Search