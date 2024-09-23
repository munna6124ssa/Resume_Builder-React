import { useNavigate } from "react-router-dom";
import { resumeContext } from "../context/Resume";
import { useContext, useState } from "react";

const Project = () => {
  const navigate = useNavigate();
  const { ProjectInfo, setProjectInfo } = useContext(resumeContext);
  const [showProject, setShowProject] = useState(false);

  const [project, setProject] = useState({
    title: "",
    description: "",
  });

  const handleClick = () => {
    setShowProject(true);
  };

  const handleSubmit = () => {
    navigate("/ResumeTemplate");
  };

  const handleProject = () => {
    setProjectInfo([...ProjectInfo, project]);
    setProject({
      title: "",
      description: "",
    });

    console.log(project);
    console.log(ProjectInfo);
    setShowProject(false);
  };

  return (
    <>
      <div className="p-9 max-w-1/2">
        <h1 className="text-4xl font-bold tracking-wide">
          Please Add Your{" "}
          <span className="text-cyan-500"> Project Details</span>
        </h1>
      </div>

      {showProject ? (
        <div className="container mx-auto ">
          <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
            <div>
              <div className="mb-4">
                <label
                  for="title"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) =>
                    setProject({ ...project, title: e.target.value })
                  }
                  className="w-full border-sky-500 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter Project Title"
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
                  value={project.description}
                  onChange={(e) =>
                    setProject({
                      ...project,
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
                onClick={handleProject}
              >
                Add Project
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center ">
            <div className="flex gap-3 items-center  border-4 text-2xl border-cyan-500 px-9 py-3  rounded-xl">
              <button onClick={handleClick} className="font-semibold">
                Add Project
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
          {ProjectInfo?.map((elm, i) => {
            return (
              Object.values(elm).some((value) => value !== "") && (
                <div className=" w-full flex justify-center py-2" key={i}>
                  <div className="w-96 bg-red-400 text-left break-words border-md">
                    <div className="px-8">
                      <p className="font-semibold text-lg">Project:</p>
                      <p className="font-medium">
                        Title <span className="font-normal">{elm.title}</span>
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
              Submit Projects
            </button>
          </div>
        </>
      )}
    </>
  );
};
export default Project;
