import { useContext } from "react"
import { UserContext } from "../../../Providers/userContext.provider"
import style from "./styles.module.scss"

export const ListProjectsAll = () => {

    const { filteredProjects } = useContext( UserContext )

    return(
        <>
            <ul className={style.list}>
                {filteredProjects.map((project, index) => (
                    <li className={style.card} key={index}>
                        <img className={style.image} src={project.image}/>
                        <div className={style.containerSubCard}>
                            <h2>Name:{project.name}</h2>
                            <p>Language:{project.language}</p>
                            <p className={style.description}>Description:{project.description}</p>
                            <p>GitHub:{project.linkGitHub}</p>
                            <p>Application:{project.linkVercel}</p>
                            <p>{project.category}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}