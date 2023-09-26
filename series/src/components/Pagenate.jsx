import React from 'react'
import ReactPaginate from 'react-paginate'
import "./Pagenate.css"
const Pagenate = ({pageNumber,setPageNumber,info}) => {
  return (
    <ReactPaginate 
    className="pagination justify-content-center gap-4 my-4" 
    nextLabel="Next"
    previousLabel="Prev "
    nextClassName='btn btn-primary'
    previousClassName='btn btn-primary'
    pageClassName='page-item'
    pageLinkClassName='page-link'
    activeClassName='active'
    forcePage={pageNumber===1?0:pageNumber-1}
    onPageChange={(data)=>{setPageNumber(data.selected+1)}}
    pageCount={info?.pages} 
    />
  )
}

export default Pagenate