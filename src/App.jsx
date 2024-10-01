import style from './App.module.css';
import './index.css';
import Nav from './components/navbar';
import Hero  from './components/hero';
import About from'./components/about';
import Experience  from './components/experience';
import Project from './components/project';
import Contact from './components/contact.jsx';


function App() {


  return (
    <>
      <div className={style.App}>
        <Nav />
        <Hero/>
        <About/>
        <Experience/>
        <Project/>
        <Contact/>
      </div>
    </>
  )
}

export default App
