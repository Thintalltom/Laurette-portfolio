import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Routes, Route } from "react-router-dom";
import Essay from "./Route/Essay";
import Fiction from "./Route/Fiction";
import Opportunity from "./Route/Opportunity";
import Nonfiction from "./Route/Nonfiction";
import Poem from "./Route/Poem";
import Publications from "./Route/Publications";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <div className="md:w-screen md:h-screen bg-zinc-950 font-sans xs:h-screen xs:h-screen flex justify-center items-center ">
            <PropagateLoader
              color={"#ffffff"}
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/essay" element={<Essay />} />
              <Route path="/fiction" element={<Fiction />} />
              <Route path="/nonfiction" element={<Nonfiction />} />
              <Route path="/opportunity" element={<Opportunity />} />
              <Route path="/poem" element={<Poem />} />
              <Route path="/publication" element= {<Publications />} />
            </Routes>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
