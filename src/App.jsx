import { Route, Routes } from 'react-router-dom';
import Menu from './components/menu';
import HomePage from './components/homepage';
import DriftPage from './components/driftpage';
import TimeAttackPage from './components/timeattackpage';
import ForzaPage from './components/forzapage';

export default function App() {
  return (
    <>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </>
  );
}
