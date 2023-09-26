import React from 'react'

const Search = ({setPageNumber,setSearch}) => {
  return (
    <form action="" className='search_form flex-sm-row align-items-center  flex-column   d-flex  justify-content-center gap-4 mb-5  '>
        
        <input type="text" onChange={e=>{
            setPageNumber(1)
            setSearch(e.target.value)
            }} 
            placeholder='Search for charecters...' className='search_input' />
        <button onClick={(e) => {
            e.preventDefault();
        }} className='btn btn-primary fs-4' >Search</button>

    </form>
  )
}

export default Search