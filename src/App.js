import { BrowserRouter, Route, Routes,NavLink,Navigate } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="about" element={<About/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="resume" element={<Resume/>}/>
        </Routes>
    </Layout>
  );
}

export default App;
