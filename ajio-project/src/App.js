import "./App.css";
import Navbar from './component/Navbar/Navbar';
import { useMediaQuery } from '@chakra-ui/react'
import MobileNav from './component/Navbar/MobileNav';
import Womens from "./component/Womens/Womens";
import AllRoutes from "./Routes/AllRoutes";
<<<<<<< HEAD
=======
import Footer from "./component/Footer/Footer";
>>>>>>> f8d61fccb48f5746c3c82c0fb8c005dc651da915

function App() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <div className="App">
      {isLargerThan800 ? <Navbar /> : <MobileNav />}
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
