import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { resumeContext } from "../context/Resume";

const EducationDetails = () => {
  const navigate = useNavigate();

  const [Education, setEducation] = useState({
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

  const { setBasicEducation } = useContext(resumeContext);

  const handleClick = () => {
    console.log(Education);
    setBasicEducation(Education);
    navigate("/Skills");
  };
  return (
    <>
      <div className="p-9 max-w-1/2">
        <h1 className="text-4xl font-bold tracking-wide">
          Please Enter Your <span className="text-cyan-500"> Education</span>
          Details
        </h1>
      </div>

      <table className="table-fixed border-x border-b font-bold bg-pink-200 h-80 w-2/3 ml-60">
        <tbody className="">
          {/* <td className="bg-red-400"> */}

          <tr className="bg-cyan-200">
            <td align="center" className="w-16">
              <b>Sl.No.</b>
            </td>
            <td align="center" className=" w-36 ">
              <b>Examination</b>
            </td>
            <td align="center">
              <b>Board/Course</b>
            </td>
            <td align="center">
              <b>Percentage/CGPA</b>
            </td>
            <td align="center">
              <b>Year of Passing</b>
            </td>
          </tr>

          <tr>
            <td className="text-center">1</td>
            <td className="text-center">Class X</td>
            <td className="text-center">
              <input
                className="text-center"
                type="text"
                value={Education.tenBoard}
                onChange={(e) =>
                  setEducation({ ...Education, tenBoard: e.target.value })
                }
              />
            </td>
            <td className="text-center">
              <input
                className="text-center"
                type="number"
                value={Education.tenMarks}
                onChange={(e) =>
                  setEducation({ ...Education, tenMarks: e.target.value })
                }
              />
            </td>
            <td className="text-center">
              <input
                className="text-center"
                type="number"
                value={Education.tenYear}
                onChange={(e) =>
                  setEducation({ ...Education, tenYear: e.target.value })
                }
              />
            </td>
          </tr>

          <tr>
            <td className="text-center">2</td>
            <td className="text-center">Class XII</td>
            <td className="text-center">
              <input
                className="text-center"
                type="text"
                value={Education.twelveBoard}
                onChange={(e) =>
                  setEducation({ ...Education, twelveBoard: e.target.value })
                }
              />
            </td>
            <td className="text-center">
              <input
                className="text-center"
                type="number"
                value={Education.twelveMarks}
                onChange={(e) =>
                  setEducation({ ...Education, twelveMarks: e.target.value })
                }
              />
            </td>
            <td className="text-center">
              <input
                className="text-center"
                type="number"
                value={Education.twelveYear}
                onChange={(e) =>
                  setEducation({ ...Education, twelveYear: e.target.value })
                }
              />
            </td>
          </tr>

          <tr>
            <td className="text-center">3</td>
            <td className="text-center">Graduation</td>
            <td className="text-center">
              <input
                className="text-center"
                type="text"
                value={Education.gradBoard}
                onChange={(e) =>
                  setEducation({ ...Education, gradBoard: e.target.value })
                }
              />
            </td>
            <td className="text-center">
              <input
                className="text-center"
                type="number"
                value={Education.gradMarks}
                onChange={(e) =>
                  setEducation({ ...Education, gradMarks: e.target.value })
                }
              />
            </td>
            <td className="text-center">
              <input
                className="text-center"
                type="number"
                value={Education.gradYear}
                onChange={(e) =>
                  setEducation({ ...Education, gradYear: e.target.value })
                }
              />
            </td>
          </tr>
        </tbody>
      </table>

      <button
        className="absolute bottom-14 right-14 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={handleClick}
      >
        Submit Details
      </button>
    </>
  );
};
export default EducationDetails;
