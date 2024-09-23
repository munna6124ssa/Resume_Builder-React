import { createContext, useState } from "react";

export const resumeContext = createContext();

const ResumeDataProvider = ({ children }) => {
  const [basicInfo, setBasicInfo] = useState({
    name: "",
    proverb: "",
    contact: "",
    github: "",
    linkedin: "",
    email: "",
  });
  const [aboutInfo, setAboutInfo] = useState("");
  const [basicEducation, setBasicEducation] = useState({
    tenBoard: "",
    tenMarks: "",
    tenYear: "",
    twelveBoard: "",
    twelveMarks: "",
    twelveYear: "",
    gradBoard: "",
    gradMarks: "",
    gradYear: "",
  });

  const [skillInfo, setSkillInfo] = useState([]);

  const [experienceInfo, setExperienceInfo] = useState([]);
  const [ProjectInfo, setProjectInfo] = useState([]);

  return (
    <resumeContext.Provider
      value={{
        basicInfo,
        setBasicInfo,
        aboutInfo,
        setAboutInfo,
        basicEducation,
        setBasicEducation,
        skillInfo,
        setSkillInfo,
        experienceInfo,
        setExperienceInfo,
        ProjectInfo,
        setProjectInfo,
      }}
    >
      {children}
    </resumeContext.Provider>
  );
};

export default ResumeDataProvider;
