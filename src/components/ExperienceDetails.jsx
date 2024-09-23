import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { resumeContext } from "../context/Resume";

const ExperienceDetails = () => {
  const navigate = useNavigate();
  const { experienceInfo, setExperienceInfo } = useContext(resumeContext);
  const [showExperience, setShowExperience] = useState(false);

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    durationFrom: "",
    durationTo: "",
    description: "",
  });

  const handleClick = () => {
    setShowExperience(true);
  };

  const handleSubmit = () => {
    navigate("/Project");
  };

  const handleExperience = () => {
    setExperienceInfo([...experienceInfo, experience]);
    setExperience({
      company: "",
      position: "",
      durationFrom: "",
      durationTo: "",
      description: "",
    });

    console.log(experience);
    console.log(experienceInfo);
    setShowExperience(false);
  };

  return (
    <>
      <div className="p-9 max-w-1/2">
        <h1 className="text-4xl font-bold tracking-wide">
          Please Add Your <span className="text-cyan-500"> Experience</span>
        </h1>
      </div>

      {showExperience ? (
        <div className="container mx-auto ">
          <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
            <div>
              <div className="mb-4">
                <label
                  for="company"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  value={experience.company}
                  onChange={(e) =>
                    setExperience({ ...experience, company: e.target.value })
                  }
                  className="w-full border-sky-500 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter company name"
                />
              </div>
              <div className="mb-4">
                <label
                  for="position"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Position
                </label>
                <input
                  type="text"
                  value={experience.position}
                  onChange={(e) =>
                    setExperience({ ...experience, position: e.target.value })
                  }
                  className="w-full border-sky-500 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter position"
                />
              </div>
              <div className="mb-4">
                <label
                  for="duration"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Duration From
                </label>
                <input
                  type="date"
                  value={experience.durationFrom}
                  onChange={(e) =>
                    setExperience({
                      ...experience,
                      durationFrom: e.target.value,
                    })
                  }
                  className="w-full border-sky-500 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter duration (e.g., Jan 2020 - Dec 2022)"
                />
              </div>
              <div className="mb-4">
                <label
                  for="duration"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Duration To
                </label>
                <input
                  type="date"
                  value={experience.durationTo}
                  onChange={(e) =>
                    setExperience({ ...experience, durationTo: e.target.value })
                  }
                  className="w-full border-sky-500 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter duration (e.g., Jan 2020 - Dec 2022)"
                />
              </div>
              <div className="mb-4">
                <label
                  for="description"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={experience.description}
                  onChange={(e) =>
                    setExperience({
                      ...experience,
                      description: e.target.value,
                    })
                  }
                  className="w-full border-sky-500 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter job description"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleExperience}
              >
                Add Experience
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center ">
            <div className="flex gap-3 items-center  border-4 text-2xl border-cyan-500 px-9 py-3  rounded-xl">
              <button onClick={handleClick} className="font-semibold">
                Add Experience
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
          {experienceInfo?.map((elm, i) => {
            return (
              Object.values(elm).some((value) => value !== "") && (
                <div className=" w-full flex justify-center py-2" key={i}>
                  <div className="w-96 bg-red-400 text-left break-words border-md">
                    <div className="px-8">
                      <p className="font-semibold text-lg">Experience:</p>
                      <p className="font-medium">
                        Company:{" "}
                        <span className="font-normal">{elm.company}</span>
                      </p>
                      <p className="font-medium">
                        Position:{" "}
                        <span className="font-normal">{elm.position}</span>
                      </p>
                      <p className="font-medium">
                        Duration:{" "}
                        <span className="font-normal">
                          {elm.durationFrom} - {elm.durationTo}
                        </span>
                      </p>
                      <p className="font-medium">
                        Description:{" "}
                        <span className="font-normal">{elm.description}</span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              )
            );
          })}
          <div className="flex justify-center items-center py-14">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Submit Experiences
            </button>
          </div>
        </>
      )}
    </>
  );
};
export default ExperienceDetails;
