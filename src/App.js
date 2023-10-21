import { Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import DeliveryPage from './pages/DeliveryPage';
// import ItemsPage from './pages/ItemsPage';
import LoginForm from './pages/LoginPage';
import RegisterForm from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import ProductDetail from './pages/productDetail';
import ItemsPage from './pages/ItemsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/?category={}" element={<ItemsPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/delivery" element={<DeliveryPage />} />
    </Routes>
  );
};
export default App;
