import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { resumeContext } from "../context/Resume";

const BasicDetails = () => {
  const [basic, setBasic] = useState({
    name: "",
    proverb: "",
    contact: "",
    github: "",
    linkedin: "",
    email: "",
  });
  const navigate = useNavigate();
  const { setBasicInfo } = useContext(resumeContext);

  const handleClick = () => {
    setBasicInfo(basic);
    navigate("/About");
  };

  return (
    <>
      
      <div className="p-9 max-w-1/2">
        <h1 className="text-4xl font-bold tracking-wide">
          Please Enter Your <span className="text-cyan-500"> Contact</span> Info
        </h1>
      </div>

      <div className="container mx-auto ">
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
          <div>
            <div className="mb-4">
              <label
                for="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                required
                value={basic.name}
                onChange={(e) => setBasic({ ...basic, name: e.target.value })}
                className="w-full border-sky-500 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                for="about"
                className="block text-gray-700 font-semibold mb-2"
              >
                Description
              </label>
              <input
                type="text"
                value={basic.proverb}
                onChange={(e) =>
                  setBasic({ ...basic, proverb: e.target.value })
                }
                className="w-full border-sky-500 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter about your work"
              />
            </div>
            <div className="mb-4">
              <label
                for="contact"
                className="block text-gray-700 font-semibold mb-2"
              >
                Contact
              </label>
              <input
                type="number"
                value={basic.contact}
                onChange={(e) =>
                  setBasic({ ...basic, contact: e.target.value })
                }
                className="w-full border-sky-500 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter Contact Number"
              />
            </div>
            <div className="mb-4">
              <label
                for="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                value={basic.email}
                onChange={(e) => setBasic({ ...basic, email: e.target.value })}
                className="w-full border-sky-500 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter Your Email Id"
              />
            </div>
            <div className="mb-4">
              <label
                for="linkedin"
                className="block text-gray-700 font-semibold mb-2"
              >
                Linkedin
              </label>
              <input
                type="text"
                value={basic.linkedin}
                onChange={(e) =>
                  setBasic({ ...basic, linkedin: e.target.value })
                }
                className="w-full border-sky-500 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter Your Linkedin Id"
              />
            </div>
            <div className="mb-4">
              <label
                for="github"
                className="block text-gray-700 font-semibold mb-2"
              >
                GitHub
              </label>
              <input
                type="text"
                value={basic.github}
                onChange={(e) => setBasic({ ...basic, github: e.target.value })}
                className="w-full border-sky-500 border-2 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter Your GitHub Id"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={handleClick}
            >
              Submit Details
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default BasicDetails;
