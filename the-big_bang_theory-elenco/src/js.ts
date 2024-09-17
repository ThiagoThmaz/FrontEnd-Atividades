import { Image, items } from "./items";
import jovemshelly from './../public/jovemsheldon.jpg'
import missicooper from './../public/missycooper.jpg'
import george from './../public/georgecp.jpg'
import georgepai from './../public/georgeFather.jpg'
import mary from './../public/mary.jpg'
import meewa from './../public/mewmaa.jpg'

const jovemsheldonIgm: Image = {
    src: jovemshelly,
    alt: 'Sheldon'
}

const missicooperImg: Image = {
    src: missicooper,
    alt: 'Missy'
}

const georgecpImg: Image = {
    src: george,
    alt: 'George JR'
}

const georgeFatherImg: Image = {
    src: georgepai,
    alt: 'George'
}

const maryImg: Image = {
    src: mary,
    alt: 'Mary'
}

const meewaImg: Image = {
    src: meewa,
    alt: 'Meemaw'
}





export const js: items[] = [
    {
       img: jovemsheldonIgm,
       nome: 'Sheldon Cooper',
       descricao: 'Iain Armitage'
    },
    {
        img: missicooperImg,
        nome: 'Missy Cooper',
        descricao: 'Raegan Revord'
     },
     {
        img: georgecpImg,
        nome: 'Georger Cooper JR',
        descricao: 'Montana Jordan'
     },
     {
        img: georgeFatherImg,
        nome: 'Georger Cooper',
        descricao: 'Lance Barber'
     },
     {
        img: maryImg,
        nome: 'Mary Cooper',
        descricao: 'Zoe Perry'
     },
     {
        img: meewaImg,
        nome: 'Meemaw',
        descricao: 'Annie Potts'
     },



]