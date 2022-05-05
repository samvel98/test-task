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
  FAQ,
  NewFAQ,
  EditFAQ,
  Giftbook,
  NewTeamMember,
  EditTeamMember,
} from './components';
import { Orders } from './components/orders';
import { EditGiftbox } from './components/giftboxes/edit';
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
            <Route element={<EditGiftbox />} path="edit/:id" />
          </Route>
          <Route path='giftbooks' >
            <Route index element={<Giftbook />} />
          </Route>
          <Route element={<Orders />} path='orders' />
          <Route path='team-members' >
            <Route index element={<TeamMembers />} />
            <Route path="new" element={<NewTeamMember />} />
            <Route path="edit/:id" element={<EditTeamMember />} />
          </Route>
          <Route element={<Settings />} path='settings' />
          <Route path='FAQ' > 
            <Route index element={<FAQ />} />
            <Route element={<NewFAQ />} path='new' />
            <Route element={<EditFAQ />} path='edit/:id' />
          </Route>
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
