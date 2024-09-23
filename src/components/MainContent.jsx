import { useNavigate } from "react-router-dom";

const MainContent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/BasicDetails");
  };

  return (
    <>
      <div className="flex items-center justify-center max-w-full">
        <div className="flex items-center justify-center w-1/2">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-bold leading-tight">
              Build a Proffessional <br /> Resume For FREE...
            </h1>
            <p className="text-xl font-semibold text-left">
              Create your resume easily with our free builder <br /> and
              professional templates.
            </p>
            <div className="flex gap-5">
              <button className="border border-3 rounded py-2.5 bg-blue-700 text-white font-bold px-10">
                Go To My Resume
              </button>
              <button
                className="border border-3 border-blue-700 py-2.5 px-10 text-blue-600 font-bold"
                onClick={handleClick}
              >
                Create New Resume
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img className="h-5/6" src="./resume pic.webp" alt="resume pic" />
        </div>
      </div>
    </>
  );
};
export default MainContent;
