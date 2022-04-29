import React from "react";
import styles from "./MovieCard.module.css";
const MovieCard = ({ id, title, synopsys, cover})=>{
    
        (
            <div className={styles.wrapper}>
                <section className={styles.containerCoverSecond}>
                    <img src={cover} alt="image_of_movie" className={styles.coverSecond}/>
                    
                </section>
                <section className={styles.containerInformation}>
                    <span className={styles.movieTitle}>{title}</span>
                    <span className={styles.title}>Synopsys of the movie:</span>
                    <p className={styles.info}>{synopsys}</p>
                    <button className={styles.button}>Go Back</button>
                </section>
            </div>
        )
  
        (
            <div 
                className={styles.containerCover}
                
                >
                <img 
                    src={cover} alt="image_of_movie"
                    className={styles.cover}
                    />
                <span className={styles.title}>{title}</span>
            </div>
        )

}

export default MovieCard;