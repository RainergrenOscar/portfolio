import {Route, Routes} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Layout from './components/layouts/Layout';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import Resume from './pages/Resume';


function App() {
  return (
    <>
    <Layout>
        <ScrollToTop />
      <Routes>
       <Route path="/" element={<LandingPage/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="resume" element={<Resume/>}/>
      </Routes>
      </Layout>
      <Footer/>
    </>
  );
  
}

export default App;
