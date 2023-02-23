import "./App.css";
import AllRoutes from './routes/AllRoutes';
import AdminPage from "./component/Admin/Admin";
import Home from "./component/Home/Home";
import Kids from "./component/Kids/Kids";
import Mens from "./component/Mens/Mens";
import SingleCardPage from "./component/Womens/SingleCardPage";
import Navbar from './routes/Navbar';
import { useMediaQuery } from '@chakra-ui/react'
import MobileNav from './components/MobileNav';

import Womens from "./component/Womens/Womens";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  return (
    <div className="App">
     {isLargerThan800?<Navbar />:<MobileNav />}
      <AllRoutes />

    </div>
  );
}

export default App;
