

import { useGlobalContext } from "../Context";

const PopupPost = () => {
  const {
    setAddPosts,setTitle,setHeading,setDescp,setImage
    ,title,descp,image,heading,setNewPost,setPost,newPost
  } = useGlobalContext();
 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const addNewPost = () => {
    setAddPosts(prev => !prev);

    setNewPost({id: Math.random(), title, heading, descp, image });

    setPost(prev => ([...prev, newPost]));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={()=> setAddPosts(prev=>!prev)} className="close-btn" >
          <box-icon name='x' size="40px" color="red"></box-icon>
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
          value={descp}
          onChange={(e) => setDescp(e.target.value)}
        ></textarea>

        <input type="file" accept="image/*" onChange={handleImageChange} />

        {image && <img src={image} alt="Preview" className="image-preview" />}

        <button onClick={()=> addNewPost()} className="submit-btn">Add Post</button>
      </div>
    </div>
  );
};

export default PopupPost;
