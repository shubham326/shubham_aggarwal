import React from 'react';
import About from './components/about/about';
import Header from './components/Header/header';
import Contact from './components/contact/contact';
import Exp from './components/experinece/exp';
import Testmon from './components/testmonial/testmon';
import Nav from './components/Nav/nav';
import Footer from './components/footer/footer';
import Services from './components/services/services';
import Portfolio from './components/portfolio/portfolio';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Exp />
      <Services />
      <Portfolio />
      <Testmon />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
