import './App.css';
import Greeting from './Components/Greet/Greeting';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/home';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Educations from './Components/Education/Educations';
import Projects from './Components/Projects/Projects';
import Email from './Components/Email/Email';
import {BrowserRouter,Route,Routes} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/*" element={<Greeting/>} />
      <Route path="/nav" element={<Navbar/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Education" element={<Educations/>} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/Contact" element={<Email/>} />
      <Route path="/Resume" element={<Resume/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
