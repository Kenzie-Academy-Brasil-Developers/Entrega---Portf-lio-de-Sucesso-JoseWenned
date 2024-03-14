import { useContext } from "react"
import { UserContext } from "../../../Providers/userContext.provider"

export const ListProjectsAll = () => {

    const { filteredProjects } = useContext( UserContext )

    return(
        <>
            <ul>
                {filteredProjects.map((project, index) => (
                    <li key={index}>
                        <h2>Name:{project.name}</h2>
                        <p>Language:{project.language}</p>
                        <p>Description:{project.description}</p>
                        <p>GitHub:{project.linkGitHub}</p>
                        <p>Application:{project.linkVercel}</p>
                        <p>{project.category}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}