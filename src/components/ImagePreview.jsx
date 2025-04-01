import React from "react";
import Loader from "./Loader";

const ImagePreview = (props) => {
  return (
    <>
      <div className="flex justify-center items-center gap-3 mt-3 w-full">
        <div className="bg-gray-100 shadow-xl h-[50vh] w-1/4 rounded-lg overflow-hidden">
          <h3 className="bg-gray-800 text-white p-2 text-center ">
            Original Image
          </h3>
          <div className="flex flex-col justify-center items-center h-full ">
            {props.upload ? (
              <img
                className="object-cover h-[50vh] w-full"
                src={props.upload}
                alt=""
              />
            ) : (
              <p className="font-medium text-gray-400">No image selected</p>
            )}
          </div>
        </div>
        <div className="bg-gray-100 shadow-xl h-[50vh] w-1/4 rounded-lg overflow-hidden">
          <h3 className="bg-blue-800 text-white p-2 text-center">
            Enhanced Image
          </h3>
          <div className="flex flex-col justify-center items-center h-full re1lative">
            {props.loader ? (
              <Loader />
            ) : props.enhanced && !props.loader ? (
              <>
                <img
                  className="object-cover h-[50vh] w-full"
                  src={props.enhanced}
                  alt=""
                />
              </>
            ) : (
              <p className="font-medium text-gray-400">No Enhanced image</p>
            )}
          </div>
        </div>
      </div>
      {props.enhanced && !props.loader ? (
        <a
          href={props.enhanced}
          download={props.enhanced.png}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 mt-5"
        >
          Download
        </a>
      ) : null}
      <p className="text-gray-500 text-sm mt-10">Created with 💖 by @Keshav</p>
    </>
  );
};

export default ImagePreview;
