import { getImageUrl } from "../utility";
import styles from './about.module.css';

const About = () => {


    return (
        <section className={styles.container} id='About'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                
                <ul className={styles.aboutitems}>

                    <li className={styles.aboutitem}>
                        <img src={getImageUrl('about/cursorIcon.png')} alt="Cursor" />

                        <div className={styles.aboutitemtext}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I'm a frontend developer with exerpience in building responsive 
                                and optimized sites  
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutitem}>
                        <img src={getImageUrl('about/serverIcon.png')} alt="Cursor" />

                        <div className={styles.aboutitemtext}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience devloping fast and optimised back-end systems
                                and APIs
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutitem}>
                        <img src={getImageUrl('about/uiIcon.png')} alt="Cursor" />

                        <div className={styles.aboutitemtext}>
                            <h3>UI designer</h3>
                            <p>
                                I have designed multiple landing pages and have created design 
                                system as well
                            </p>
                        </div>
                    </li>

                
                </ul>
            </div>
        </section>
    );
}

export default About;