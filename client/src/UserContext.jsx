import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({});
    return(
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>        
    )
}

export default UserContextProvider;