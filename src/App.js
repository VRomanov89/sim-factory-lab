import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Technologies from './pages/Technologies';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import './App.css';
import SEOHead from './components/SEOHead';

function App() {
  return (
    <Router>
      <div className="App">
        <SEOHead />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<><SEOHead title="Home" description="A community-driven project for learning and understanding architectures and technologies within the modern manufacturing stack." /><Home /></>} />
            <Route path="/about" element={<><SEOHead title="About" description="Learn about the Sim Factory Lab team, our mission, and our approach to modern manufacturing and industrial automation." /><About /></>} />
            <Route path="/technologies" element={<><SEOHead title="Technologies" description="Explore the technologies powering modern manufacturing, from PLCs and SCADA to cloud analytics and visualization." /><Technologies /></>} />
            <Route path="/blog" element={<><SEOHead title="Blog" description="Community updates, shared learning, and progress on building the modern manufacturing stack." /><Blog /></>} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
