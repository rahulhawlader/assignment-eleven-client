import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Inventore from './Pages/Inventore/Inventore';

import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/Notfound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import DressDetails from './Pages/DressDetails/DressDetails';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/dress/:dressId" element={<DressDetails></DressDetails>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/myInventore" element={<Inventore></Inventore>}></Route>

        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
