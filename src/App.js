import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Service />} path="/service" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<SignUpForm />} path="/signup" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
