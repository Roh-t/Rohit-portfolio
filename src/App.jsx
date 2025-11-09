import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import Spotify from "./pages/Spotify";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
              </>
            }
          />

          {/* New Spotify Route */}
          <Route path="/spotify" element={<Spotify />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
