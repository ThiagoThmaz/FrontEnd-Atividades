import { tbb } from "../../tbb"
import { items } from "../../items"
import { ImagesGerais, DivMae, DivRP, FooterRP, ErrorMessage, ErrorLink } from "../../styled";
import AudioPlayer from "../../Components/audio";
import { Link } from "react-router-dom";

export default function Home(){
    const item: items[] = tbb;
    return(
        <DivMae>
            <DivRP>
            {item.map((i, index) => (
                <div key={index}>
                    <h3>{i.nome}</h3>
                    <p>{i.descricao}</p>
                    <ImagesGerais src={i.img.src} alt={i.img.alt} />
                </div>
                
            ))}
            </DivRP>
            <FooterRP>
            <AudioPlayer/>
            <br />
            <ErrorMessage><ErrorLink as={Link} to='/js'>Jovem Sheldon</ErrorLink></ErrorMessage>
            <br />
            <h3>Feito por: Thiago Thomaz</h3>
            <br/>
            </FooterRP>
        </DivMae>
    )
}


 