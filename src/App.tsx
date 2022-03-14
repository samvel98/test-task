import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Login, UsersPage } from './components';
import { useSelector } from 'react-redux';
import { currentUserToken } from './features/current-user/current-user.slice'

function App() {
  const token = useSelector(currentUserToken);
  return token ? <NavigationRoutes /> : <NavigateLoginPage />
}

function NavigationRoutes() {
  return (
    <div>
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<UsersPage />} path="/users" />
            
          <Route element={<div>profile</div>} path="/preferences" />            
          <Route
            element={<Navigate to="/users" />}
            path="*"
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function NavigateLoginPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />          
        <Route
          element={<Navigate to="/login" />}
          path="*"
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
