import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Plans from './pages/Plans';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planos" element={<Plans />} />
      </Routes>
    </BrowserRouter>
  );
}

