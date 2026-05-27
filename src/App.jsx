import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Benefits from './components/Benefits';
import HowToHelp from './components/HowToHelp';
import Leadership from './components/Leadership';
import Testimonials from './components/Testimonials';
import Quote from './components/Quote';
import DonatePage from './components/DonatePage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <WhatWeDo />
        <Benefits />
        <HowToHelp />
        <Leadership />
        <Testimonials />
        <Quote />
        <DonatePage />
      </main>
      <Footer />
    </>
  );
}

export default App;
