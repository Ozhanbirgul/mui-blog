import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BlogDetail from "./pages/BlogDetail"; 
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
