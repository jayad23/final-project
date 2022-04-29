import React from "react";

import styles from "./Login.module.css";

const Login = ()=>{
    return (
        <main className={styles.main}>
            <article className={styles.article}>
                <div className={styles.titleContainer}>
                    <section className={styles.titleSection}>
                        <h1 className={styles.title}>Next-Flick</h1>
                    </section>
                    <section className={styles.buttonContainer}>
                        <button 
                            className={styles.loginButton}
                           >Log in</button>
                        <button 
                            className={styles.registryButton}
                            >Register</button>
                    </section>
                    
                </div>
                <div className={styles.showFormContainer}>
                    
                </div>
            </article>
        </main>
    )
}

export default Login;