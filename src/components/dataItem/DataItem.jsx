import React from 'react'
import Card from 'react-bootstrap/Card';
import './dataItem.css'
function DataItem({title,desc,number}) {
  return (
    <div>
 <Card className='mb-5'>
      <Card.Body className='d-flex flex-column gap-2'>
        <h3 className='dataNumber rounded-circle d-flex align-items-center justify-content-center bg-gray ms-2 mt-2'>{number}</h3>
        <Card.Title className='fs-2 ms-2 pt-4'>{title}</Card.Title>
        <Card.Text className='fs-5 ms-2 pb-4' style={{color:'rgb(150, 150, 150)'}}>
          {desc}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default DataItem
