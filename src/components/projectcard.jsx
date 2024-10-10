import React, { useState } from "react";
import styles from "./projectcard.module.css";
import { getImageUrl } from "../utility";
import ReadMore from "./Readmore";

const Projectcard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        className={styles.image}
        alt={`image of ${title}`}
      />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.description}>
        <ReadMore  text={description} maxLength={100} />
      </div>
      <ul className={styles.skills}>
        {skills.slice(0, showMore ? skills.length : 2).map((skill, id) => (
          <li className={styles.skill} key={id}>
            {skill}
          </li>
        ))}
      </ul>
      {skills.length > 2 && (
        <button className={styles.showMore} onClick={handleToggle}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          {" "}
          Source
        </a>
      </div>
    </div>
  );
};

export default Projectcard;
