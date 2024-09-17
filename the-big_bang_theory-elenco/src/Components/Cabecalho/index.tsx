import { HeaderB, ErrorLink } from "../../styled";
import { Link } from "react-router-dom";

export default function Cabecalho() {
    return (
        <HeaderB>
            <h1>Universo The Big Bang Theory</h1>
            <nav>
                <ul>
                    <li>
                        <ErrorLink as={Link} to='/js'>Jovem Sheldon</ErrorLink>
                    </li>
                    <li>
                        <ErrorLink as={Link} to='/'>The Big Bang Theory</ErrorLink>
                    </li>
                </ul>
            </nav>
        </HeaderB>
    );
}

    

