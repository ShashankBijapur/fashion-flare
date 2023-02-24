import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { useMediaQuery } from "@chakra-ui/react";
import MobileNav from "./component/Navbar/MobileNav";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <div className="App">
      {isLargerThan800 ? <Navbar /> : <MobileNav />}
      <AllRoutes />
    </div>
  );
}

export default App;
