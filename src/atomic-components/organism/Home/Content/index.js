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

function HomeContent({ sportsList, tableRowData }) {
  
  return (
    <StyledHomeContent>
      <Row>
         <SportsCarousel list={sportsList} />
      </Row>
      <Row>
        <SportsBarside heading='Esportes' />
        <Column style={{ width: '40%', marginRight: 10 }}>
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
          <TableRow 
            tableRowData={SPORTS}
            heading='Ao vivo'
          />  
        </Column>  
      </Row>
      <Card centered >
        <Banner style={{ marginTop: 25, marginBottom: 25, borderRadius: 8, alignSelf: 'center' }} widthProps='280px'  src={bannerImage} alt='banner' />
      </Card>
      <Button style={{ width: '90%', marginLeft: 13, marginBottom: 25 }} variant='secondary' label='Aposte agora!!' textVariant='white' />
    </StyledHomeContent>
  )
}

export default HomeContent