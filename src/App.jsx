"use client"
import WebApp from "@twa-dev/sdk"
import React, { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './body/home.jsx';
import Footer from './footer/footer.jsx';
import Wallet from './components/wallet/wallet.jsx';
import Setting from './components/settings/settings.jsx';
import Task from './components/missions/task.jsx';
import Invite from './components/invite/invite.jsx';





import './App.css';





function App() {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe)
      localStorage.setItem('user', JSON.stringify(WebApp.initDataUnsafe.user))
    }



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/task" element={<Task />} />
        <Route path="/invite" element={<Invite />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
