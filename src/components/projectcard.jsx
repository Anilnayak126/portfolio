
import React,{useState} from "react";
import styles from './projectcard.module.css';
import { getImageUrl } from '../utility';


 const  Projectcard = ({
    project: { title, imageSrc, description, skills, demo, source },}) =>{
        
    return(
        <div className={styles.container}>
            <img src= {getImageUrl(imageSrc)} className={styles.image} alt={`image of ${title}`} />
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.description}>{description}</p>
                        <ul className={styles.skills}>
                            {skills.map((skill,id)=>{
                                return <li className={styles.skill} key={id} >{skill}</li>
                            })}
                        </ul>
                         <div className={styles.links}>
                            <a href={demo} className={styles.link}>Demo</a>
                            <a href={source} className={styles.link}> Source</a>
                         </div>
 
                    </div>

    )
}

export default Projectcard;