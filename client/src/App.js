import { Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Main from './views/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Main />} path="/products" default />
        <Route element={<ProductDetail />} path="/products/:id" />
      </Routes>
    </div>
  );
}

export default App;
