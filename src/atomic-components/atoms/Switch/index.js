import React, { useState } from 'react'
import activeIcon from '../../../assets/Icons/SwitchActive.png'
import disactiveIcon from '../../../assets/Icons/SwitchDisactive.png'

function Switch() {
  const [isActive, setIsActive] = useState(false);


  return (
   <>
    {isActive ? (
      <img src={activeIcon} alt='active' onClick={() => setIsActive(false)} />
    ) : (
      <img src={disactiveIcon} alt='disactive' onClick={() => setIsActive(true)} />
    )}
   </>
  )
}

export default Switch