import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Empregister from './component/Empregister';
import Search from './component/Search';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './component/View';
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>

      <Route path="/" exact element={<Empregister/>}/>
      <Route path="/search" exact element={<Search/>}/>
      <Route path="/view" exact element={<View/>}/>

      




    </Routes>
    
    
    
    
    
    
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
