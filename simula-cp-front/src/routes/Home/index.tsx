import Menu from "../../components/Menu/Menu";
import style from '../../App.module.css'

export default function Home(){
    return(
        <main className={style.main}>
            <h2>Home</h2>
            <Menu/>
        </main>
    )
}