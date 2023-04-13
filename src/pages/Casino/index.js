import React from 'react'
import CasinoTemplate from '../../atomic-components/templates/Casino'
import casinoGames from '../../api/casinoGames'
import BottomBar from '../../atomic-components/molecules/BottomBar'
import useDeviceDetect from '../../hook/useDeviceDetect'
import Footer from '../../atomic-components/molecules/Footer'

const Casino = () =>  {
  const { isMobile } = useDeviceDetect()
 
  return <>
    <CasinoTemplate casinoGames={casinoGames} />
    
    <Footer />
    {isMobile ? <BottomBar /> : null }
  </>
}

export default Casino