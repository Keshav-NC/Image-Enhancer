import React from "react";

const ImageUpload = (props) => {
  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      props.UploadImageHandler(file);
    }
  };
  return (
    <>
      <h1 className="text-gray-700 font-semibold text-3xl">
        AI Image Enhancer
      </h1>
      <p className="text-gray-500 text-sm mb-5">
        Upload your image and let AI enhance it in seconds!
      </p>
      <div className="bg-white rouded p-3 rounded-lg w-[50vw] shadow-xl">
        <label
          className="border-2 border-dashed border-gray-400 h-[10vh] flex justify-center items-center rounded-lg p-4 text-lg font-semibold text-gray-800 duration-75 cursor-pointer hover:bg-gray-100 hover:border-gray-500 hover:text-gray-700"
          htmlFor="fileInput"
        >
          <input
            id="fileInput"
            className="w-screen h-full cursor-pointer hidden"
            type="file"
            accept="image/*"
            onChange={ShowImageHandler}
          />
          <p>Click here to upload image and enhance it with AI</p>
        </label>
      </div>
    </>
  );
};

export default ImageUpload;
