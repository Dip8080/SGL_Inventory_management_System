
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './DashBoard';
import Home from './Home/Home';
import Medium_Home from './Medium/Medium_Home';
import DashboardTable_mid from './Medium/DashboardTable_mid';
import Dashboard_med from './Medium/Dashboard_med';

function App() {
  
  // event change
  
  // ...................................>
  return (
    <div className="App">
      
    <Routes>
    
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
    <Route path='/medium' element={<Medium_Home></Medium_Home>}></Route>
    <Route path='/medium/dashboardmid' element={<Dashboard_med></Dashboard_med>}></Route>


    </Routes>
      
    </div>
    
  );
}

export default App;
