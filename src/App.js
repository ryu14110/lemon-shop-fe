import ProductList from "./components/ProductList";
import MainBar from "./components/MainBar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const shopAll = () => {
    alert("selectAll");
    axios.get("/movies");
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link exact to="/">
              hello
            </Link>
          </li>
        </ul>
      </nav>
      <button className="shopall" onClick={shopAll}>
        버튼클릭
      </button>
      <MainBar />
      <Sidebar />
      <ProductList />
      <Footer />
    </>
  );
}
export default App;
