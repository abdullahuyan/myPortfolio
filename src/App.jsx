import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skils from './components/Skills';
import Footer from './components/Footer';


function App() {

  return (
    <div className={`App dark:bg-dark-bg bg-white}`}>
    <Header/>
    <Hero/>
    <Skils/>
    <Profile/>
    <Projects/>
    <Footer/>
    </div>
  )
}

export default App;
