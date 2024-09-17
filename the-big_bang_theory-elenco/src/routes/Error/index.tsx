import { Link } from "react-router-dom";
import { ErrorContainer, ErrorLink, ErrorMessage, ErrorTitle } from "../../styled";

export default function Error(){
    document.title = "Error"
    return(
        <ErrorContainer>
        <ErrorTitle>
            <h1>Error 404 - Pagina não encontrada.</h1>
        </ErrorTitle>
        <ErrorMessage>Voltar para a Pagina principal <ErrorLink as={Link} to='/'>Clique aqui</ErrorLink></ErrorMessage>
       </ErrorContainer>       
    )
}