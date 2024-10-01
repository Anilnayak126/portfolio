
import styles from './contact.module.css';
import { getImageUrl } from "../utility";

const Contact = () =>{


    return (
       <footer id='contact' className={styles.container}>

        <div className={styles.text}>
        <h2 className={styles.title}>Contact</h2>
        <p>Feel free to  reach out!</p>
        </div>

        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt="myemail" />
                <a href="mailto:nayakanil43603@gmail.com">nayakanil43603@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt="mylinkedin" />
                <a href="https://www.linkedin.com/in/anil-kumar-nayak">www.linkedin.com/in/anil-kumar-nayak</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt="my email" />
                <a href="https://www.github.com/Anilnayak126">www.github.com</a>
            </li>
            
        </ul>

       </footer>
    );
}


export default Contact;