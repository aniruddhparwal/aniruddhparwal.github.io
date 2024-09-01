import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Pages/Home'
import FamilyTree from './Pages/FamilyTree'
import { Navbar } from "./components";

const App = () => {
  return (
      <div className='relative z-0 bg-primary'>
          <BrowserRouter>
            <Navbar/>
                <Routes>
                  <Route path='/' element ={<Home/>}/>
                  <Route path='/family-tree' element ={<FamilyTree/>}/>
                </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;
