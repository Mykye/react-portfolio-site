
import './App.css';
import Contact from './Components NavBar/Contact/Contact';
import Experience from './Components NavBar/Experience/Experience';
import Footer from './Components NavBar/Footer/Footer';
import Intro from './Components NavBar/Intro/Intro.jsx';
import NavBar from './Components NavBar/NavBar/NavBar.jsx';
import Portfolio from './Components NavBar/Portfolio/Portfolio';
import Services from './Components NavBar/Servisec/Servisec.jsx';
import Testimonials from './Components NavBar/Testimonials/Testimonials';
import Works from './Components NavBar/Works/Works';
import {themeContext} from '../src/Context';
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div 
      className="App"
      style={{
      background: darkMode ? 'gray': '',
      color : darkMode ? 'white': ''
    }}>
      <NavBar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
