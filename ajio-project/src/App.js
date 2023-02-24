import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { useMediaQuery } from "@chakra-ui/react";
import MobileNav from "./component/Navbar/MobileNav";
import AllRoutes from "./Routes/AllRoutes";
import axios from "axios";
import { useEffect } from "react";
import { getReduxData } from "./redux/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  // const fetchData = () => {
  //   axios.get(`http://localhost:8080/Data`).then((res) => {
  //     dispatch(getReduxData(res.data));
  //   });
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <div className="App">
      {isLargerThan800 ? <Navbar /> : <MobileNav />}
      <AllRoutes />
    </div>
  );
}

export default App;
