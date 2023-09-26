import React from 'react'
import Status from './Filters/Status';
import Gender from './Filters/Gender';
import Speices from './Filters/Speices';
import { Accordion } from 'react-bootstrap';

const Filter = ({setstatus,setPageNumber,setgender,setSpecies}) => {
  let clear=()=>{
    setstatus("")
    setPageNumber("")
    setgender("")
    setSpecies("")
    window.location.reload(false)

  }
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mp-2">Filter</div>
      <div onClick={clear} style={{cursor:"pointer"}} className="text-center text-primary text-decoration-underline mb-4">Clear Filters</div>
        
        <Accordion className="mt-3" >
          <Status setstatus={setstatus} setPageNumber={setPageNumber}/>
          <Speices setSpecies={setSpecies} setPageNumber={setPageNumber}/>
          <Gender setgender={setgender} setPageNumber={setPageNumber}/>
        </Accordion>

    </div>
  )
}

export default Filter