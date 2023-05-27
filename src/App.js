import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import DetailsPage from './components/DetailsPage';
import Cart from './components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalPage from './components/ModalPage';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/detail/:id" element={<DetailsPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/modal/:id" element={<ModalPage />} />
    </Route>
  </Routes>
);
export default App;
