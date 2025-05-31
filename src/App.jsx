import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLanguage } from './context/LanguageContext';
import { useEffect } from 'react';


function App() {
  const { language } = useLanguage();

  useEffect(() => {
    const message = language === "tr" ? "👋 Hoşgeldiniz!" : "👋 Welcome!";
    toast(message);
  }, [language]);

  return (
    <div className={"font-inter dark:bg-dark-bg bg-white"}>
    <Header/>
    <Hero/>
    <Skills/>
    <Profile/>
    <Projects/>
    <Footer/>
    <ToastContainer
        position="top-center"
        autoClose={3000}
      />
    </div>
  )
}

export default App;
