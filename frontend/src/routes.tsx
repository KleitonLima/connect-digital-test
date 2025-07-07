import { Route, Routes } from 'react-router-dom';
import SaleCheckout from './pages/SaleCheckout/SaleCheckout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SaleCheckout />} />
    </Routes>
  );
};

export default AppRoutes;
