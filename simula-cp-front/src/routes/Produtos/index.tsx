import { listaProdutos } from "../../listaProdutos";
import { Link } from "react-router-dom";

export default function Produto(){
    return (
        <div>
            <h1>Produtos</h1>
            {listaProdutos.map((produto)=>(
                <div key={produto.id}>
                    {produto.nome} - <Link to={`/produtos/editar/:${produto.id}`}>Editar Produto</Link>
                </div>
            ))}
        </div>
    )
}