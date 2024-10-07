import { getImageUrl } from "../utility";
import styles from './hero.module.css';



const Hero = ()=>{

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hii i'm Anil</h1>
                <p className={styles.description}>
                Aspiring Python full-stack developer with a strong foundation
                in developing end-to-end web applications. Passionate about creating 
                robust backend services using Python, Django. Quick learner, adaptable,
                and eager to contribute
                to dynamic development teams.
                </p>

                <a href="mailto:nayakanil43603@gmail.com" className={styles.contactbtn}>Contact Me</a>

            </div>
            <div className={styles.logo_container}>
            <img src={getImageUrl('hero/img.png')} alt="My img" className={styles.round_logo} />
        
            </div>

            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
}

export default Hero;