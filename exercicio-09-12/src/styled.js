import styled from "styled-components";

export const DivEtiqueta = styled.div `
    font-family:Arial, Helvetica, sans-serif;

    form{
        width: 400px;
        margin: 0;
        background-color: blueviolet;
        color: white;
    }

    fieldset{
        padding: 20px;
    }

    legend {
        font-size: 20px;
        text-align: center;
        padding: 10px;
    }

    label{
        display: flex;
        flex-direction: column;
        padding-bottom: 10px;
    }

    input{
        padding: 5px; 
        border-radius: 5px;
        border: none;
        background-color: #3f3;
    }

    .painel {
        width: 90%;
        display: flex;
        margin: auto;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .etiqueta {
        padding: 10px;
        border: 5px solid #509;
        width: 300px;
        margin: 10px;
        background-color: #a5f;
        border-radius: 5px;
        color: white;
    }
`