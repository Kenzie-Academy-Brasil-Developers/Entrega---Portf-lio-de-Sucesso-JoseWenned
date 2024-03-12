export interface IUserProvidersProps {

    children: React.ReactNode

}

export interface IUserContext {

    handleEmailCopyClick: ( text: string ) => void
    handleTelephoneCopyClick: ( text: string ) => void

}

export interface ITextEmail {

    textEmail: HTMLElement | null

}