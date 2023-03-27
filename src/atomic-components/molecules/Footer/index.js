import React from 'react'
import { StyledFooter, ItemContainer, Link, Row } from './styles'
import {  Text } from '../../atoms/Text'
import theme from '../../../global/styles/theme'
import { BsLinkedin, BsFacebook, BsInstagram } from 'react-icons/bs'

const Footer = () => {

  const ItemContent = ({ heading, content1, content2, content3}) => (
    <ItemContainer>
      <Link first href='www'>
        <Text bold variant='white'>{heading}</Text>
      </Link>
      <Link  href='www'>
        <Text xsmall variant='white'>{content1}</Text>
      </Link>
      <Link href='www'>
        <Text xsmall variant='white'>{content2}</Text>
      </Link>
      <Link href='www'>
        <Text xsmall variant='white'>{content3}</Text>
      </Link>
    </ItemContainer>
  )

  return (
    <StyledFooter>
      <div style={{ width: '100%', height: 1,  marginBottom: 20, marginTop: 10, backgroundColor: theme.colors.secondary }} />
      <ItemContent 
        heading='Esportes'
        content1='Apostas Esportivas'
        content2='Futebol'
        content3='Basquete'
      />
      <ItemContent 
         heading='Promoções'
        content1='Esportivas'
        content2='Casino'
        content3='Bingo'
      />
      <ItemContent 
         heading='Links corporativos'
        content1='Programas de afiliados'
        content2='Carreras'
        content3='Investors'
      />
      <ItemContent 
         heading='Quem somos'
         content1='Quem somos'
         content2='Contato'
         content3='Política de uso'
      />
      <Row>
        <BsLinkedin color={theme.colors.white} size={25} />
        <BsFacebook color={theme.colors.white} size={25} />
        <BsInstagram color={theme.colors.white} size={25} />
      </Row>
    </StyledFooter>
  )
}

export default Footer