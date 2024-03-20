
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import DrawerAppBar from './components/Appbar';

function App() {
  return (
    <>
    <BrowserRouter>
   <DrawerAppBar/>
    <Routes>
      <Route path='/login' element={<Login/>}/> 
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
    
  );
}

export default App;
