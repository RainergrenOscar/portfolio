import { BrowserRouter, Route, Routes,NavLink,Navigate } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';
function App() {
  return (
    <Layout>
        <Routes>
        <Route path="/test-1" element={<Test1 />} />
        <Route path="/test-2" element={<Test2/>}/>
        </Routes>
    </Layout>
  );
}

export default App;
