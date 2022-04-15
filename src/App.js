import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home.js';
import Contact from './components/pages/Contact.js';
import Company from './components/pages/Company.js';
import NewProject from './components/pages/NewProject.js';
import Projects from './components/pages/Projects.js';

import Container from './components/layout/Container.js';
import NavBar from './components/layout/NavBar.js';
import Footer from './components/layout/Footer.js';

function App() {
  return (
    <Router>
      <NavBar />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects.js" element={<Projects />}/>
            <Route path="/Contact.js" element={<Contact />} />
            <Route path="/Company.js" element={<Company />} />
            <Route path="/NewProject.js" element={<NewProject />} />
          </Routes>
        </Container>
      <Footer />
    </Router>
  );
}

export default App;
