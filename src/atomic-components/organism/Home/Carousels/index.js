import React from 'react'
import { StyledHomeCarousels, Row } from './styles';
import Card from '../../../atoms/Card';
import Banner from '../../../atoms/Image';
import { Title } from '../../../atoms/Text';
import { SPORTS } from '../../../../api/sports';
import TableRow from '../../../molecules/TableRow';
import bannerImage from '../../../../assets/casino4.jpg'
import { Button } from '../../../atoms/Button';
import SportsCarousel from '../../../molecules/SportsCarousel';

function HomeCarousels({ sportsList }) {
  
  return (
    <StyledHomeCarousels>
      <Row>
         <SportsCarousel list={sportsList} />
      </Row>
      <Row>
          {/* <ImagesCarousel badget={true} /> */}
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