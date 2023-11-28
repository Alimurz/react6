import React from "react";
import Styles from './Styles.module.css'
function AboutUs() {
    return(
        <div className={Styles['background']}>
            <div className={Styles['text']}>
                <h1>Random Company Name Generator</h1>
                <span>Your job is terrible unless you work for one of these top companies. 
                     Pick a random company and apply to work there. 
                     Benefits are probably good. Hopefully you get some stock options. 
                        Really though, its still going to be a terrible job and you're probably not qualified.
                 </span>
                <h3>Lorem</h3>
                <span>
                     Something interesting...
                </span>
            </div>
        </div>
    )
}
export default AboutUs