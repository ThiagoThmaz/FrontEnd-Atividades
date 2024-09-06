import { Link } from "react-router-dom";
import styles from './../../App.module.css'

export default function Menu(){

    return(
        <nav className={styles.nav}>
            <h1>Menu</h1>
            <span> / </span>
            <Link to='/produtos'>Produtos</Link>
        </nav>
    )
}