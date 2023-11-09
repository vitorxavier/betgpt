import React from 'react';
import {AppRouter} from './AppRouter';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ paddingTop: '60px' }}>
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;