import { useContext } from "react";
import { CgCloseR } from "react-icons/cg";
import { UserContext } from "../../Providers/userContext.provider";

export const Modal = () => {

    const { setModal } = useContext( UserContext )

    const CloseModal = () => {

        setModal( false )

    }

    return(

        <>

            <section>

                <div>

                    <CgCloseR onClick={ CloseModal }/>

                    <img src="./src/assets/Perfil.jpeg"/>

                </div>

            </section>

        </>

    )

}