"use client"
import { TipoProduto } from "@/types"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CadastroProdutos(){
    
    const navigate = useRouter()

    const [produto, setProduto] = useState<TipoProduto>({
        id:0,
        nome:"",
        preco:0,
        estoque:0,
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target
        setProduto({...produto,[name]:value})
    }

    const handlesubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const cabecalho = {
            method: "POST",
            headers:  {"Content-Type": "application/json"},
            body: JSON.stringify(produto)
        }

        try{
            const response = await fetch('http://localhost:3000/api/base-produtos',cabecalho)
            if(response.ok){
                alert(`${produto.nome} cadastro com sucesso!`)
                setProduto({id: 0 , nome: "" , preco: 0, estoque:0})
                navigate.push('/produtos')
            }else{
                alert("Erro ao cadastrar!")
                }
            } catch (error) {
                console.error("Error ao cadastrar produto", error)
            }
        }
    
    
    return(
        <main>
            <h1>Cadastro</h1>
            <p>Aqui inserimos um novo produto assim que chega na loja.</p>
            <form onSubmit={handlesubmit}>
                <div>
                    <label htmlFor="idnome">Nome</label>
                    <input type="text"  name="nome" id="idnome" value={produto.nome} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="idPreco">Preço</label>
                    <input step={'0.01'} type="number" name="preco" id="idpreco" value={produto.preco} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="idestoque">Estoque</label>
                    <input type="number" name="estoque" id="idestoque" value={produto.estoque}  onChange={handleChange}/>
                </div>
                <button type='submit'>Cadastrar Produto</button>
            </form>
        </main>
    )
}