import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {
  // Login,
  UsersPage,
  Home,
  Giftboxes,
  NewGiftbox,
  TeamMembers,
  Subscrib,
  Settings,
  FAQ
} from './components';
import { Orders } from './components/orders';
// import { currentUserToken } from './features/current-user/current-user.slice'

function App() {
  // const token = useSelector(currentUserToken);
  return <NavigationRoutes />;
  // return token ? <NavigationRoutes /> : <NavigateLoginPage />
}

function NavigationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route element={<UsersPage />} path="users" />
          <Route path='giftboxes' >
            <Route index element={<Giftboxes />} />
            <Route element={<NewGiftbox />} path="new" />
          </Route>
          <Route element={<Orders />} path='orders' />
          <Route element={<TeamMembers />} path='team-members' />
          <Route element={<Settings />} path='settings' />
          <Route element={<FAQ />} path='FAQ' />
          <Route element={<Subscrib />} path='subscriptions' />
          <Route
            element={<Navigate to="/" />}
            path="*"
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// function NavigateLoginPage() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<Login />} path="/login" />          
//         <Route
//           element={<Navigate to="/login" />}
//           path="*"
//         />
//       </Routes>
//     </BrowserRouter>
//   )
// }

export default App;
