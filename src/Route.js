import LoginPage from './Komponente/LoginPage';
import HomePage from './Komponente/HomePage';
import API from './Komponente/API'
import Graph from './Komponente/GraphPage';
import Spring from './Komponente/Spring';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function MyRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/spring" element={<Spring/>} />
      <Route path="/table-page" element={<HomePage/>} />
      <Route path="/graphic-page" element={<Graph/>} />
      <Route path="/api-page" element={<API/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
