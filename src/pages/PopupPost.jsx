

import { useState } from "react";

const PopupPost = () => {
  const [title, setTitle] = useState("");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" >
        {/*<FaTimes />*/}
        </button>

        <h2>Add Your Content</h2>

        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />

        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <input type="file" accept="image/*" onChange={handleImageChange} />

        {image && <img src={image} alt="Preview" className="image-preview" />}

        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default PopupPost;
