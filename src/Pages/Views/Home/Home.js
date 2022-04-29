import React from "react";
import styles from "./Home.module.css";

const Home = ()=>{
    return (
        <div>
            <section className={styles.welcomeHeader}>
                <aside>
                    <h2 className={styles.welcome}>
                        Welcome back, "User"
                    </h2>
                </aside>
                
                <aside>
                    <form className={styles.form}>
                        <input 
                            placeholder="What to watch?"
                            type="text"
                        />
                        <button className={styles.searchButton}><i className="fa fa-search"></i></button>
                    </form>
                </aside>
            </section>
            <section className={styles.sectionCards}>
                
            </section>
        </div>
    )
}

export default Home;