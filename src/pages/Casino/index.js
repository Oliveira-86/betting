import React from 'react'
import CasinoTemplate from '../../atomic-components/templates/Casino'
import casinoGames from '../../api/casinoGames'
import BottomBar from '../../atomic-components/molecules/BottomBar'
import useDeviceDetect from '../../hook/useDeviceDetect'

const Casino = () =>  {
  const { isMobile } = useDeviceDetect()
 
  return <>
    <CasinoTemplate casinoGames={casinoGames} />
    {isMobile ? <BottomBar /> : null }
  </>
}

export default Casino