import React, { useEffect, useState } from 'react'
import { StyledHomeCarousels, Row, Container, StyledCarHomeCarousel } from './styles';
import Carousel from '../../../molecules/Carousel';
import { GiSoccerBall, GiBasketballBall, GiAmericanFootballBall } from 'react-icons/gi'
import { IoMdTennisball } from 'react-icons/io'
import { FaVolleyballBall } from 'react-icons/fa'
import theme from '../../../../global/styles/theme';
import ScoreCard from '../../../molecules/ScoreCard';
import Badge from '../../../atoms/Badge';
import Card from '../../../atoms/Card';
import Banner from '../../../atoms/Image';
import { Text, Title } from '../../../atoms/Text';
import { SPORTS } from '../../../../api/sports';
import TableRow from '../../../molecules/TableRow';
import bannerImage from '../../../../assets/casino4.jpg'
import { Button } from '../../../atoms/Button';

function HomeCarousels({ sportsList }) {
  
  return (
    <StyledHomeCarousels>
     <Row>
        {/* <Carousel icon title='Melhores Eventos' swicth>
            {sportsList?.map((item) =>  (   
              <Container key={item.id}>
                <ScoreCard 
                    logo1={item.logo1}
                    logo2={item.logo2}
                    altTeam1={item.team1} 
                    altTeam2={item.team2}
                    nameTeam1={item.team1} 
                    nameTeam2={item.team2}
                    league={item.league}
                    goalsTeam1={item.goals.team1}
                    goalsTeam2={item.goals.team2} 
                    time={item.time} 
                  />
              </Container>          
            ))}
        </Carousel> */}
     </Row>
     <Row>
        {/* <Carousel badget={true} /> */}
     </Row>

     <Card widthProps={'100%'} style={{ padding: 10, marginTop: 10}}>
      <Title 
          verticalMargin={'10px'} 
          variant='grey' 
          level={3}
      >
        Próximas Partidas
      </Title>
     </Card>
     {SPORTS?.map((item) =>  (   
        <TableRow 
          id={item.id}
          team1={item.team1}
          team2={item.team2}
          time={item.time}
          bet1={item.bet[0]}
          bet2={item.bet[1]}
          bet3={item.bet[2]}
        />         
      ))
    }
    <Card centered >
      <Banner style={{ marginTop: 25, marginBottom: 25, borderRadius: 8, alignSelf: 'center' }} widthProps='280px'  src={bannerImage} alt='banner' />
    </Card>
    <Button style={{ width: '90%', marginLeft: 13, marginBottom: 25 }} variant='secondary' label='Aposte agora!!' textVariant='white' />
    </StyledHomeCarousels>
  )
}

export default HomeCarousels