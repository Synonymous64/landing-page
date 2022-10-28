import React from 'react'
import styles from '../styles/Global';
const Button = ({ assetsUrl, Link }) => {
    return (
        <div className={styles.btnBlack}
            onClick={() => window.open(Link, "_blank")}>
            <img
                src={assetsUrl} alt="expo_icon"
                className={`${styles.btnIcon}`} />
            <div className="flex flex-col justify-start ml-4" style={{ marginLeft: "12px" }}>
                <p className={`${styles.btnText} font-normal text-xs`}>
                    click to view
                </p>
                <p className={`${styles.btnText} font-bold text-sm`}>
                    Expo Store
                </p>
            </div>
        </div>
    )
}

export default Button;
