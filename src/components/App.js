import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home/Home"
import Accomodation from "../pages/Accomodation/Accomodation"
import Error from "../pages/Error/Error";
import Banner from "./Banner/Banner";
import About from "../pages/About/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
      </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accomodation/:id" element={<Accomodation />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} />
        </Routes>
    </div>
  );
}

export default App;
