import { Image, items } from "./items";
import jovemshelly from './../public/jovemsheldon.jpg'
import missicooper from './../public/missycooper.jpg'


const jovemsheldonIgm: Image = {
    src: jovemshelly,
    alt: 'Sheldon'
}

const missicooperImg: Image = {
    src: missicooper,
    alt: 'Sheldon'
}



export const js: items[] = [
    {
       img: jovemsheldonIgm,
       nome: 'Sheldon',
       descricao: 'Sheldon Cooper'
    },
    {
        img: missicooperImg,
        nome: 'Sheldon',
        descricao: 'Sheldon Cooper'
     },

]