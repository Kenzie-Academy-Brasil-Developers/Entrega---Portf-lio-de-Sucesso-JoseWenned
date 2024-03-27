export interface IDataProject {
    image: string | undefined;

    id: number;
    name: string;
    language: string;
    description: string;
    linkGitHub: string;
    linkVercel: string;
    category: string;
    
}

export interface IUserProvidersProps {

    children: React.ReactNode

}

export interface IUserContext {

    handleEmailCopyClick: ( text: string ) => void
    handleTelephoneCopyClick: ( text: string ) => void
    handleDownloadCv: () => void
    filteredProjects: IDataProject[]
    setCategory: React.Dispatch<React.SetStateAction<string>>
    sumProjects: () => number
    handleOpenLink: ( link: string ) => void

}

export interface ITextEmail {

    textEmail: HTMLElement | null

}