import { tbb } from "../../tbb"
import { items } from "../../items"
import { ImagesGerais, DivMae, DivRP, FooterRP} from "../../styled";
import AudioPlayer from "../../Components/audio";

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
            <br />
            <h3>Feito por: Thiago Thomaz</h3>
            <br/>
            </FooterRP>
        </DivMae>
    )
}


 