import './App.css';
import Home from './component/Home';
import ManageData from './component/ManageData';
import CustomNavbar from './component/CustomNavbar';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <BrowserRouter>
    <GlobalProvider>

      <CustomNavbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/manage-data' element={<ManageData/>}/>
      </Routes>
    </GlobalProvider>
      
    </BrowserRouter>
  );
}

export default App;
