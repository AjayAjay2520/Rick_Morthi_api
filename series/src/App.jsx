import React,{useState,useEffect} from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Pagenate from './components/Pagenate';
import Search from './components/Search';
import Navbar from "../src/components/Nav_folder/Navbar"

import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Episode from "./components/Nav_folder/Episode"
import Location from "./components/Nav_folder/Location"
import Show_cards from './components/Show_cards';
function App(){
  return(
    <Router>
      <div className="App">
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/> }></Route>
        <Route path='/:id' element={<Show_cards/> }></Route>
        
        <Route path='/episodes' element={<Episode/> }></Route>
        <Route path='/episodes/:id' element={<Show_cards/> }></Route>

        <Route path='/location' element={<Location/> }></Route>
        <Route path='/location/:id' element={<Show_cards/> }></Route>
      </Routes>
    </Router>
  )
}

const Home=() => {
  let [pageNumber,setPageNumber]=useState(1);
  let [search,setSearch]= useState("")
  let [status,setstatus]=useState("")
  let [gender,setgender]=useState("")
  let [species,setSpecies]=useState("")

  // API Fetch Section................

  let [fetchdata,updatedata]=useState([])
  console.log(pageNumber)
  let api=`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
 
  let{info,results}=fetchdata
  useEffect(()=>{
    (async function(){
    let data= await fetch(api).then((res)=>res.json())
    updatedata(data)
   })();

  },[api])
// .....................................................
  
  return (
    <>
    <div className="App">
      <h1 className='text-center mb-4' >Characters</h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      
      <div className="container">
        <div className="row">
            <Filter 
              setSpecies={setSpecies}
              setstatus={setstatus} 
              setPageNumber={setPageNumber}
              setgender={setgender}
            />                   
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />  
            </div>       
          </div>
        </div>
        <Pagenate info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
    </div>
    </>
  )
}

export default App
