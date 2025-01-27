import  { useState } from "react";
import { updateFlatPhoto } from "../../redux/operations";


export const PhotoUploader = ({ flatId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);

    if (file) {
      // Генерація прев'ю
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("Please select a file to upload.");
      return;
    }

    try {
      await updateFlatPhoto(flatId, selectedFile);
      setUploadStatus("Photo uploaded successfully!");
    } catch (error) {
      setUploadStatus(error.message || "Failed to upload photo.");
    }
  };

  return (
    <div className="photo-uploader max-w-md mx-auto p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-lg font-bold mb-4">Upload Flat Photo</h2>

      {preview && (
        <img
          src={preview}
          alt="Selected"
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4 block w-full"
      />

      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition"
      >
        Upload Photo
      </button>

      {uploadStatus && (
        <p
          className={`mt-4 text-center ${
            uploadStatus.includes("successfully")
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {uploadStatus}
        </p>
      )}
    </div>
  );
};

