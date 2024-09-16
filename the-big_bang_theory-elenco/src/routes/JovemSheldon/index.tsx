import { DivMae, DivRP } from "../../styled"
import { ImagesGerais } from "../../styled"
import { items } from "../../items";
import { js } from "../../js";


export default function JovemSheldon(){
    const item: items[] = js;

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
    </DivMae>
    )
}