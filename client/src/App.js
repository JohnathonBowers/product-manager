import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Main />} path="/home" default />
      </Routes>
    </div>
  );
}

export default App;
