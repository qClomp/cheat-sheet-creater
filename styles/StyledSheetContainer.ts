
import styled from"styled-components"

export const Scheatsheet = styled.div`
    outline: 2px black solid;
    background-color: rgb(20, 20, 20);

    padding: 0.2em;

    width: 50%;
    min-width: 500px;
    max-height: 95vh;
    height: max-content;
    overflow-y: auto;
    overflow-x: hidden;
    `

export const Saddsheet = styled.button`
    margin-left: 25%;
    margin-top: 2em;
    width: 10em;
    height: 5em;
    `

export const Ssheetcontainer = styled.div`

    width: 100%;
    height: max-content;

    padding: 0.5%;
    display: grid;
    gap: 0.4em;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;


    `

export const Ssheetname = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
    margin-left: 1em;
    height: 7%
    `

export const Sinputname = styled.input`
    width: 60%;
    height: 50%;
    padding-left: 0.5em;
    `