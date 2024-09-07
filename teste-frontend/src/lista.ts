import { Image, items } from "./items";
import sheldon from "./../public/sheldon.jpg"

const sheldonImg: Image = {
    src: sheldon,
    alt: 'Imagens'
}

export const listaItem: items[] = [
    {
       img: sheldonImg,
       nome: 'Siri',
       descricao: 'Um siri fazendo barra'
    },
    {
        img: sheldonImg,
        nome: 'Penny Penny Penny',
        descricao: 'Bazinga'
    },
    {
        img: sheldonImg,
        nome: 'Tenho Carencia',
        descricao: 'Sem meme.. tristeza'
    }

]