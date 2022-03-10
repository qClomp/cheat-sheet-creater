
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Pages
import PageMain from "../pages/PageMain"
import PageCheatSheet from "../pages/PageCheatSheet"

export default function Router() {

    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={ <PageMain/> } />
                    <Route path="/:sheeturl" element={ <PageCheatSheet/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}