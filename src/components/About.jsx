import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { resumeContext } from "../context/Resume";

const About = () => {
  const [about, setAbout] = useState("");
  const { aboutInfo, setAboutInfo } = useContext(resumeContext);

  const navigate = useNavigate();
  const handleClick = () => {
    setAboutInfo(about);
    setAbout("");
    console.log(aboutInfo);
    navigate("/EducationDetails");
  };
  return (
    <>
      <div className="p-9 max-w-1/2">
        <h1 className="text-4xl font-bold tracking-wide">
          Write <span className="text-cyan-500"> About Yourself</span>
        </h1>
      </div>

      <div className="container mx-auto ">
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
          <div className="mb-4">
            <label
              for="description"
              className="block text-gray-700 font-semibold mb-2"
            >
              About
            </label>
            <textarea
              id="about"
              name="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full border-sky-500 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Enter about yourself"
            ></textarea>
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleClick}
          >
            Submit About
          </button>
        </div>
      </div>

    </>
  );
};
export default About;
