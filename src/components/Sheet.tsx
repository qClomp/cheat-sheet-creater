
import { useEffect, useRef, useState } from "react"

// Styles
import { Ssheet, 
    Sinputtitle,
    Sinputinfo,
    Ssheettop,
    Sdelete,
} from "../styles/StyledSheet"

import thrashicon from "../public/thrash.svg"

interface Isheet {
    id: number,
    sheetTitle: string,
    sheetContent: string
}

export default function Sheet(props:any) {

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    
    const [ sheetdata, setSheetdata ] = useState<Isheet>({
            id: props.id,
            sheetTitle: props.sheetTitle,
            sheetContent: props.sheetContent
    })

    const contentChange = (inEvent:any) => {
        setSheetdata({
            ...sheetdata,
            [inEvent.target.name]: inEvent.target.value
        })
    }

    useEffect(() => {
        props.inputSheet(sheetdata.id, sheetdata)
    }, [sheetdata])

    useEffect(() => {
        if(textareaRef && textareaRef.current) {
            textareaRef.current.style.height = "0px";
            let scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = scrollHeight + "px"
        }
    }, [sheetdata.sheetContent])

    return(
        <Ssheet>
            <Ssheettop>
                <Sinputtitle
                placeholder="Title"
                value={sheetdata.sheetTitle}
                name="sheetTitle"
                onChange={(e) => contentChange(e)}
                />
                <Sdelete src={thrashicon} onClick={() => props.deleteSheet(sheetdata.id)}/>
            </Ssheettop>
            <Sinputinfo 
            ref={textareaRef}
            placeholder="Add Detail"
            value={sheetdata.sheetContent}
            name="sheetContent"
            onChange={(e) => contentChange(e)}
            />
            
        </Ssheet>
    )
}