import React, { useRef } from "react";

const Converter = () => {
  const imageInputRef = useRef(null);
  const base64OutputRef = useRef(null);
  const convertToBase64 = () => {
    const file = imageInputRef.current.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = function (event) {
        const base64String = event.target.result.split(",")[1];
        base64OutputRef.current.textContent = base64String;
      };

      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file!");
    }
  };
  return (
    <div>
      {" "}
      <input type='file' ref={imageInputRef} />
      <button onClick={convertToBase64}>Convert</button>
      <pre ref={base64OutputRef}></pre>
    </div>
  );
};

export default Converter;
