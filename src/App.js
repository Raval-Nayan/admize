import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home/>}></Route>
     
    
   </Routes>
 </BrowserRouter>


   </>

  );
}

export default App;
