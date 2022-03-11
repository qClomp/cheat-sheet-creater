
import { Route, Routes } from "react-router-dom"

// Pages
import PageMain from "./pages/PageMain"
import PageCheatSheet from "./pages/PageCheatSheet"

export default function Router() {

    return(
        <Routes>
            <Route path='/'>
                <Route index element={ <PageMain/> } />
                <Route path="/:sheeturl" element={ <PageCheatSheet/>} />
            </Route>
        </Routes>
    )

}