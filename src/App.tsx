
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import DrawerAppBar from './components/Appbar';
import ProductPage from './components/ProductPage';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
   <DrawerAppBar/>
    <Routes>
      <Route path='/login' element={<Login/>}/> 
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/product' element={<ProductPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
    
    
  );
}

export default App;