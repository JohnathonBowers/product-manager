import { Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import ProductUpdate from './components/ProductUpdate';
import Main from './views/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Main />} path="/products" default />
        <Route element={<ProductDetail />} path="/products/:id" />
        <Route element={<ProductUpdate />} path="/products/edit/:id" />
      </Routes>
    </div>
  );
}

export default App;