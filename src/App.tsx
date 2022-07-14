import { Route, Routes } from 'react-router-dom';
import SearchPage from './pages/search';
import HistoryPage from './pages/history';

function App() {
  return (
    <Routes>
      <Route path="/search" element={<SearchPage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
}

export default App;
