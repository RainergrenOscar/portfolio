import { BrowserRouter, Route, Routes,NavLink,Navigate } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  return (
    <Layout>
      <Routes>
       <Route path="/" element={<LandingPage/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="resume" element={<Resume/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
