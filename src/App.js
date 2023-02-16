import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Productpage from './pages/Productpage';
import Contactpage from './pages/Contactpage';






function App() {
  return (
    
    <Router>

      <div className='App'>
        <Routes>
          <Route path = "/" element = {<Homepage />} />
          <Route path= "/about" element  = {<Aboutpage /> } />
          <Route path= "/product" element = {<Productpage />} />
          <Route path= "/contact" element = {<Contactpage />} />
          
        </Routes>

      </div>



    </Router>
    


  );
}

export default App;
