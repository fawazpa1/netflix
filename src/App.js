
import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/RowPost/Rowpost';
import {originals,actions} from './link' 
function App() {
  return (

   <div>
    
      <NavBar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={actions} title='Actions' isSmall/>
    
   </div>
  );
}

export default App;
