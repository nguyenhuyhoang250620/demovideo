import './App.css';
import ResultScreen from './screen/Result';
import Home from './Home';
import React from 'react';
import { BrowserRouter , Route, Link, Routes } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route
        path="/"
        element={
          <React.Suspense>
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path="/single"
        element={
          <React.Suspense >
            <ResultScreen />
          </React.Suspense>
        }
      />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
