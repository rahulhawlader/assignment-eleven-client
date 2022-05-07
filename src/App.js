import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/Notfound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import DressDetails from './Pages/DressDetails/DressDetails';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import MangeInventore from './Pages/Home/ManageInventori/MangeInventore';
import AddItems from './Pages/Home/AddItems/AddItems';
import MyItems from './Pages/Home/MyItems/MyItems';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/dress/:dressId" element={<RequireAuth>
          <DressDetails></DressDetails>
        </RequireAuth>}></Route>
        <Route path="/About" element={<About></About>}></Route>

        <Route path="/manageInventore" element={
          <RequireAuth>
            <MangeInventore></MangeInventore>
          </RequireAuth>
        }></Route>

        <Route path="/myItems" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>}>

        </Route>
        <Route path="/add" element={

          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>}
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
