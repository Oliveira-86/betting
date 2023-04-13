import React from 'react'
import { Text, Title } from '../../atoms/Text'
import { StyledSportsColumn, StyledRightColumn } from './styles'
import ScoreCardSecondary from '../ScoreCardSecondary'


const SportsColumn = ({ heading, tableRowData }) => {
  const list = tableRowData?.slice(0, 2)
  
  return (
    <>
      <StyledRightColumn>
        <StyledSportsColumn>
          <Title 
            level={2}
            verticalMargin={'20px'} 
            variant='grey'       
            style={{ padding: 10 }}
          >
            {heading}
          </Title> 
          {list?.map((item) =>  (  
              <ScoreCardSecondary 
                logo1={item.logo1} 
                logo2={item.logo2} 
                altTeam1={item.team1} 
                altTeam2={item.team2} 
                nameTeam1={item.team1} 
                nameTeam2={item.team2} 
                league={item.league} 
                goalsTeam1={item.goals.team1} 
                goalsTeam2={item.goals.team2} 
                time={item.time.hour}
                bet={item?.bet?.odd} 
              />
          ))}
          </StyledSportsColumn>
        </StyledRightColumn>
    </>
  )
}

export default SportsColumn