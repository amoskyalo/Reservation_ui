import React from 'react'
import Button  from 'react-bootstrap/Button'
import './Top.css'

const Top = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

  return (
    <div className='top-nav'>
        <h2 className="title">Dashboard</h2>
        <div className="buttons">
            <Button variant="secondary">Previous</Button>
            <Button variant="secondary">Today</Button>
            <Button variant="secondary">Next</Button>
        </div>
        <p className="text">Reservation for {`${day}/${month}/${year}`}</p>
    </div>
  )
}

export default Top