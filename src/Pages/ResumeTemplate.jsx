import { useContext } from "react";
import { resumeContext } from "../context/Resume";

const ResumeTemplate = () => {
  const {
    basicInfo,
    basicEducation,
    aboutInfo,
    skillInfo,
    experienceInfo,
    ProjectInfo,
  } = useContext(resumeContext);
  let renderSkill = skillInfo.map((t, i) => {
    return (
      <div key={i} className=" mb-1 px-3 py-1   ">
        <div className=" w-auto">
          <h3 className="text-lg font-sans">&#8594; {t}</h3>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="bg-gray-100 p-4 flex items-center justify-center w-full  ">
        <div className="border-1 shadow-lg w-3/4 shadow-gray-700 rounded-lg">
          <div className="flex justify-center text-4xl font-bold py-4 ">
            <h3 className="tracking-widest font-serif">RESUME</h3>
          </div>
          <div className="flex rounded-t-lg bg-top-color sm:px-2 w-full">
            <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
              <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" />
            </div>

            <div className="w-2/3 sm:text-center pl-5 mt-10 text-start">
              <p className=" font-bold tracking-widest font-serif text-heading sm:text-4xl text-2xl">
                {basicInfo.name}
              </p>
              <p className="text-lg font-medium">{basicInfo.proverb}</p>
            </div>
          </div>

          <div className="p-5">
            <div className="flex flex-col sm:flex-row sm:mt-10">
              <div className="flex flex-col sm:w-1/3">


                 <div className="py-3 sm:order-none order-3">
                  <h2 className="text-2xl tracking-wider font-bold ">
                    Contact Info
                  </h2>
                  <div className="border-2 w-28 border-cyan-500  my-1"></div>

                  <div>
                    {basicInfo.email !="" && <div className="flex gap-4 items-center my-3">
                      <a className="w-6 text-gray-700 hover:text-orange-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 256 256"
                        >
                          <g fill="none">
                            <rect
                              width="256"
                              height="256"
                              fill="#242938"
                              rx="60"
                            />
                            <path
                              fill="#4285F4"
                              d="M41.636 203.028h31.818v-77.273L28 91.665v97.727c0 7.545 6.114 13.636 13.636 13.636"
                            />
                            <path
                              fill="#34A853"
                              d="M182.545 203.028h31.819c7.545 0 13.636-6.113 13.636-13.636V91.665l-45.455 34.09"
                            />
                            <path
                              fill="#FBBC04"
                              d="M182.545 66.664v59.091L228 91.665V73.481c0-16.863-19.25-26.477-32.727-16.363"
                            />
                            <path
                              fill="#EA4335"
                              d="M73.455 125.755v-59.09L128 107.574l54.545-40.91v59.091L128 166.665"
                            />
                            <path
                              fill="#C5221F"
                              d="M28 73.483v18.181l45.454 34.091v-59.09l-12.727-9.546C47.227 47.005 28 56.619 28 73.483"
                            />
                          </g>
                        </svg>
                      </a>
                      <div className="ml-2 font-semibold ">
                        {basicInfo.email}
                      </div>
                    </div>}
                    {basicInfo.contact !="" && <div className="flex gap-4 items-center my-3">
                      <a className="w-6 text-gray-700 hover:text-orange-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8q-2.5-2.5-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z"
                          />
                        </svg>
                      </a>
                      <div className="ml-2 font-semibold">
                        {basicInfo.contact}
                      </div>
                    </div>}
                    {basicInfo.linkedin !="" &&<div className="flex gap-4 items-center my-3">
                      <a className="w-6 text-gray-700 hover:text-orange-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 256 256"
                        >
                          <g fill="none">
                            <rect
                              width="256"
                              height="256"
                              fill="#fff"
                              rx="60"
                            />
                            <rect
                              width="256"
                              height="256"
                              fill="#0A66C2"
                              rx="60"
                            />
                            <path
                              fill="#fff"
                              d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                            />
                          </g>
                        </svg>
                      </a>
                      <div className="ml-2 font-semibold">
                        {basicInfo.linkedin}
                      </div>
                    </div>}
                    {basicInfo.github!="" && <div className="flex gap-4 items-center my-3">
                      <a className="w-6 text-gray-700 hover:text-orange-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="currentColor"
                            d="M16 .396c-8.839 0-16 7.167-16 16c0 7.073 4.584 13.068 10.937 15.183c.803.151 1.093-.344 1.093-.772c0-.38-.009-1.385-.015-2.719c-4.453.964-5.391-2.151-5.391-2.151c-.729-1.844-1.781-2.339-1.781-2.339c-1.448-.989.115-.968.115-.968c1.604.109 2.448 1.645 2.448 1.645c1.427 2.448 3.744 1.74 4.661 1.328c.14-1.031.557-1.74 1.011-2.135c-3.552-.401-7.287-1.776-7.287-7.907c0-1.751.62-3.177 1.645-4.297c-.177-.401-.719-2.031.141-4.235c0 0 1.339-.427 4.4 1.641a15.436 15.436 0 0 1 4-.541c1.36.009 2.719.187 4 .541c3.043-2.068 4.381-1.641 4.381-1.641c.859 2.204.317 3.833.161 4.235c1.015 1.12 1.635 2.547 1.635 4.297c0 6.145-3.74 7.5-7.296 7.891c.556.479 1.077 1.464 1.077 2.959c0 2.14-.02 3.864-.02 4.385c0 .416.28.916 1.104.755c6.4-2.093 10.979-8.093 10.979-15.156c0-8.833-7.161-16-16-16z"
                          />
                        </svg>
                      </a>
                      <div className="ml-2 font-semibold">
                        {basicInfo.github}
                      </div>
                    </div>}
                  </div>
                </div>

                {skillInfo.length > 0 && (
                  <div className="py-3 sm:order-none order-2">
                    <h2 className="text-2xl font-bold tracking-wider">
                      Skills
                    </h2>
                    <div className="border-2 w-10 border-cyan-500  my-1"></div>

                    <div>
                      <div className="flex my-3">
                        <div>{renderSkill}</div>
                      </div>
                    </div>
                  </div>
                )}

                
                  <div className="py-3 sm:order-none ">
                    <h2 className="text-2xl tracking-wider font-bold ">
                      Education Details
                    </h2>
                    <div className="border-2 w-32 my-1 border-cyan-500"></div>

                    <div className="flex flex-col space-y-1 my-3">
                      <div className="flex flex-col">
                        {basicEducation.gradYear != "" && (
                          <p className="font-semibold text-lg text-gray-700">
                            {basicEducation.gradYear}
                          </p>
                        )}
                        {basicEducation.gradBoard != "" && (
                          <p className="text-sm font-medium">
                            <span className="text-slate-800 text-xl">
                              {basicEducation.gradBoard}
                            </span>
                          </p>
                        )}
                        {basicEducation.gradMarks !== "" && (
                          <p className="font-bold text-lg text-gray-700 mb-2">
                            CGPA: {basicEducation.gradMarks}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col">
                        {basicEducation.twelveYear !== "" && (
                          <p className="font-semibold text-lg text-gray-700">
                            {basicEducation.twelveYear}
                          </p>
                        )}
                        {basicEducation.twelveBoard != "" && (
                          <p className="text-sm font-medium">
                            <span className="text-slate-900 text-xl">
                              12 ,{basicEducation.twelveBoard}
                            </span>
                          </p>
                        )}
                        {basicEducation.twelveMarks != "" && (
                          <p className="font-bold text-lg text-gray-700 mb-2">
                            Percentage: {basicEducation.twelveMarks}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col">
                        {basicEducation.tenYear != "" && (
                          <p className="font-semibold text-lg text-gray-700">
                            {basicEducation.tenYear}
                          </p>
                        )}
                        {basicEducation.tenBoard != "" && (
                          <p className="text-sm font-medium">
                            <span className="text-slate-900 text-xl">
                              10 ,{basicEducation.tenBoard}
                            </span>
                          </p>
                        )}
                        {basicEducation.tenMarks != "" && (
                          <p className="font-bold text-lg text-gray-700 mb-2">
                            Percentage: {basicEducation.tenMarks}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                
              </div>

              <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
                {aboutInfo.length > 0 && (
                  <div className="py-3">
                    <h2 className="text-2xl tracking-wider font-bold ">
                      About Me
                    </h2>
                    <div className="border-2 w-28  border-cyan-500  my-1"></div>
                    <p className="my-1 text-lg  text-balance">{aboutInfo}</p>
                  </div>
                )}

                {experienceInfo.length > 0 && (
                  <div className="py-3">
                    <h2 className="text-2xl font-poppins font-bold text-top-color">
                      Professional Experience
                    </h2>
                    <div className="border-2 w-24 border-cyan-500 my-1"></div>

                    <div className="flex flex-col">
                      <div>
                        {experienceInfo?.map((elm, i) => {
                          return (
                            Object.values(elm).some(
                              (value) => value !== ""
                            ) && (
                              <div key={i} className="flex flex-col mb-3">
                                {elm.company != "" && (
                                  <p className="text-xl font-bold text-gray-700">
                                    &#8594; {elm.company}
                                  </p>
                                )}
                                {elm.position !== "" && (
                                  <p className="text-md pl-2 font-bold text-gray-700">
                                    {elm.position}
                                  </p>
                                )}
                                <p className="font-semibold  pl-2 text-md text-gray-700">
                                  {elm.durationFrom} to {elm.durationTo}
                                </p>
                                {elm.description !== "" && (
                                  <p className="font-normal text-balance pl-2 text-lg text-gray-700 ">
                                    {elm.description}
                                  </p>
                                )}
                              </div>
                            )
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {ProjectInfo.length > 0 && (
                  <div className="py-3">
                    <h2 className="text-2xl font-poppins font-bold text-top-color">
                      Projects
                    </h2>
                    <div className="border-2 w-20 border-cyan-500 my-1"></div>

                    <div className="flex flex-col">
                      <div>
                        {ProjectInfo?.map((elm, i) => {
                          return (
                            Object.values(elm).some(
                              (value) => value !== ""
                            ) && (
                              <div key={i} className="flex flex-col mb-3">
                                {elm.title !== "" && (
                                  <p className="text-xl font-bold text-gray-700">
                                    &#8594; {elm.title}
                                  </p>
                                )}

                                <p className="font-normal break-words text-balance pl-2 text-lg text-gray-700 ">
                                  {elm.description}
                                </p>
                              </div>
                            )
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResumeTemplate;
