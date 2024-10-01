import React from "react";
import skills from '../components/data/skill.json'
import history from '../components/data/history.json'
import { getImageUrl } from "../utility";
import styles from './experience.module.css'

const Experience = () =>{
     
    return (
        <section className={styles.container}id="experience">
            <h2 className={styles.title}>skills</h2>
            <div className={styles.content}>
                <div className={styles.skills}>{
                    skills.map((skills,id) => {

                        return <div key= {id} className={styles.skill}>
                            <div className={styles.imagecontainer}>
                                <img  src={getImageUrl(skills.imageSrc)} alt={skills.title}/>

                            </div>
                            <p>
                                {skills.title}
                            </p>

                        </div>

                    })
                    }
                    </div>
                    <h1 className={styles.eduactiontitle}>EDUCATION</h1>
                <ul className={styles.history}>
                    {
                        history.map((historyItem,id) => {
                            return <li key={id} className={styles.historyitem}> 
                                <img 
                                className={styles.image}
                                src={getImageUrl(historyItem.imageSrc)} 
                                alt={`${historyItem.organisation} logo`} 
                                />
                                <div className={styles.historyitemdetails}>
                                    <h3>
                                        {`${historyItem.role}`}
                                    </h3>
                                    <h3>
                                        {`${historyItem.organisation}`}
                                    </h3>
                                    <p>{`${historyItem.startDate}-${historyItem.endDate}`}</p>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>

        </section>
    );

}


export default Experience;