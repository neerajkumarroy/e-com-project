import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/login';
import AddProduct from './components/AddProduct';
import ListProduct from './components/Products';
import UpdateProduct from './components/UpdateProduct';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>

        <Route element={<PrivateComponent />}>
        <Route path='/' element={<ListProduct />} />
        <Route path='/add' element={<AddProduct />} />
        <Route path='/update/:id' element={<UpdateProduct/>} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/logout' element={<h1>This is PLogout Components</h1>} />
        </Route>
        
        <Route path='signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
