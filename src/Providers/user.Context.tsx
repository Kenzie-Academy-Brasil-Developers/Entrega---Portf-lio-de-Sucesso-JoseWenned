import { createContext } from "react";

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ( { children }: IUserProvidersProps) => {
    return(
        <UserContext.Provider value={{}}>
            { children }
        </UserContext.Provider>
    )
}