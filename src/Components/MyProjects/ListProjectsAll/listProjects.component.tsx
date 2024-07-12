import { useContext } from "react"
import { UserContext } from "../../../Providers/UserContext.provider"
import style from "./styles.module.scss"

export const ListProjectsAll = () => {

    const { filteredProjects, handleOpenLink } = useContext( UserContext )

    return(
        <>
            <ul className={style.list}>
                {filteredProjects.map((project, index) => (
                    <li className={style.card} key={index}>
                        <img className={style.image} src={project.image}/>
                        <div className={style.containerSubCard}>
                            <h2 className={style.titleProject}>{project.name}</h2>
                            <p className={style.languageProject}>Languages: {project.language}</p>
                            <p className={style.description}>Description: {project.description}</p>
                            <button className={style.button} onClick={() => handleOpenLink( project.linkOne )}>GitHub</button>
                            <button className={style.button} onClick={() => handleOpenLink( project.linkTwo )}>Application</button>
                            <p className={style.category}>{project.category}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}