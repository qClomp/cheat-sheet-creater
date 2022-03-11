
import axios from "axios"
import { useState, useLayoutEffect } from "react"
import { useParams } from "react-router-dom"

// Components
import SheetShower from "../components/SheetShower"

// Styles
import { Spagecheatsheet } from "../styles/StyledGlobal"

export interface Icheatsheet {
    sheetName: string,
    sheetData: [{
        sheetTitle: string,
        sheetContent: string
    }]
}

export default function PageCheatSheet() {

    const [ sheet, setSheet ] = useState<Icheatsheet>()
    const [ status, setStatus ] = useState(0)

    const routeparam = useParams()
    const sheeturl = routeparam.sheeturl

    
    const getData = () => {
        
        const geturl = "https://cheatsheetcreator.azurewebsites.net/Sheet/"+ sheeturl

        axios.get(geturl)
            .then(response => {
                setSheet(response.data)
                setStatus(1)
            })
            .catch(error => setStatus(2))
    }

    useLayoutEffect(() => {
        getData()
    }, [])

    if(status === 0)
        return <h1>Loading...</h1>

    if(status === 2)
        return <h1>Page Not Found</h1>

    return(
        <Spagecheatsheet>
            <SheetShower
            inSheet={sheet}
            />
        </Spagecheatsheet>
    )
}