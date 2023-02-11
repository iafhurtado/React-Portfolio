import React from 'react';
import NavBar from './sections/navbar/NavBar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import './App.css';

const App = () => {
  return (
    <main>
      <NavBar />
      <Header />
      <About />
      <FAQs />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  );
}

export default App;