import { listaItem } from "../../lista"
import { items } from "../../items"
import { ImagesGerais } from "../../styled";
import { DivRP } from "../../styled";
import { DivMae } from "../../styled";
import { FooterRP } from "../../styled";
import AudioPlayer from "../audio";

export default function Saida(){
    const item: items[] = listaItem;

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
            <h3>Feito por Thiago Thomaz</h3>
            <br />
            <p>RM: 557992</p>
            </FooterRP>
        </DivMae>
    )
}


 