import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import HowToHelp from './components/HowToHelp';
import Quote from './components/Quote';
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
        <HowToHelp />
        <Quote />
      </main>
      <Footer />
    </>
  );
}

export default App;
