import React, { useState } from 'react'

import styles from '../styles/components/Tooltip.module.css';

function Tooltip({ infoText, children }) {

    const [showTooltip, setShowTooltip] = useState(false);

    const showTip = () => {
        setShowTooltip(true)
        setTimeout(() => {
            setShowTooltip(false);
        }, 5000);
    }

  return (
    <div 
        className={styles.tooltipContainer}
        onClick={() => showTip()}
    >

        {!children ? <span className='tooltipKey'>?</span> : children}

        {showTooltip && (
            <div className={styles.tooltip}>
                <span className={styles.tooltipText}>{infoText}</span>
            </div>
        )}
      
    </div>
  )
}

export default Tooltip
