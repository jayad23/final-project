import React from "react";
import styles from "./LoginComponent.module.css";
import mainStyles from "../../Pages/Login/Login.module.css";

const LoginComponent = ()=>{
    return (
        <main className={styles.main}>
            <form
                className={styles.form}
                >
                <input placeholder="username"/>
                <input placeholder="password" type="password"/> 
                <div>
                    <button className={mainStyles.loginButton}>Log in</button>
                </div>
            </form>
        </main>
    )
}

export default LoginComponent;