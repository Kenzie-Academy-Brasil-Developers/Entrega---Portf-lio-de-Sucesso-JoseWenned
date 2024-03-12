import { createContext } from "react";
import { IUserContext, IUserProvidersProps } from "../Interfaces/UserContext/userContext.inteface";

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ( { children }: IUserProvidersProps) => {

    // Function for copy text E-mail:

    const handleCopyClick = () => {
        const textEmail = document.getElementById("textEmail") as HTMLParagraphElement;
        const textoForCopy = textEmail.innerText;
    
        const textarea = document.createElement("textarea");
        
        textarea.value = textoForCopy;
      
        document.body.appendChild(textarea);
      
        textarea.select();
      
        document.execCommand("copy");
      
        document.body.removeChild(textarea);
      
        alert("E-mail copied to clipboard.");
      };
    
    return(
        <UserContext.Provider value={{
            handleCopyClick
        }}>
            { children }
        </UserContext.Provider>
    )
}