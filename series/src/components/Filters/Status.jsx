import React from 'react'
import {Accordion } from "react-bootstrap";
import Filter_btn from './Filter_btn';

const Status = ({setstatus,setPageNumber}) => {
    let status=["Alive","Dead","Unknown"]
  return (
   
        <Accordion.Item eventKey="0">
            <Accordion.Header>
            Status
            </Accordion.Header>
            <Accordion.Body className='d-flex flex-wrap gap-3'>
                {status.map((items,index)=> (
                     <Filter_btn 
                     task={setstatus}
                      setPageNumber={setPageNumber}
                      key={index} 
                      name="status" 
                      index={index} 
                      items={items} />
                ))}    
            </Accordion.Body>
        </Accordion.Item>
    
  )
}

export default Status