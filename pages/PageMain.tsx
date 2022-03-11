
import { useState } from "react"
import axios from 'axios'

import generateURL from "../utilities/generateURL"
// Components
import SheetContainer from "../components/SheetContainer"

// Styles
import { 
    Serrorspan,
    Spagemain,  
    Ssiteinfo,
    Sstatuscontainer,
    Surl,
 } from "../styles/StyledGlobal"

interface Isheet {
    id: number,
    sheetTitle: string,
    sheetContent: string
}

interface Icheatsheet {
    url: string,
    sheetName: string,
    sheetData: Isheet[]
}

export default function PageMain() {

    const [ sheets, setSheets ] = useState<Array<Isheet>>([])
    const [ sheetName, setSheetName ] = useState("")
    const [ generatedURL, setGeneratedURL ] = useState("")
    const [ error, setError] = useState("")

    const checkValid = () => {
        if(sheetName !== "")
            return true 
        
        return false
    }

    const SaveSheet = () => {
        if(!checkValid())
            return

        let cleanedSheets = cleanEmptySheets(sheets)

        const Sheet:Icheatsheet = {
            url: generateURL(7),
            sheetName: sheetName,
            sheetData: cleanedSheets
        }

        axios.post('https://cheatsheetcreator.azurewebsites.net/Sheet/', Sheet)
            .then(response => {
                let url = "http://localhost:3000/" + response.data.url.toString()
                setGeneratedURL(url)
            })
            .catch(error => setError("Connection failed."))
    }

    return(
        <Spagemain>
            <Ssiteinfo>
                <span style={{fontSize:"2em"}}>Cheat Sheet</span>
                <span>Generator</span>
            </Ssiteinfo>

            <Sstatuscontainer>
                <span style={{fontSize:"2em"}}>Status</span>
                { sheetName === "" && <Serrorspan>Insert a Name</Serrorspan>}
                { sheets.length === 0 && <Serrorspan>Add a Content</Serrorspan>}
                <button onClick={() => SaveSheet()}>Save & Generate URL</button>
                { generatedURL !== "" && <Surl href={generatedURL}>{generatedURL}</Surl>}
                { error !== "" && <Serrorspan>{error}</Serrorspan>}
            </Sstatuscontainer>


            <>
                <SheetContainer
                sheet={sheets}
                setSheet={setSheets}
                sheetname={sheetName}
                setSheetName={setSheetName}
                />
            </>

        </Spagemain>
    )
}

const cleanEmptySheets = (inSheets:Isheet[]) => {
    let cleanedSheets = inSheets.filter((sheet:Isheet) => sheet.sheetTitle !== "")
    return cleanedSheets
}