import React from 'react'
import useDeviceDetect from '../../../hook/useDeviceDetect';
import CasinoContent from '../../organism/Casino/Content';
import CasinoHeader from '../../organism/Casino/Header';

function CasinoTemplate({ casinoGames }) {
  
  const { isMobile } = useDeviceDetect()

  return (
    <>
      <CasinoHeader />
      <CasinoContent casinoGames={casinoGames} />
    </>
  )
}

export default CasinoTemplate