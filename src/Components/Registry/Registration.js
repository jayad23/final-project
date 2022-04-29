import React from "react";
import styles from "../Log_in/LoginComponent.module.css";
import mainStyles from "../../Pages/Login/Login.module.css";
const Registration = ()=>{
    return (
        <main className={styles.main}>
            <form
                className={styles.form}
                >
                <input placeholder="username"/>
                <input placeholder="email address"/>
                <input placeholder="password"/> 
                <input placeholder="repeat Password"/>
                <div>
                    <button className={mainStyles.registryButton}>Register</button>
                </div>
            </form>
        </main>
    )
}

export default Registration;