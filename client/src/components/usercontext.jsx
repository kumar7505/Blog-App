import {createContext} from 'react';

export const userContext = createContext({});

export function UserContextProvider({children}) {
    return (
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
);
}

