export interface IUserProvidersProps {

    children: React.ReactNode

}

export interface IUserContext {

    handleEmailCopyClick: ( text: string ) => void
    handleTelephoneCopyClick: ( text: string ) => void
    handleDownloadCv: () => void

}

export interface ITextEmail {

    textEmail: HTMLElement | null

}