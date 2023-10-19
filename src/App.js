import { Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import DeliveryPage from './pages/DeliveryPage';
import ItemsPage from './pages/ItemsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';

const App = () => {
  const selectAll = async () => {
    //async와 await로 비동기 지원
    alert("selectAll!");
    const result = await axios.get("/user");
    //http://localhost:4000/user인 서버에 데이터를 요청한다. 이 설정은 package.json의 proxy설정에 있음
    //요청한 데이터가 도착하면 result에 담는다.
    console.log(result);
  };

  return (
    <Routes>
      <Route path="/" element={<MainPage data={result} />} />
      <Route path="/items/:itemId" element={<ItemsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/delivery" element={<DeliveryPage />} />
    </Routes>
  );
};
export default App;
