import { useState } from "react";
import ImagePreview from "./components/ImagePreview";
import ImageUpload from "./components/ImageUpload";
import { enhancedImageAPI } from "./utils/enhancedImageAPI";

function App() {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loader, setLoader] = useState(false);

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoader(true);
    // call api
    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setLoader(false);
    } catch (error) {
      console.log(error.message);
      alert("Something went wrong! Please try again later or contact support.");
    }
  };
  console.log(enhancedImage);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
        <ImageUpload UploadImageHandler={UploadImageHandler} />
        <ImagePreview
          upload={uploadImage}
          enhanced={enhancedImage?.image}
          loader={loader}
        />
      </div>
    </>
  );
}

export default App;
