// MultipleFilesUpload Component : Uploads Multiple files to IPFS and returns the URL
import React, { useState } from "react";
import { MultipleFilesUpload } from "react-ipfs-uploader";

const YourComponent = () => {
  const [multipleFilesUrl, setMultipleFilesUrl] = useState("");

  return (
    <div>
      <MultipleFilesUpload setUrl={setMultipleFilesUrl} />
      MultipleFilesUrl :{" "}
      <a href={multipleFilesUrl} target="_blank" rel="noopener noreferrer">
        {multipleFilesUrl}
      </a>
    </div>
  );
};

export default YourComponent;
