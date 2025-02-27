import { createContext, useContext, useState} from 'react';

const myContext = createContext();

// eslint-disable-next-line react/prop-types
function Context({children}) {
 const [addPosts, setAddPosts] = useState(false);
  return (
    <myContext.Provider value={{setAddPosts,addPosts}}>
        {children}
    </myContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(myContext);
}

export default Context;