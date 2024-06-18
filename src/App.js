import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

import { NavBar } from './components/NavBar';
import Footer from './components/Footer';
import Carousel  from './components/Carousel';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavBar/>}>
              
              
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
