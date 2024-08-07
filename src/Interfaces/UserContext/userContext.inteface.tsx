export interface IDataProject {
    image: string | undefined;

    id: number;
    name: string;
    language: string;
    description: string;
    linkOne: string;
    linkTwo: string;
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
    isModal: any
    setModal: (boolean: boolean) => void

}

export interface ITextEmail {

    textEmail: HTMLElement | null

}