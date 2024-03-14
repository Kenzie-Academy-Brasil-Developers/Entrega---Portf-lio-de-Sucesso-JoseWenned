import { useContext } from "react"
import { UserContext } from "../../Providers/userContext.provider"

export const Home = () => {

    const { handleDownloadCv } = useContext( UserContext )

    return(
        <>
            <section>

                <div>
                    <img src="./src/assets/Perfil.png"/>
                    <h1>Hello, my name is José Wenned</h1>
                </div>

                <div>
                    <h2>I love creating and developing projects.</h2>

                    <p>Discover here in this environment, created especially for you, all my projects and technologies.</p>

                    <div>
                        <a href="https://github.com/JoseWenned?tab=projects" target="blank"><button>See projects</button></a>

                        <a href="https://github.com/JoseWenned" target="blank"><img src="./src/assets/GitHub.png"/></a>

                        <button type="submit" onClick={ handleDownloadCv }>Donwload CV</button>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="" alt=""/>
                        <p>Years of experience</p>
                    </div>
                    <div>
                        <img src="" alt=""/>
                        <p>Satisfied customers</p>
                    </div>
                    <div>
                        <img src="" alt=""/>
                        <p>Finished Projects</p>
                    </div>
                </div>
                
            </section>
        </>
    )
}