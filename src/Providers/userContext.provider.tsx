import { createContext, useState } from "react";
import { IUserContext, IUserProvidersProps } from "../Interfaces/UserContext/userContext.inteface";
import { projects } from "../Data/database";
export const UserContext = createContext({} as IUserContext)

export const UserProvider = ( { children }: IUserProvidersProps) => {

    const [category, setCategory] = useState( "All projects" );
    const [modalOpen, setModalOpen] = useState ( false )

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
    
    };

    // function render projects card in list

    const filteredProjects = projects.filter((project) => {
        return category === "All projects" || project.category === category
    });

    // function for some all projects 

    const sumProjects = (): number => {
        return projects.length;
    };

    // function open link 

    const handleOpenLink = ( link: string ) => {
        window.open( link, "_blank" );
    };

    // function access modal

    // const imageProfile = document.getElementById("myImage");

    const openModal = () => {

        setModalOpen(!modalOpen)

    }

    const closeModal = () => {
        setModalOpen(false)
    }
    
    return(
        <UserContext.Provider value={{
            handleEmailCopyClick,
            handleTelephoneCopyClick,
            handleDownloadCv,
            filteredProjects,
            setCategory,
            sumProjects,
            handleOpenLink
        }}>
            { children }
        </UserContext.Provider>
    )
}