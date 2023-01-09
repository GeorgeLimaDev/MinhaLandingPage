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
        <a href="https://drive.google.com/file/d/1EJyEIUN_7SEeFr3Qir1RcpU5aDD-advD/view?usp=sharing" className="btn" title='Acesse meu currículo para maiores detalhes sobre meu perfil profissional.'>Ver currículo</a>
    </aside>
  )
}

export default Sidebar