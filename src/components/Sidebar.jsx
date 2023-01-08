import React from 'react'
import profile from '../img/profile.jpg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'

const Sidebar = () => {
  return (
    <aside id='sidebar'>
        <img src={profile} alt='George Lima' />
        <p className='title'> <b>George Lima</b><br/>Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className="btn">Download cv</a>
    </aside>
  )
}

export default Sidebar