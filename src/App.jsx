import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Notes from "./pages/notes/Notes";
import Youtube from "./pages/youtube/Youtube";
import Codefile from "./pages/codefile/Codefile";
import Projects from "./pages/projects/Projects";
import Navbar from "./components/navbar/Navbar";
import Box from "./components/firstbox/Box";
import Tech from "./components/tech/Tech";
import Courses from "./components/courses/Courses";
import Learnings from "./pages/learnings/Learnings";

const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden text-white bg-orange-100">
        {/* Navbar*/}
        <Navbar />
        
        {/* Defining Routes for navigation */}
        <Routes>
          {/* Pages */}
          {/* Defining all the routes: */}
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/codefile" element={<Codefile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/learnings" element={<Learnings />} />
          {/* Default UI components */}
          <Route 
            path="*" 
            element={
              <>
                <Box />
                <Tech />
                <Courses />
              </>
            } 
          />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
