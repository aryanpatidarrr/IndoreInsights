import './App.css';
import React , {useEffect , useState} from 'react';
import {getPlaceData} from './api'
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import Temples from './components/Temples'
import { 
  BrowserRouter, 
  Routes,
  Route,
  // Link
 } from 'react-router-dom';
import Popular from './components/Popular';
import Waterfall from './components/Waterfall';
import Hotel from './components/Hotel';
import Rajwada from './components/Rajwada';
import About from './components/About/About';
import Reach from './components/Reach';
import Time from './components/Time';
import Restaurant from './components/Restaurant';

function App() {

  const [place , setPlace] = useState([]);

  useEffect(()=>{
     getPlaceData()
     .then((data)=>{
      console.log(data);
      setPlace(data);
     })
  } , [])
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route
        exact path="/" element ={<Home/>}>
      </Route>
      <Route exact path="/about" element ={<About/>} ></Route>
      <Route exact path = "/popular" element ={<Popular/>} ></Route>
      <Route exact path = "/temples" element ={<Temples/>} ></Route>
      <Route exact path = "/waterfall" element ={<Waterfall/>} ></Route>
      <Route exact path = "/hotels" element ={<Hotel/>} ></Route>
      <Route exact path = "/restaurants" element ={<Restaurant place={place}/>} ></Route>
      <Route exact path = "/rajwada" element ={<Rajwada/>} ></Route>
      <Route exact path = "/reach" element ={<Reach/>} ></Route>
      <Route exact path = "/Time" element ={<Time/>} ></Route>
      <Route exact path = "/explore" element ={<Explore/>} ></Route>
    </Routes>
    </BrowserRouter>
     </>
  );
}

export default App;
