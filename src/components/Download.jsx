import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'
const Download = () => {
    const handleOnCLick = () => {
        window.open('https://github.com/Synonymous64/landing-page', '_blank')
    }
    return (
        <div className={`${styles.section} ${styles.bgWhite}`}>
            <div className={`${styles.subSection} flex-col text-center`}>
                <div>
                    <h1 className={`${styles.h1Text}`}>
                        Download the Source Code
                    </h1>
                    <p className={`${styles.pText}`}>
                        Get the full source code on Github
                    </p>
                </div>
                <button className={styles.btnPrimary}
                    onClick={handleOnCLick}
                >
                    source code

                </button>
                <div className={styles.flexCenter}>
                    <img
                        src={assets.scene}
                        alt='scene'
                        className={styles.fullImg}
                    />
                </div>
            </div>
        </div>
    )
}

export default Download
