import React from 'react'
import { StyledHomeContent, Row, Column } from './styles';
import Card from '../../../atoms/Card';
import Banner from '../../../atoms/Image';
import { Title } from '../../../atoms/Text';
import { NEXT_GAMES, SPORTS } from '../../../../api/sports';
import TableRow from '../../../molecules/TableRow';
import bannerImage from '../../../../assets/casino4.jpg'
import { Button } from '../../../atoms/Button';
import SportsCarousel from '../../../molecules/SportsCarousel';
import SportsBarside from '../../../molecules/SportsBarside';
import SportsColumn from '../../../molecules/SportsColumn';
import { If } from '../../../atoms/if';
import useDeviceDetect from '../../../../hook/useDeviceDetect';

function HomeContent({ sportsList, tableRowData }) {
  const { isMobile } = useDeviceDetect()
  
  return (

    <If  
      condition={isMobile}
      render={() => (
        <StyledHomeContent>
          <Row>
            <SportsCarousel list={sportsList} />
          </Row>
          {/* <Row>
            <SportsBarside style={{ width: '20%', marginRight: 10 }} heading='Esportes' />
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
                tableRowData={SPORTS}
                heading='Destaques'
              />  
            </Column>  
          </Row> */}
          <Card centered >
            <Banner style={{ marginTop: 25, marginBottom: 25, borderRadius: 8, alignSelf: 'center' }} widthProps='280px'  src={bannerImage} alt='banner' />
          </Card>
          <Button style={{ width: '90%', marginLeft: 13, marginBottom: 25 }} variant='secondary' label='Aposte agora!!' textVariant='white' />
        </StyledHomeContent>
      )}
      renderElse={() => (
        <StyledHomeContent>
          <Row>
            <SportsCarousel list={sportsList} />
          </Row>
          <Row>
            <SportsBarside style={{ width: '20%', marginRight: 10 }} heading='Esportes' />
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