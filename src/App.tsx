import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import SettingsPage from '@/pages/SettingsPage';

const App: FC = () => (
  <Routes>
    <Route element={<SettingsPage />} path="/" />
  </Routes>
);

export default App;
