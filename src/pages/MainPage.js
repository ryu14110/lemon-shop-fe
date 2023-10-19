import ProductList from '../components/main/ProductList';
import MainBar from '../components/MainBar';
import Footer from '../components/main/Footer';
import Sidebar from '../components/main/Sidebar';

//data는 app.js에서 받아온 db 자료이다.
function App(data) {
  console.log(data);
  return (
    <>
      <MainBar />
      <ProductList />
      <Footer />
    </>
  );
}
export default App;
