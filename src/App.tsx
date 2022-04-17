import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Login, UsersPage, Home, Giftboxes } from './components';
import { useSelector } from 'react-redux';
import { currentUserToken } from './features/current-user/current-user.slice'

function App() {
  const token = useSelector(currentUserToken);
  return <NavigationRoutes />;
  return token ? <NavigationRoutes /> : <NavigateLoginPage />
}

function NavigationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="users">
            <Route index element={<UsersPage />} />
            {/* <Route path=":userId" element={<Single />} /> */}
            {/* <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            /> */}
          </Route>
          <Route path='giftboxes' element={<Giftboxes />} />
          {/* <Route element={<UsersPage />} path="/users" /> */}

          <Route
            element={<Navigate to="/" />}
            path="*"
          />
        </Route>
      </Routes>
    </BrowserRouter>
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
