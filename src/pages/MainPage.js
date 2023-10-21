import ProductList from '../components/ProductList';
import MainBar from '../components/MainBar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

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
