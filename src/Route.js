import LoginPage from './Komponente/LoginPage';
import HomePage from './Komponente/HomePage';
import API from './Komponente/API'
import Graph from './Komponente/GraphPage';
import Spring from './Komponente/Spring';
import Report from './Komponente/Report';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes'

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/spring" element={<Spring />} />
          <Route path="/table-page" element={<HomePage />} />
          <Route path="/graphic-page" element={<Graph />} />
          <Route path="/api-page" element={<API />} />
          <Route path="/report" element={<Report />} />
        </Route>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default MyRoutes;
