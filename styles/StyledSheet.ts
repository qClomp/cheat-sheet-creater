
import styled from"styled-components"

export const Ssheet = styled.div`
    outline: 0.01em wheat solid;
    display: flex;
    flex-direction: column;
    
    width: 95%;
    height: max-content;
    padding: 1%;
    `

export const Sinputtitle = styled.input`
    width: 97%;
    `

export const Sinputinfo = styled.textarea`
    min-height: 100px;
    height: auto;
    resize: none;
    /* overflow: hidden; */
    max-width: 97%;
    `

export const Ssheettop = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    `

export const Sdelete = styled.img`
    background-color: red;
    border: none;
    border-radius: 0.5em;
    width: 7%;
    aspect-ratio: 1 / 1;

    &:hover {
        background-color: rebeccapurple;
    }
    `

// SheetShower
export const Ssheetshower = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    gap: 1em;
    `

export const Snamespan = styled.span`
    width: max-content;
    font-size: 2em;
    `

export const Stitle = styled.span`
    font-size: 1.5em;

    margin-left: 0.1em;

    `

export const Scontent = styled.span`
    margin-top: 0.5em;
    font-size: 1em;

    margin-left: 0.7em;
    `

export const Screatesheet = styled.button` 
    margin-top: 1em;
    `