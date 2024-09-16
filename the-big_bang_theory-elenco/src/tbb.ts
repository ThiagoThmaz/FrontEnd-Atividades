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

export const tbb: items[] = [
    {
       img: sheldonImg,
       nome: 'Sheldon Cooper',
       descricao: 'Jim Parsons'
    },
    {
        img: amyImg,
        nome: 'Mayim Bialik',
        descricao: 'Mayim Bialik'
    },
    {
        img: pennyImg,
        nome: 'Penny Hofstadter',
        descricao: 'Kaley Cuoco'
    },
    {
        img: leonardImg,
        nome: 'Leonard Hofstadter',
        descricao: 'Johnny Galecke'
    },
    {
        img: rajeshImg,
        nome: 'Rajesh Koothrappali',
        descricao: 'Kunal Nayyar'
    },
    {
        img: howardImg,
        nome: 'Howard Wolowitz',
        descricao: 'Simon Helberg'
    },
    {
        img: bernadetteImg,
        nome: 'Bernadette Rostenkowski',
        descricao: 'Melissa Rauch'

    },
    {
        img: stuartImg,
        nome: 'Stuart Bloom',
        descricao: 'Kevin Sussman'

    },
    {
        img: canelaImg,
        nome: 'Canela',
        descricao: 'Cadela do Raj'

    },
    {
        img: willImg,
        nome: 'Will Wheaton',
        descricao: 'Wil Wheaton'

    },

    {
        img: emillyImg,
        nome: 'Emily Sweeney',
        descricao: 'Laura Spencer'

    },
    {
        img: arthurImg,
        nome: 'Bob Newhart',
        descricao: 'Professor Proton'

    },
    {
        img: missyImg,
        nome: 'Missy Cooper',
        descricao: 'Courtney Henggeler'

    },
    {
        img: georgeImg,
        nome: 'George Cooper Jr',
        descricao: 'Jerry O Connell'

    },

]