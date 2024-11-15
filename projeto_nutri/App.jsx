import { Routes, Route } from 'react-router-dom';
import Home from './src/components/Home.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}