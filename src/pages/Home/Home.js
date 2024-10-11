import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Main from './Main/Main'
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile'

export default function Home() {
  return (
    <div className='bg-[#0d0c1d] text-white'>
      <Header />
      <HeaderMobile />
      <Main />
      <Footer />
    </div>
  )
}
