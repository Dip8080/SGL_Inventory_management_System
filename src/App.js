
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './DashBoard';
import Home from './Home/Home';

function App() {
  
  // event change
  
  // ...................................>
  return (
    <div className="App">
      
    <Routes>
    
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>


    </Routes>
      
    </div>
    
  );
}

export default App;
