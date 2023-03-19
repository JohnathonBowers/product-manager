import { Routes, Route, Navigate } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import ProductUpdate from './components/ProductUpdate';
import Main from './views/Main';

function App() {
  return (
    <div>
      <Routes>
        {/* I'm using code from https://www.copycat.dev/blog/react-router-redirect/ below for the Route that redirects from the "/" route to the "/products" route */}
        <Route element={<Navigate to="/products" />} path="/" />
        <Route element={<Main />} path="/products" default />
        <Route element={<ProductDetail />} path="/products/:id" />
        <Route element={<ProductUpdate />} path="/products/edit/:id" />
      </Routes>
    </div>
  );
}

export default App;