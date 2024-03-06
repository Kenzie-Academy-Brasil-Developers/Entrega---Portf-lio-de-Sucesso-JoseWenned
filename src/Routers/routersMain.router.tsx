import { Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage/homePage.page"

export const RouterMain = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={ <HomePage/> }></Route>
                <Route></Route>
                <Route></Route>
                <Route></Route>
            </Routes>
        </>
    )
}