import { listaItem } from "../../lista"
import { items } from "../../items"

export default function Saida(){
    const item: items[] = listaItem;

    return(
        <>
            {item.map((i, index) => (
                <div key={index}>
                    <h3>{i.nome}</h3>
                    <p>{i.descricao}</p>
                    <img src={i.img.src} alt={i.img.alt} />
                </div>
            ))}
        </>
    )
}


 