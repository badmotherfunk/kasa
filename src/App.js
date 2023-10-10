import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Accomodation from "./pages/Accomodation/Accomodation"
import Error from "./pages/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";

function App(id) {

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/kasa" element={<Home />} />
        <Route path="/accomodation/:id" element={<Accomodation />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
