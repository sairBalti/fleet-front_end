import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Drivers from "./pages/Drivers";
import Create from "./crudoperation/Create";
import Update from "./crudoperation/Update";
import Read from "./crudoperation/Read";
import { BrowserRouter } from "react-router-dom";
function App() {


  return (

    <Routes>
      <Route element = {<Layout/>}>
        <Route exact path="/" element={<p>asdfasdfasdf </p>}></Route>
        <Route path="/drivertable" element={<Drivers/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/update:id' element={<Update/>}></Route>
        <Route path='/read:id' element={<Read/>}></Route>
      </Route>
    </Routes>
   
  )
}

export default App
