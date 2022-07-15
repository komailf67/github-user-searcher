import { Navigate, Route, Routes } from 'react-router-dom';
import SearchPage from '../pages/search';
import HistoryPage from '../pages/history';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/search" />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
}

export default Routing;
