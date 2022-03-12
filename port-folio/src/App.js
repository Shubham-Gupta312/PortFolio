import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About'
import Experience from './Component/Experience/Experience'
import Skill  from './Component/Skills/Skill'
import Project from './Component/Project/Project'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'

function App() {
  return (
    <>
    <Home/>
    <Navbar/>
    <About/>
    <Experience/>
    <Skill/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
