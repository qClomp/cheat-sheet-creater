
import { Route, Routes } from "react-router-dom"

// Pages
import PageMain from "../pages/PageMain"
import PageCheatSheet from "../pages/PageCheatSheet"

export default function Router() {

    return(       
        <Routes>
            <Route>
                <Route index element={ <PageMain/> } />
                <Route path="/:sheeturl" element={ <PageCheatSheet/>} />
                <Route path="/test" element={<Test/>} />
            </Route>
        </Routes>
    )
}

const Test = () => {
    return(<h1>Test</h1>)
}