
import React from 'react';
import styles from './project.module.css';
import project from './data/project.json';
import { getImageUrl } from '../utility';
import Projectcard from './projectcard'

const Project = () =>{


    return(
        <section className={styles.container} id='project'>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {project.map((project,id) => {
                    return  <Projectcard key={id} project = {project}/>
                })}
            </div>
        </section>
    )
}


export default Project;