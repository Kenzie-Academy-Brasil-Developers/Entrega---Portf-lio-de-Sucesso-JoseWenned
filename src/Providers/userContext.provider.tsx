import { createContext } from "react";
import { IUserContext, IUserProvidersProps } from "../Interfaces/UserContext/userContext.inteface";

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ( { children }: IUserProvidersProps) => {

    // Function for copy text E-mail:

    const handleEmailCopyClick = () => {
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

    // Function for copy text Telephone:

    const handleTelephoneCopyClick = () => {
        const textEmail = document.getElementById("textTelephone") as HTMLParagraphElement;
        const textoForCopy = textEmail.innerText;
    
        const textarea = document.createElement("textarea");
        
        textarea.value = textoForCopy;
      
        document.body.appendChild(textarea);
      
        textarea.select();
      
        document.execCommand("copy");

        setTimeout(() => {
            document.body.removeChild(textarea);
        }, 200)

        setTimeout(() => {
            alert("Telephone copied to clipboard.");
        }, 200)
      
    };

    // Function for donwload curriculum CV

    const handleDownloadCv = () => {

        const link = document.createElement("a");

        link.href = "https://drive.google.com/file/d/1Ym4L8cFE-QDNkg2xsH1hlx2VYvGW8On0/view";

        link.download = "Currículo-Backend-José Wenned.pdf";

        link.click()

        setTimeout(() => {
            document.body.removeChild(link);
        }, 200)

        setTimeout(() => {
            alert("Curriculum downloaded.");
        }, 200)
    
    }
    
    return(
        <UserContext.Provider value={{
            handleEmailCopyClick,
            handleTelephoneCopyClick,
            handleDownloadCv
        }}>
            { children }
        </UserContext.Provider>
    )
}