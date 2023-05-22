import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'components/Home';
import DetailsPage from 'components/DetailsPage';
import Cart from 'components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'components/Modal';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/detail/:id" element={<DetailsPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/modal" element={<Modal />} />
    </Route>
  </Routes>
);
export default App;
