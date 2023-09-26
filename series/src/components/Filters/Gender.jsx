import React from 'react'
import {Accordion} from "react-bootstrap";
import Filter_btn from './Filter_btn';


const Gender = ({setPageNumber,setgender}) => {
  let gender=["female","male","genderless","unknown"]
  return (

        <Accordion.Item eventKey="2">
            <Accordion.Header>
            Gender
            </Accordion.Header>
            <Accordion.Body className='d-flex flex-wrap gap-3 '>
                {gender.map((items,index)=>(
                     <Filter_btn
                     task={setgender}
                     setPageNumber={setPageNumber}
                     key={index} 
                     name="gender" 
                     index={index} 
                     items={items} />
                ))}    
            </Accordion.Body>
        </Accordion.Item>
   
  )
}

export default Gender