import { Route, Routes } from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import {MatchesPage} from './pages/MatchesPage';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/matches" element={<MatchesPage />} />
    </Routes>
  );
}
