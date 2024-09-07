import { Image, items } from "./items";
import sheldon from "./../public/sheldon.jpg"
import penny from "./../public/penny.jpg"
import rajesh from "./../public/rajesh.png"
import leonard from "./../public/leonard.jpg"
import howard from "./../public/howard.jpg"
import bernadette from "./../public/bernadette.jpg"
import amy from "./../public/amy.jpg"
import stuart from './../public/stuart.jpg'
import canela from './../public/canela.jpg'
import will from './../public/will.jpg'
import emily from './../public/emilly.webp'
import arthur from './../public/arthur.jpg'
import missy from  './../public/missy.jpg'
import george from  './../public/george.jpg'

const sheldonImg: Image = {
    src: sheldon,
    alt: 'Sheldon'
}

const amyImg: Image = {
    src: amy,
    alt: 'Amy'
}

const pennyImg: Image = {
    src: penny,
    alt: 'Penny'
}

const leonardImg: Image = {
    src: leonard,
    alt: 'Leonard'
}

const rajeshImg: Image = {
    src: rajesh,
    alt: 'Rajesh'
}

const howardImg: Image = {
    src: howard,
    alt: 'Howard'
}

const bernadetteImg: Image = {
    src: bernadette,
    alt: 'Bernadette'
}

const stuartImg: Image = {
    src: stuart,
    alt: 'Stuart'
}

const canelaImg: Image = {
    src: canela,
    alt: 'canela'
}

const willImg: Image = {
    src: will,
    alt: 'Will'
}

const emillyImg: Image = {
    src: emily,
    alt: 'Emily'
}

const arthurImg: Image = {
    src: arthur,
    alt: 'Arthur'
}

const missyImg: Image = {
    src: missy,
    alt: 'Missy'
}

const georgeImg: Image = {
    src: george,
    alt: 'George'
}

export const listaItem: items[] = [
    {
       img: sheldonImg,
       nome: 'Sheldon',
       descricao: 'Sheldon Cooper'
    },
    {
        img: amyImg,
        nome: 'Amy',
        descricao: 'Amy Farrah Fowler'
    },
    {
        img: pennyImg,
        nome: 'Penny',
        descricao: 'Penny Hofstadter'
    },
    {
        img: leonardImg,
        nome: 'Leonard',
        descricao: 'Leonard Hofstadter'
    },
    {
        img: rajeshImg,
        nome: 'Rajesh',
        descricao: 'Rajesh Koothrappali'
    },
    {
        img: howardImg,
        nome: 'Howard',
        descricao: 'Howard Wolowitz'
    },
    {
        img: bernadetteImg,
        nome: 'Bernadette',
        descricao: 'Bernadette Rostenkowski'

    },
    {
        img: stuartImg,
        nome: 'Stuart',
        descricao: 'Stuart Bloom'

    },
    {
        img: canelaImg,
        nome: 'Canela',
        descricao: 'Cadela do Raj'

    },
    {
        img: willImg,
        nome: 'Will',
        descricao: 'Wil Wheaton'

    },

    {
        img: emillyImg,
        nome: 'Emily',
        descricao: 'Emily Sweeney'

    },
    {
        img: arthurImg,
        nome: 'Arthur',
        descricao: 'Professor Proton'

    },
    {
        img: missyImg,
        nome: 'Missy',
        descricao: 'Missy Cooper'

    },
    {
        img: georgeImg,
        nome: 'George',
        descricao: 'George Cooper Jr'

    },

]