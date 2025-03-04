import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPhoto } from "../../redux/operations";

export const AddPhotoInput = ({id}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();


  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedFile || !id) return;

    const formData = new FormData();
    formData.append("flatPhotos", selectedFile);

    dispatch(addPhoto({ id, formData }));
  };

  return (
    <>
      
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        disabled={!selectedFile}
      >
       Оновити фото
      </button>
    </>
  );
};


