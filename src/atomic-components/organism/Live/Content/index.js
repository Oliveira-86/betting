import React from 'react'
import { StyledHomeContent, Row, Column } from './styles';
import Card from '../../../atoms/Card';
import { NEXT_GAMES, SPORTS } from '../../../../api/sports';
import { SPORTS_BASKET, SPORTS_TENNIS } from '../../../../api/sports_lives';
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
import NavBar from '../../../molecules/NavBar';
import theme from '../../../../global/styles/theme';

function LiveContent({ sportsList, sportsCategory, sportsChampionship }) {
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
              /> 
              <TableRow 
                tableRowData={SPORTS}
                heading='Próximos Jogos'
              />  
            </Column>
          </Row> 
          <Button style={{ width: '90%', marginLeft: 13, marginBottom: 15, marginTop: 15 }} variant='secondary' label='VER TODOS OS EVENTOS' textVariant='white' /> 
          <Image src={vertical_banner} style={{ width: '90%', borderRadius: 8, marginTop: 10, marginLeft: 18 }}  /> 
        </StyledHomeContent>
      )}
      renderElse={() => (
          <>
          <NavBar />
            <StyledHomeContent>
              <Row>
                <SportsBarside 
                  live 
                  heading='Esportes' 
                  liveHeading='Campeonatos' 
                  sportsCategory={sportsCategory} 
                  sportsChampionship={sportsChampionship} 
                  style={{ width: '20%', marginRight: 10 }} 
                />
                <Column style={{ width: '60%', marginRight: 10 }}>
                  <TableRow 
                    tableRowData={SPORTS}
                    heading='Futebol'
                  /> 
                  <TableRow 
                    tableRowData={SPORTS_BASKET}
                    heading='Basquete'
                  /> 
                  <TableRow 
                    tableRowData={SPORTS_TENNIS}
                    heading='Tênis'
                    tennis
                  /> 
                  <TableRow 
                    tableRowData={SPORTS}
                    heading='Baseball'
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
        </>
      )}
  />
    
  )
}

export default LiveContent