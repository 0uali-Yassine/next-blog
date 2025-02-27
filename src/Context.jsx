import { createContext, useContext, useState} from 'react';
import data from './Data';
const myContext = createContext();

// eslint-disable-next-line react/prop-types
function Context({children}) {
 const [addPosts, setAddPosts] = useState(false);
 const [title, setTitle] = useState("");
 const [heading, setHeading] = useState("");
 const [descp, setDescp] = useState("");
 const [image, setImage] = useState(null);
 const [Post,setPost] = useState(data);
 const [newPost,setNewPost] = useState({});


  return (
    <myContext.Provider value={{setAddPosts,title,descp,image,heading,addPosts
    ,setTitle,setHeading,setDescp,setImage,setPost,Post,
    setNewPost,newPost
    }}>
        {children}
    </myContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(myContext);
}

export default Context;