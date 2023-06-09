import React from 'react'
import { StyledHomeContent, Row, Column } from './styles';
import Card from '../../../atoms/Card';
import { NEXT_GAMES, SPORTS } from '../../../../api/sports';
import TableRow from '../../../molecules/TableRow';
import { Button } from '../../../atoms/Button';
import SportsCarousel from '../../../molecules/SportsCarousel';
import SportsBarside from '../../../molecules/SportsBarside';
import SportsColumn from '../../../molecules/SportsColumn';
import { If } from '../../../atoms/if';
import useDeviceDetect from '../../../../hook/useDeviceDetect';
import FilterCarousel from '../../../molecules/FilterCarousel';
import Image from '../../../atoms/Image';
import vertical_banner from '../../../../assets/vertical_banner.jpg'
import BettingCard from '../../../molecules/BettingCard';
import { useState } from 'react';

function HomeContent({ sportsList, sportsCategory }) {
  const [bet1, setBet1] = useState(null)
  const [bet2, setBet2] = useState(null)
  const [bet3, setBet3] = useState(null)

  const { isMobile } = useDeviceDetect()

  return (

    <If  
      condition={isMobile}
      render={() => (
        <StyledHomeContent isMobile={isMobile}>
          <SportsCarousel sportsList={sportsList} />
          <FilterCarousel sportsCategory={sportsCategory} />
          <Row>
            <Column style={{ width: '100%' }}>
              <TableRow 
                tableRowData={SPORTS}
                heading='Destaques'
                swicth
                setBet1
                setBet2
                setBet3
              /> 
              <TableRow 
                tableRowData={SPORTS}
                heading='Próximos Jogos'
                setBet1
                setBet2
                setBet3
              />  
            </Column>
          </Row> 
          <Button style={{ width: '90%', marginLeft: 13, marginBottom: 15, marginTop: 15 }} variant='secondary' label='VER TODOS OS EVENTOS' textVariant='white' /> 
          <Image src={vertical_banner} style={{ width: '90%', borderRadius: 8, marginTop: 10, marginLeft: 18 }}  /> 
        </StyledHomeContent>
      )}
      renderElse={() => (
        <StyledHomeContent>
          <Row>
            <SportsCarousel hasArrow sportsList={sportsList} />
          </Row>
          <Row>
            <SportsBarside style={{ width: '20%', marginRight: 10 }} heading='Esportes' sportsCategory={sportsCategory} />
            <Column style={{ width: '60%', marginRight: 10 }}>
              <TableRow 
                tableRowData={SPORTS}
                heading='Ao vivo'
                setBet1={setBet1}
                setBet2={setBet2}
                setBet3={setBet3}
              /> 
              <TableRow 
                tableRowData={SPORTS}
                heading='Próximos Jogos'
                setBet1={setBet1}
                setBet2={setBet2}
                setBet3={setBet3}
              />  
            </Column>
            <Column style={{ width: '30%', justifyContent: 'flex-start'}}>
              <BettingCard />
              <SportsColumn 
                tableRowData={SPORTS.slice(3)}
                heading='Destaques'
              />  
            </Column>  
          </Row>
        </StyledHomeContent>
      )}
  />
    
  )
}

export default HomeContent