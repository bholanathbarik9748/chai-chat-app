import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/app.css';

const Auth = lazy(() => import('./pages/Auth/AuthPage'));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Auth />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
