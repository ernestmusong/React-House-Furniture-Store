import { Route, Routes } from 'react-router-dom';
import Layout from 'Components/Layout';
import Home from 'Components/Home';
import DetailsPage from 'Components/DetailsPage';
import Cart from 'Components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalPage from 'Components/ModalPage';
import Footer from 'Components/Footer';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="detail/:id" element={<DetailsPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="modal/:id" element={<ModalPage />} />
      </Route>
    </Routes>
    <Footer />
  </>
);
export default App;
