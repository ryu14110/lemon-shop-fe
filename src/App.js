import { Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import DeliveryPage from './pages/DeliveryPage';
import ItemsPage from './pages/ItemsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import Bags from './pages/bags';
import Footwear from './pages/footwear';
import Accessories from './pages/accessories';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/items/:itemId" element={<ItemsPage />} />
      <Route path="/bags" element={<Bags />} />
      <Route path="/footwear" element={<Footwear />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/delivery" element={<DeliveryPage />} />
    </Routes>
  );
};
export default App;
