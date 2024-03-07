import { ListSection } from "./ListSection/listSection.component"

export const SecondSection = () => {
    return(
        <>
            <section>
                <h2>My projects</h2>
                <p>Projects created at<span>Kenzie Academy Brasil.</span></p>

                <ListSection/>
            </section>
        </>
    )
}