import { useContext } from "react";
import { CgCloseR } from "react-icons/cg";
import { UserContext } from "../../Providers/userContext.provider";
import style from "./style.module.scss"
import perfil1 from "../../assets/Perfil.jpeg"


export const Modal = () => {

    const { setModal } = useContext( UserContext )

    const CloseModal = () => {

        setModal( false )

    }

    return(

        <>

            <section className={style.overlay}>

                <div className={style.container}> 

                    <CgCloseR className={style.close} onClick={ CloseModal }/>

                    <img className={style.imageModal} src={perfil1}/>

                </div>

            </section>

        </>

    )

}