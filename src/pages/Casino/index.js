import React from 'react'
import CasinoTemplate from '../../atomic-components/templates/Casino'
import casinoGames from '../../api/casinoGames'



const Casino = () =>  <CasinoTemplate casinoGames={casinoGames} />

export default Casino