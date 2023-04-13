import React from 'react'
import {  Row } from './styles'
import Image from '../../atoms/Image'
import magic_world from '../../../assets/casino/magic_world.png'
import magic_garden from '../../../assets/casino/magic_garden.png'
import magic_frog from '../../../assets/casino/magic_frog.png'
import Card from '../../atoms/Card'
import theme from '../../../global/styles/theme'

const HomeCasinoGamesCard = () => {
  return (
    <Card style={{ paddingRight: 25, paddingLeft: 25, paddingBottom: 20 }} heading='Cassino Games'>
      <Row style={{ marginBottom: 12 }}> 
        <Image src={magic_world} style={{ width: '48%', height: '25%', borderRadius: 12, background: theme.colors.secondary }} />
        <Image src={magic_frog} style={{ width: '48%', height: '25%', borderRadius: 12, background: theme.colors.blue }} />
      </Row>
      <Row style={{ marginBottom: 12 }}>
        <Image src={magic_garden} style={{ width: '48%', height: '25%', borderRadius: 12, background: theme.colors.shadow }} />
        <Image src={magic_world} style={{ width: '48%', height: '25%', borderRadius: 12, background: theme.colors.blue }} />
      </Row>
      <Row style={{ marginBottom: 12 }}>
        <Image src={magic_world} style={{ width: '48%', height: '25%', borderRadius: 12, background: theme.colors.secondary }} />
        <Image src={magic_frog} style={{ width: '48%', height: '25%', borderRadius: 12, background: theme.colors.grey }} />
      </Row>
      <Row style={{ marginBottom: 12 }}>
        <Image src={magic_garden} style={{ width: '48%', height: '25%', borderRadius: 12, background: theme.colors.shadow }} />
        <Image src={magic_world} style={{ width: '48%', height: '25%', borderRadius: 12, background: theme.colors.grey_strong }} />
      </Row>
    </Card>
  )
}

export default HomeCasinoGamesCard