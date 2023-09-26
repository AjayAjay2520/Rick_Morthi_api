import React,{useState,useEffect } from 'react'
import { useParams } from 'react-router-dom' 

const Show_cards = () => {
  let {id} = useParams()
  let [fetchdata,updateFetchData ] = useState([])
  let{name,image,location,origin,gender,species,status,type} =fetchdata

  let api=`https://rickandmortyapi.com/api/character/${id}`
  useEffect(()=>{
    (async function(){
    let data= await fetch(api).then((res)=>res.json())
    updateFetchData(data)
   })();

  },[api])

  
  return (
    <div className='container d-flex justify-content-center'>
      <div className="d-flex flex-column gap-3  ">
        <h1 className='text-center'>{name}</h1>
        <img src={image} className='image-fluid '/>

        {(()=>{
          if (status==="Dead"){
              return(
                  <div className="badge bg-danger fs-5">{status}</div>
              );
          }else if(status==="Alive"){
              return(
                  <div className="badge bg-success fs-5">{status}</div>
              );
          }else{
              return(
                  <div className="badge bg-secondary fs-5">{status}</div>
              );
          }
        })()}  

        <div className="content">
          <div className="">
            <span className='fw-bolder' >Gender:</span> {gender}
          </div>

          <div className="">
            <span className='fw-bolder' >Location:</span> {location?.name}
          </div>
          
          <div className="">
            <span className='fw-bolder' >Origin:</span> {origin?.name}
          </div>

          <div className="">
            <span className='fw-bolder' >Species:</span> {species}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Show_cards