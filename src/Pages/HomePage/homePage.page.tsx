import { Home } from "../../Components/Home/home.component"
import { Footer } from "../../Components/Footer/footer.component"
import { Header } from "../../Components/Header/header.component"
import { Modal } from "../../Components/Modal/modal.component"
import { useContext } from "react"
import { UserContext } from "../../Providers/UserContext.provider"

export const HomePage = () => {

    const { isModal } = useContext(UserContext)

    return(
        <>
            <Header/>

            {isModal && (
                
                <Modal />

            )}

            <Home/>

            <Footer/>
        </>
    )
}