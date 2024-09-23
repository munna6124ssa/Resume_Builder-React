import ResumeTemplate from "./Pages/ResumeTemplate";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import BasicDetails from "./components/BasicDetails";
import About from "./components/About";
import EducationDetails from "./components/EducationDetails";
import ExperienceDetails from "./components/ExperienceDetails";
import ResumeDataProvider from "./context/Resume.jsx";
import Skills from "./components/Skills.jsx";
import Project from "./components/Project.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <ResumeDataProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/BasicDetails" element={<BasicDetails />} />
          <Route path="/About" element={<About />} />
          <Route path="/EducationDetails" element={<EducationDetails />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/ExperienceDetails" element={<ExperienceDetails />} />
          <Route path="/ResumeTemplate" element={<ResumeTemplate />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
      </ResumeDataProvider>
    </BrowserRouter>
  );
};
export default App;
