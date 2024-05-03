import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/about';
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path = '/about' element = {<About/>}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
