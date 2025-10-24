import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PastorsCorner from './pages/PastorsCorner';
import Ministries from './pages/Ministries';
import Events from './pages/Events';
import Sermons from './pages/Sermons';
import Blog from './pages/Blog';
import Connect from './pages/Connect';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import PrayerRequest from './pages/PrayerRequest';
import Chatbot from './components/Chatbot';
import { ThemeProvider } from './contexts/ThemeContext';
import Gallery from './pages/Gallery';
import Livestream from './pages/Livestream';
import SpiritualGrowth from './pages/SpiritualGrowth';
import ScrollToTopButton from './components/ScrollToTopButton';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './components/DashboardLayout';
import { UserProvider } from './contexts/UserContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const PublicLayout: React.FC<{
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}> = ({ isLoggedIn, setIsLoggedIn }) => (
  <div className="site-background font-open-sans text-slate-700 dark:text-slate-300 min-h-screen flex flex-col">
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
    <Chatbot />
    <ScrollToTopButton />
  </div>
);

const AppContent: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/about" element={<About />} />
        <Route path="/pastors-corner" element={<PastorsCorner />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/spiritual-growth" element={<SpiritualGrowth />} />
        <Route path="/prayer" element={<PrayerRequest />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/livestream" element={<Livestream />} />
      </Route>

      {/* Protected Dashboard Routes */}
      <Route
        path="/dashboard"
        element={
          isLoggedIn ? (
            <DashboardLayout setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      >
        <Route index element={<Dashboard setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="about" element={<About />} />
        <Route path="pastors-corner" element={<PastorsCorner />} />
        <Route path="ministries" element={<Ministries />} />
        <Route path="events" element={<Events />} />
        <Route path="sermons" element={<Sermons />} />
        <Route path="blog" element={<Blog />} />
        <Route path="connect" element={<Connect />} />
        <Route path="contact" element={<Contact />} />
        <Route path="donate" element={<Donate />} />
        <Route path="spiritual-growth" element={<SpiritualGrowth />} />
        <Route path="prayer" element={<PrayerRequest />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="livestream" element={<Livestream />} />
      </Route>
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ThemeProvider>
        <UserProvider>
          <AppContent />
        </UserProvider>
      </ThemeProvider>
    </HashRouter>
  );
};

export default App;
