import React from 'react'
import { SPORTS_CATEGORY, SPORTS_CHAMPIONSHIP } from '../../api/sports'
import LiveTemplate from '../../atomic-components/templates/Live'

function Live() {
  return (
    <> 
      <LiveTemplate sportsCategory={SPORTS_CATEGORY}  sportsChampionship={SPORTS_CHAMPIONSHIP} />
    </>
  )
}
export default Live