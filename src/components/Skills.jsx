import { useNavigate, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { resumeContext } from "../context/Resume";
const Skills = () => {
  const navigate = useNavigate();
  const { skillInfo, setSkillInfo } = useContext(resumeContext);
  const [showSkill, setShowSkill] = useState(true);
  const [skill, setSkill] = useState("");
  const handleClick = () => {
    setShowSkill(false);
  };

  const handleSubmit = () => {
    navigate("/ExperienceDetails");
  };

  const handleSkill = () => {
    setSkillInfo([...skillInfo, skill]);
    setSkill("");
  };

  let renderSkill = skillInfo.map((t, i) => {
    return (
      <div key={i} className=" mb-1 rounded-md  px-3 py-2   ">
        <div className=" w-auto">
          <h3 className="text-2xl  text-stone-800 ">{t}</h3>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="p-9 max-w-1/2">
        <h1 className="text-4xl font-bold tracking-wide">
          Enter Your<span className="text-cyan-500"> Skills</span>
        </h1>
      </div>

      {showSkill ? (
        <div className="flex items-center justify-center ">
          <div className="flex gap-3 items-center border-4 text-2xl border-cyan-500 px-9 py-3  rounded-xl">
            <button onClick={handleClick} className="font-semibold">
              Add Skill
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="36"
              viewBox="0 0 24 24"
            >
              <path
                fill="red"
                d="M11 13H6q-.425 0-.712-.288T5 12q0-.425.288-.712T6 11h5V6q0-.425.288-.712T12 5q.425 0 .713.288T13 6v5h5q.425 0 .713.288T19 12q0 .425-.288.713T18 13h-5v5q0 .425-.288.713T12 19q-.425 0-.712-.288T11 18z"
              />
            </svg>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-center flex-col gap-14 items-center">
            <div className="flex gap-6">
              <input
                type="text"
                placeholder="Enter a Skill"
                className=" border-2 px-4 py-2 border-cyan-500 text-center outline-none"
                value={skill}
                onChange={(e) => {
                  setSkill(e.target.value);
                }}
              />
              <button
                type="submit"
                className=" border-2 border-cyan-500 px-4 py-2 bg-blue-500 rounded text-white"
                onClick={handleSkill}
              >
                Add Skill
              </button>
            </div>
            <div className="">{renderSkill}</div>
            <div className="">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Submit Skills
              </button>
            </div>
          </div>

          {/* <button className="border border-2 border-cyan-500 px-4 py-2 bg-blue-500 rounded text-white" onClick={SubmitSkill}>Submit</button> */}
        </>
      )}
    </>
  );
};
export default Skills;
