import React, { useCallback } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Login, UsersPage, Register } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser, setCurrentUser } from './slices/current-user.slice'

function App() {
  const { currentUser: user } = useSelector(currentUser);
  return user ? <NavigationRoutes /> : <NavigateLoginPage />
}

function NavigationRoutes() {
  const dispatch = useDispatch();

  const handleLogOut = useCallback(() => {
    return dispatch(setCurrentUser(''))
  }, [dispatch]);

  return (
    <div>
      <div style={{ padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1>Application</h1>
        <button
          style={{
            background: '#dc3545',
            borderRadius: 5,
            padding: '10px 20px',
            width: 'fit-content',
            border: 0,
            color: 'white',
            cursor: 'pointer'
          }}
          onClick={handleLogOut}
        >
          Log Out
        </button>
      </div>
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
        <Route element={<Register />} path="/register" />
        <Route
          element={<Navigate to="/login" />}
          path="*"
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
