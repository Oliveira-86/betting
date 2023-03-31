import React from 'react'
import { Text, Title } from '../../atoms/Text'
import { StyledSportsColumn, StyledRightColumn, Row, StyledCasinoGames } from './styles'
import ScoreCardSecondary from '../ScoreCardSecondary'
import Image from '../../atoms/Image'
import jetx from '../../../assets/casino/jetx.jpg'
import aviator from '../../../assets/casino/aviator.jpg'
import magic_world from '../../../assets/casino/magic_world.png'
import magic_garden from '../../../assets/casino/magic_garden.png'
import magic_frog from '../../../assets/casino/magic_frog.png'
import legion_gold from '../../../assets/casino/legion_gold.jpg'
import Card from '../../atoms/Card'
import theme from '../../../global/styles/theme'

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
                bet={item.bet} 
              />
          ))}
          </StyledSportsColumn>
          <Card style={{ paddingRight: 25, paddingLeft: 25, paddingBottom: 20 }} heading='Cassino Games'>
            <Row style={{ marginBottom: 12 }}>
              <Image src={jetx} style={{ width: 150, height: 120, borderRadius: 12 }} />
              <Image src={magic_frog} style={{ width: 150, height: 120, borderRadius: 12, background: theme.colors.blue }} />
            </Row>
            <Row style={{ marginBottom: 12 }}>
              <Image src={magic_garden} style={{ width: 150, height: 120, borderRadius: 12, background: theme.colors.shadow }} />
              <Image src={magic_world} style={{ width: 150, height: 120, borderRadius: 12, background: theme.colors.blue }} />
            </Row>
            <Row style={{ marginBottom: 12 }}>
              <Image src={legion_gold} style={{ width: 150, height: 120, borderRadius: 12 }} />
              <Image src={aviator} style={{ width: 150, height: 120, borderRadius: 12, background: theme.colors.blue  }} />
            </Row>
            <Row style={{ marginBottom: 12 }}>
              <Image src={magic_garden} style={{ width: 150, height: 120, borderRadius: 12, background: theme.colors.shadow }} />
              <Image src={magic_world} style={{ width: 150, height: 120, borderRadius: 12, background: theme.colors.blue }} />
            </Row>
          </Card>
        </StyledRightColumn>
    </>
  )
}

export default SportsColumn