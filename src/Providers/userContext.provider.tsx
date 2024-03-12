import { createContext } from "react";
import { IUserContext, IUserProvidersProps } from "../Interfaces/UserContext/userContext.inteface";

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ( { children }: IUserProvidersProps) => {
    return(
        <UserContext.Provider value={{}}>
            { children }
        </UserContext.Provider>
    )
}