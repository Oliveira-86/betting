import React from 'react'
import CasinoContent from '../../organism/Casino/Content';
import CasinoHeader from '../../organism/Casino/Header';

function CasinoTemplate({ casinoGames }) {

  return (
    <>
      <CasinoHeader />
      <CasinoContent casinoGames={casinoGames} />
    </>
  )
}

export default CasinoTemplate