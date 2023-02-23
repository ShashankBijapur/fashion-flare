import './App.css';
import AllRoutes from './routes/AllRoutes';
import Navbar from './routes/Navbar';
import { useMediaQuery } from '@chakra-ui/react'
import MobileNav from './components/MobileNav';

function App() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  return (
    <div className="App">
      {isLargerThan800?<Navbar />:<MobileNav />}
      <AllRoutes/>

    </div>
  );
}

export default App;
