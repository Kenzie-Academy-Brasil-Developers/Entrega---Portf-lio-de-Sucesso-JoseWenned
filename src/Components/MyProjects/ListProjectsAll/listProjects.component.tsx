import { useContext } from "react"
import { UserContext } from "../../../Providers/userContext.provider"
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
                            <button onClick={() => handleOpenLink( project.linkGitHub )} className={style.LinkGitHub}>GitHub</button>
                            <button onClick={() => handleOpenLink( project.linkVercel )}>Application</button>
                            <p>{project.category}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}