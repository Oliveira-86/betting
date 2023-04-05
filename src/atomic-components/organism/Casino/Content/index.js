import React from 'react'
import CasinoGames from '../../../molecules/CasinoGames'
import Input from '../../../atoms/Input'
import { InputContainer } from './styles'
import useDeviceDetect from '../../../../hook/useDeviceDetect'

const CasinoContent = ({ casinoGames }) => {
  const { isMobile } = useDeviceDetect()

  return (
    <>
      <InputContainer>
        <Input placeholder='Pesquise um jogo' style={{ width: isMobile? '95%' : '50%', alignSelf: 'center'}} />
      </InputContainer>
      <CasinoGames slide='Populares' title='Populares' casinoGames={casinoGames} hasArrow />
      <CasinoGames slide='Vivo' title='Ao Vivo' casinoGames={casinoGames} hasArrow />
      <CasinoGames slide='Novos' title='Novos Jogos' casinoGames={casinoGames} hasArrow />
      <CasinoGames slide='Casuais' title='Jogos Casuais' casinoGames={casinoGames} hasArrow />
      <CasinoGames slide='Raspadinha' title='Raspadinha' casinoGames={casinoGames} hasArrow />
    </>
  )
}

export default CasinoContent