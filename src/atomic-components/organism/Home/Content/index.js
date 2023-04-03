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

function HomeContent({ sportsList, sportsCategory }) {
  const { isMobile } = useDeviceDetect()
  
  return (

    <If  
      condition={isMobile}
      render={() => (
        <StyledHomeContent isMobile={isMobile}>
          <SportsCarousel list={sportsList} />
          <FilterCarousel sportsCategory={sportsCategory} />
          <Row>
            <Column style={{ width: '100%' }}>
              <TableRow 
                tableRowData={SPORTS}
                heading='Destaques'
                swicth
              /> 
              <TableRow 
                tableRowData={NEXT_GAMES}
                heading='Próximos Jogos'
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
            <SportsCarousel hasArrow list={sportsList} />
          </Row>
          <Row>
            <SportsBarside style={{ width: '20%', marginRight: 10 }} heading='Esportes' sportsCategory={sportsCategory} />
            <Column style={{ width: '60%', marginRight: 10 }}>
              <TableRow 
                tableRowData={SPORTS}
                heading='Ao vivo'
              /> 
              <TableRow 
                tableRowData={NEXT_GAMES}
                heading='Próximos Jogos'
              />  
            </Column>
            <Column style={{ width: '30%'}}>
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