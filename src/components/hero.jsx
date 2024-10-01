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

            <img src={getImageUrl('hero/heroImage.png')} alt="My img" className={styles.heroimg} />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
}

export default Hero;