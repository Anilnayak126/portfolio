
import Reac,{useState,}  from "react";
import styles from './navbar.module.css';
import {getImageUrl} from '../utility'

function Nav(){
    const [menuopen,setMenuOpen] = useState(false)

    return(
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>

            <div className={styles.menu}>
                
                <img className = {styles.menubtn} src={
                     menuopen ? getImageUrl('nav/closeIcon.png')
                    :getImageUrl('nav/menuIcon.png')
                }  
                alt="menu-button"
                onClick={()=> setMenuOpen(!menuopen)}
                />

                <ul className={`${styles.menuitem} ${menuopen && styles.menuopen}`} 
                onClick={()=> setMenuOpen(false)}>

                    <li><a href="#About">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;