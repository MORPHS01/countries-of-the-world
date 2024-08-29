import './App.css'
import EachCountry from './EachCountry';
import { Route, Routes } from "react-router-dom";
import Structure from './Structure';



function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Structure/>} />
          <Route path="/country/:id" element={<EachCountry/>}/>
      </Routes>
    </>
    
  )
}

export default App
