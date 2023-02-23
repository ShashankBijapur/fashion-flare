
import './App.css';
import AdminPage from './component/Admin/Admin';
import Home from './component/Home/Home';
import Kids from './component/Kids/Kids';
import Mens from './component/Mens/Mens';
import SingleCardPage from './component/Womens/SingleCardPage';

import Womens from './component/Womens/Womens';
import AllRoutes from './Routes/AllRoutes';



function App() {
  return (
    <div className="App">
      <AllRoutes/>
      {/* <Home/> */}
      {/* <AdminPage/> */}
      {/* <Mens/> */}
      {/* <Womens/> */}
      {/* <Kids/> */}
      {/* <SingleCardPage/> */}
    
    </div>
  );
}

export default App