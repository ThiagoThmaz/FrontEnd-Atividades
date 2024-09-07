import { listaItem } from "../../lista"
import { items } from "../../items"
import { ImagesGerais } from "../../styled";
import { DivRP } from "../../styled";

export default function Saida(){
    const item: items[] = listaItem;

    return(
        <DivRP>
            {item.map((i, index) => (
                <div key={index}>
                    <h3>{i.nome}</h3>
                    <p>{i.descricao}</p>
                    <ImagesGerais src={i.img.src} alt={i.img.alt} />
                </div>
            ))}
        </DivRP>
    )
}


 