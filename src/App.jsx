import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import Home from './pages/Home';
import MainLayout from './pages/MainLayout';
import NotFound from './pages/system/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<MainLayout />}>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
