
import { useRef } from "react"

// Components
import Sheet from "./Sheet"

// Styles
import { 
    Saddsheet, 
    Scheatsheet,
    Ssheetcontainer, 
    Ssheetname,
    Sinputname
} from "../styles/StyledSheetContainer"
import { Sline } from "../styles/StyledGlobal"

interface Isheet {
    id: number,
    sheetTitle: string,
    sheetContent: string
}

export default function SheetContainer(props:any) {

    const sheets = props.sheet
    const setSheets = props.setSheet

    const addSheet = () => {
        setSheets([
            ...sheets,
            {
                id: sheets.length,
                sheetTitle: "",
                sheetContent: ""
            }
        ])
    }

    const deleteSheet = (id:number) => {
        const newSheets = sheets.filter((sheet:any) => sheets.indexOf(sheet) !== id)
        setSheets(newSheets)
    }

    const inputSheet = (id:number, inSheet:any) => {
        let sheetIndex = sheets.findIndex((sheet:Isheet) => sheet.id === id)
        sheets[sheetIndex] = inSheet
        setSheets(sheets)
    }

    return(
        <Scheatsheet>
            <Ssheetname>
                <h2>Sheet Name</h2>
                <Sinputname
                    placeholder="Insert a Name for Cheat Sheet"
                    value={props.sheetName}
                    onChange={(e:any) => { props.setSheetName(e.target.value)}}
                />
            </Ssheetname>

            <Sline></Sline>

            <Ssheetcontainer>
                {sheets.map((content:any) => {
                    return <Sheet key={sheets.indexOf(content)} 
                                id={sheets.indexOf(content)} 
                                sheetTitle={content.sheetTitle}
                                sheetContent={content.sheetContent}
                                inputSheet={inputSheet}
                                deleteSheet={deleteSheet}
                                />
                })}

                <Saddsheet onClick={() => addSheet()}>Add Content</Saddsheet>
            </Ssheetcontainer>
            
        </Scheatsheet>
    )
}