import React from 'react'
import { Accordion} from "react-bootstrap";
import Filter_btn from './Filter_btn';

const Speices = ({setSpecies,setPageNumber}) => {
  let species=[     
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",]
  return (
    
        <Accordion.Item eventKey="1">
            <Accordion.Header>
            Species
            </Accordion.Header>
            <Accordion.Body className='d-flex flex-wrap gap-3 '>
                {species.map((items,index)=>(
                    <Filter_btn 
                      task={setSpecies}
                      setPageNumber={setPageNumber}
                      key={index} 
                      name="species" 
                      index={index} 
                      items={items} 
                     />
                ))}    
            </Accordion.Body>
        </Accordion.Item>
   
  )
}

export default Speices