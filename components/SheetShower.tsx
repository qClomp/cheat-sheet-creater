
import { Link} from "react-router-dom"

// Styles
import { 
    Scheatsheet,
    Ssheetcontainer, 
    Ssheetname,
} from "../styles/StyledSheetContainer"
import { Scontent, Screatesheet, Snamespan, Ssheet, Ssheetshower, Stitle } from "../styles/StyledSheet";
import { Ssiteinfo, Sline } from "../styles/StyledGlobal";

import { Icheatsheet } from "../pages/PageCheatSheet";

export default function SheetShower(props:any) {

    const inSheet:Icheatsheet = props.inSheet
    const sheetContent = inSheet.sheetData
    
    return(
        <Ssheetshower>
            <Ssiteinfo>
                <span style={{fontSize:"2em"}}>Cheat Sheet</span>
                <Link to="/">
                    <Screatesheet>Create Your Own Sheet</Screatesheet>
                </Link>
            </Ssiteinfo>
            
            <Scheatsheet>
                <Ssheetname>
                    <Snamespan>{ inSheet.sheetName }</Snamespan>
                </Ssheetname>

                <Sline></Sline>

                <Ssheetcontainer>
                {sheetContent.map((sheet:any) => {
                    return <SheetBox
                                    key={sheetContent.indexOf(sheet)}
                                    sheetTitle={sheet.sheetTitle}
                                    sheetContent={sheet.sheetContent}
                                    />
                }) }
                </Ssheetcontainer>
                
            </Scheatsheet>
        </Ssheetshower>
    )
}

const SheetBox  = (props:any) => {
    
    const sheetTitle = props.sheetTitle;
    const sheetContent = props.sheetContent;

    return(
        <Ssheet>
            <Stitle>{sheetTitle}</Stitle>
            <Sline></Sline>
            <Scontent>{sheetContent}</Scontent>
        </Ssheet>
    )
}