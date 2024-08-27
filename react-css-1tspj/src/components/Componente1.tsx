import styled from 'styled-components'

const DivComp1 = styled.div`
    border: 2px solid lime;
    background-color: #333;
    padding: 15px;

    /*Nesting - Recurso que aninha os seletores CSS */
    h2{
        color: lime;
    }

    p{
        color:#f5f7ff;
        font-size: 1.3em;
    }
`

export default function Componente1(){

    return(
        <DivComp1>
            <h1>Componente 1</h1>
            <p>Este e o Componente 1</p>
        </DivComp1>
    )
}