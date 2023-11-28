import React from "react";
import Styles from './Styles.module.css'
function SignIn(){
    return(
    <div className={Styles['center']}>
        <form className={Styles['sign']}>
            <div className={Styles['forms-item']}>
                <label className={Styles['inputs-label']}>Username</label>
                <input type="text" placeholder="Write your Username..." className={Styles['forms-input']}/>
            </div>
            <div className={Styles['forms-item']}>
                <label className={Styles['inputs-label']}>Password</label>
                <input type="password" placeholder="Write your password..." className={Styles['forms-input']}/>
            </div>
            <div>
            <input type="checkbox"/>
            <label>Remember me</label>
            </div>
            <button className={Styles['sign-in-button']}>Sign In</button>
        </form>
     </div>
        
    )
}
export default SignIn;